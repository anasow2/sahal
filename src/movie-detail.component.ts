import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Actor, Movie, MovieService } from './movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private movieService: MovieService = inject(MovieService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  selectedActor = signal<Actor | null>(null);

  private movieTitle = toSignal(
    this.route.params.pipe(map((params) => params['title'] as string))
  );

  movie = computed<Movie | undefined>(() => {
    const title = this.movieTitle();
    if (title) {
      // Decode URI component to handle spaces and special characters in titles
      return this.movieService.getMovieByTitle(decodeURIComponent(title));
    }
    return undefined;
  });

  safeTrailerUrl = computed(() => {
    const url = this.movie()?.trailerUrl;
    // Fix: Use a type guard to ensure the `url` is a string. This prevents passing a value of type `unknown` or `undefined`
    // to the sanitizer, which expects a string, thus resolving the compilation error.
    if (typeof url === 'string') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return null;
  });

  starRating = computed(() => {
    const movie = this.movie();
    if (!movie?.rating) {
      return [];
    }

    const stars: ('full' | 'half' | 'empty')[] = [];
    // Convert 10-point rating to a 5-star scale and round to the nearest half
    const fiveStarRating = Math.round((movie.rating / 2) * 2) / 2;

    const fullStars = Math.floor(fiveStarRating);
    const hasHalfStar = fiveStarRating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }

    if (hasHalfStar) {
      stars.push('half');
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push('empty');
    }

    return stars;
  });

  selectActor(actor: Actor): void {
    this.selectedActor.set(actor);
  }

  deselectActor(): void {
    this.selectedActor.set(null);
  }
}
