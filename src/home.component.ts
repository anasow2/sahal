
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  movieService = inject(MovieService);
}
