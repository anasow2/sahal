
import { Injectable, signal, computed } from '@angular/core';

export interface Actor {
  name: string;
  bio: string;
  imageUrl: string;
}

export interface Movie {
  title: string;
  year: number;
  genre: string;
  imageUrl: string;
  badge?: string;
  rating?: number;
  synopsis: string;
  cast: Actor[];
  trailerUrl: string;
}

export interface SpecialSelection {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class MovieService {
  isSearchOpen = signal(false);
  searchQuery = signal('');

  newThisWeek = signal<Movie[]>([
    {
      title: 'Ayaanle',
      year: 2022,
      genre: 'Thriller',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BOWNlY2VmYmEtYmEzMi00MDRkLTk1MmUtZmU1MDRhZWI5YTk2XkEyXkFqcGdeQXVyMTU2MDQxMDU4._V1_.jpg',
      badge: 'New',
      synopsis:
        "A young, naive aspiring actor from the slums of Nairobi dreams of making it big. His life takes a dramatic turn when he gets entangled with the city's criminal underworld after a heist goes wrong.",
      cast: [
        { name: 'Ahmed Farah', bio: 'A rising star known for his intense and charismatic performances in East African cinema.', imageUrl: 'https://i.pravatar.cc/150?u=ahmedfarah' },
        { name: 'Ilkacase Qays', bio: 'A versatile actor and musician, beloved for his comedic timing and dramatic range.', imageUrl: 'https://i.pravatar.cc/150?u=ilkacaseqays' },
        { name: 'Bishaaro', bio: 'A talented actress who brings depth and emotion to every role she portrays.', imageUrl: 'https://i.pravatar.cc/150?u=bishaaro' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/5oGTuG80L-s',
    },
    {
      title: "The Gravedigger's Wife",
      year: 2021,
      genre: 'Drama',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMzM3OTYwMzYtYmQzMy00YjFmLWJiMzEtZDYxYjEwYjJjZWY2XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_FMjpg_UX1000_.jpg',
      badge: 'Awarded',
      synopsis:
        "Guled and Nasra are a loving couple, living in the outskirts of Djibouti city with their teenage son, Mahad. However, they are facing difficult times: Nasra urgently needs an expensive surgery to treat a chronic kidney disease. Guled is already working hard as a gravedigger to make ends meet: how can they find the money to save Nasra and keep the family together?",
      cast: [
        { name: 'Omar Abdi', bio: 'A veteran actor with a powerful screen presence, known for his subtle and moving performances.', imageUrl: 'https://i.pravatar.cc/150?u=omarabdi' },
        { name: 'Yasmin Warsame', bio: 'A Somali-Canadian model and actress who made a stunning debut in this critically acclaimed film.', imageUrl: 'https://i.pravatar.cc/150?u=yasminwarsame' },
        { name: 'Kadar Abdoul-Aziz Ibrahim', bio: 'A young actor who delivers a compelling and naturalistic performance.', imageUrl: 'https://i.pravatar.cc/150?u=kadaribrahim' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/lKIV2S22TEg',
    },
    {
      title: 'Xaafadeena',
      year: 2024,
      genre: 'Comedy',
      imageUrl:
        'https://somaliplate.com/wp-content/uploads/2023/06/Liibaan-Jokers-First-Somali-Comedy-Movie-in-Kenya-1-696x870.jpg',
      badge: '4K',
      synopsis:
        'A hilarious look at the daily lives, gossip, and quirky characters of a bustling Somali neighborhood in Nairobi.',
      cast: [
        { name: 'Liban Joker', bio: 'A social media sensation and comedian, bringing his unique brand of humor to the big screen.', imageUrl: 'https://i.pravatar.cc/150?u=libanjoker' },
        { name: 'Cawaale Star', bio: 'Known for his witty punchlines and relatable characters in Somali comedy circles.', imageUrl: 'https://i.pravatar.cc/150?u=cawaalestar' },
        { name: 'Amaal', bio: 'An up-and-coming actress with a natural flair for comedic roles.', imageUrl: 'https://i.pravatar.cc/150?u=amaal' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Guri',
      year: 2023,
      genre: 'Horror',
      imageUrl: 'https://i.ytimg.com/vi/IS52hXKG58M/maxresdefault.jpg',
      synopsis: 'A family moves into a new home, only to discover it is haunted by a malevolent spirit with a dark past connected to the land.',
      cast: [
        { name: 'Cali Dhaanto', bio: 'A musician and actor known for his commanding voice and presence.', imageUrl: 'https://i.pravatar.cc/150?u=calidhaanto' },
        { name: 'Faisa Ficis', bio: 'An actress who excels in horror, known for her expressive and chilling performances.', imageUrl: 'https://i.pravatar.cc/150?u=faisaficis' },
        { name: 'Ilays Cade', bio: 'A young actor praised for his ability to convey fear and suspense.', imageUrl: 'https://i.pravatar.cc/150?u=ilayscade' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Xusuus',
      year: 2023,
      genre: 'Romance',
      imageUrl: 'https://i.ytimg.com/vi/F-TCe4g5IeA/maxresdefault.jpg',
      synopsis: 'A chance encounter between two old flames reignites a long-lost love, but their pasts threaten to tear them apart once again.',
      cast: [
        { name: 'Nimcoan Hilaac', bio: 'A popular singer and actor, celebrated for his romantic lead roles.', imageUrl: 'https://i.pravatar.cc/150?u=nimcoanhilaac' },
        { name: 'Sharma Boy', bio: 'A multi-talented artist, bringing his smooth and charming persona to the screen.', imageUrl: 'https://i.pravatar.cc/150?u=sharmaboy' },
        { name: 'Hodan Abdirahman', bio: 'An actress known for her graceful performances in romantic dramas.', imageUrl: 'https://i.pravatar.cc/150?u=hodanabdirahman' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
        title: 'Ambad',
        year: 2019,
        genre: 'Drama',
        imageUrl: 'https://i.ytimg.com/vi/gihZz0sEL8M/maxresdefault.jpg',
        badge: 'Critically Acclaimed',
        synopsis: 'A story of political intrigue and betrayal, following a young idealist who gets caught in a dangerous power struggle.',
        cast: [
          { name: 'Abdikarim Ali', bio: 'Known for his strong performances in dramas that tackle complex social and political themes.', imageUrl: 'https://i.pravatar.cc/150?u=abdikarimali' },
          { name: 'Safia Tusmo', bio: 'A revered actress with a long and storied career in Somali theater and film.', imageUrl: 'https://i.pravatar.cc/150?u=safia' },
          { name: 'Jeyte', bio: 'A character actor known for his ability to portray complex and morally ambiguous figures.', imageUrl: 'https://i.pravatar.cc/150?u=jeyte' }
        ],
        trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    }
  ]);

  mostWatched = signal<Movie[]>([
    {
      title: 'Jaceyl Dhiig Ma lagu Qoray',
      year: 1987,
      genre: 'Classic Romance',
      imageUrl: 'https://i.ytimg.com/vi/o4dS0w5yD-s/hqdefault.jpg',
      rating: 9.8,
      synopsis:
        'A timeless classic of Somali cinema, this film explores the depths of love, sacrifice, and betrayal in a story that has captivated audiences for generations.',
      cast: [
        { name: 'Abdi Haybe', bio: 'A legendary actor of the golden age of Somali cinema, known as the "King of Romance".', imageUrl: 'https://i.pravatar.cc/150?u=abdihaybe' },
        { name: 'Asha Luul', bio: 'The iconic leading lady of her generation, celebrated for her beauty and powerful acting.', imageUrl: 'https://i.pravatar.cc/150?u=ashaluul' },
        { name: 'Said Harawo', bio: 'A master of stage and screen, famous for his villainous roles that were both feared and admired.', imageUrl: 'https://i.pravatar.cc/150?u=saidharawo' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Dhalinyaro',
      year: 2017,
      genre: 'Coming-of-Age',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BYWUyN2I2MDktYjY1Yi00MDc3LWI1N2YtZDRjMjkyM2MyZDI3XkEyXkFqcGdeQXVyNzc4NzEzMzA@._V1_FMjpg_UX1000_.jpg',
      rating: 9.1,
      synopsis:
        'The film follows the lives of three young women from different socio-economic backgrounds, navigating the challenges and triumphs of their final year of high school in Djibouti.',
      cast: [
        { name: 'Amina Mohamed Ali', bio: 'Delivered a breakout performance in "Dhalinyaro", praised for its authenticity and emotional depth.', imageUrl: 'https://i.pravatar.cc/150?u=aminamohamed' },
        { name: 'Tousmo Mouhoumed Adbo', bio: 'An actress who perfectly captured the spirit and struggles of modern youth in Djibouti.', imageUrl: 'https://i.pravatar.cc/150?u=tousmo' },
        { name: 'Bilan Samir', bio: 'A talented newcomer who brought warmth and humor to her role.', imageUrl: 'https://i.pravatar.cc/150?u=bilansamir' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Ciil-Caashaq',
      year: 2021,
      genre: 'Drama',
      imageUrl: 'https://i.ytimg.com/vi/tM6Lz0S0S0Y/maxresdefault.jpg',
      synopsis:
        'A modern drama about a twisted love that turns to obsession, exploring the darker side of passion and its consequences.',
      cast: [
        { name: 'Kaafi', bio: 'An intense actor who is not afraid to take on challenging and controversial roles.', imageUrl: 'https://i.pravatar.cc/150?u=kaafi' },
        { name: 'Ayaanita', bio: 'A captivating actress known for playing complex female characters.', imageUrl: 'https://i.pravatar.cc/150?u=ayaanita' },
        { name: 'Fartuun', bio: 'Brings a unique blend of vulnerability and strength to her performances.', imageUrl: 'https://i.pravatar.cc/150?u=fartuun' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Shalaay',
      year: 1987,
      genre: 'Classic Drama',
      imageUrl: 'https://i.ytimg.com/vi/zZc4WvYy5as/hqdefault.jpg',
      rating: 9.5,
      synopsis: 'A heartbreaking story of loss and regret, "Shalaay" is a classic drama that explores the consequences of decisions made in youth.',
      cast: [
        { name: 'Hibo Nuura', bio: 'A legendary singer and actress whose performances are filled with unmatched passion and soul.', imageUrl: 'https://i.pravatar.cc/150?u=hibonuura' },
        { name: 'Abdi Bille', bio: 'An iconic actor known for his dramatic roles that defined a generation of Somali cinema.', imageUrl: 'https://i.pravatar.cc/150?u=abdibille' },
        { name: 'Fadumo Nakruma', bio: 'A celebrated actress who brought dignity and gravitas to every role she played.', imageUrl: 'https://i.pravatar.cc/150?u=fadumonakruma' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Naima',
      year: 2023,
      genre: 'Short Film',
      imageUrl: 'https://i.ytimg.com/vi/3hAGJc31rA4/maxresdefault.jpg',
      rating: 8.9,
      synopsis: 'A powerful short film depicting a day in the life of a young woman in Mogadishu striving to achieve her dreams against all odds.',
      cast: [
        { name: 'Naima Abdi', bio: 'A fresh new face in Somali cinema, delivering a powerful and inspiring performance.', imageUrl: 'https://i.pravatar.cc/150?u=naimaabdi' },
        { name: 'Yusuf Garaad', bio: 'A respected actor who brings a grounding presence to his supporting roles.', imageUrl: 'https://i.pravatar.cc/150?u=yusufgaraad' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Ha Niiqin',
      year: 2022,
      genre: 'Short Film',
      imageUrl: 'https://i.ytimg.com/vi/CgE84i2V4h0/maxresdefault.jpg',
      synopsis: 'A tense and emotional short film that tackles difficult social issues through the eyes of a child.',
      cast: [
        { name: 'Lil Baliil', bio: 'A young artist who made a surprising and impactful acting debut in this short film.', imageUrl: 'https://i.pravatar.cc/150?u=lilbaliil' },
        { name: 'Filsan', bio: 'An actress who powerfully conveys emotion with minimal dialogue.', imageUrl: 'https://i.pravatar.cc/150?u=filsan' }
      ],
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    }
  ]);

  specialSelections = signal<SpecialSelection[]>([
    {
      category: 'Documentary',
      title: 'Taariikhda Fanka',
      description:
        'A journey through the history of Somali art and theater from the 1970s to today.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAOO8si_gmvY6yOrf-yj8NGmMnKiSiV7sSKRR-MzQBMZOyR3WAo2PsJplGIKSsecyyagduxNst3Zx_g0D6HJER0vDlf5xojGxfiaV0fpZnF0uqW-6OmlrAsOl-NVd7_dRPHbHFjhhW3y8_7mfkSdfdNaL3gXH6jDgt5-XjSn8dlOeDnxSkmQWpvF8h1kmhcY2z3ISbxFl8uVUol8v2HrtMk8TfJbobiHlcTfhM36CM2WcQUF6vyXpjKio28OjUNOtyyS8T4oE2X50UE',
    },
    {
      category: 'Series',
      title: 'Magaalada',
      description:
        'The untold stories of city life, ambition, and betrayal in modern Mogadishu.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBNtG5kPKwrKX5HUxZHOtMm0Yf707518cBqy8dco8Qny5vlEdKbBE9dmoyIXX3USYiOF2yLvBh8qFCLkHZZj-AiQH7KqTCXfYHzGJ_4gZa0eKLIeisycfoWwNELmVM4IdrY49NpxmAoqSXV697eM_nmdY3JtHiS9CbcUs6gdTb7Vw1xuYgd9eO4Cmx62VQ90uYgiR1tvcWavkj8m5fenWLl7QIUPa-LUmna7Oa29Ule6xlcMbNAmtcTYdEPhTRuJJ3xDsadefD5J8XG',
    },
    {
      category: 'Short Film',
      title: 'Rajada',
      description: 'A short film about hope and resilience in challenging times.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBQgAi5HhqlngOA1CKvXTpKxwwvKebtV2t5v434HAuKTuez4I5ijXFQzID2be54Cc7AlFDVbTdC0enDrF8NvxqYAEtFL4Fwa6FwS2ZNTLJtUU2hMPzujpHc0Yfxcq4Tv4hg4gQjtu-MbuvHHIMuR2nGkKXXCRnFCM_NyKD1p2y0BPm46YPI2Wu_xrKKbp-NSVD185JhCu4HbDC7zsCnggEJsuBus7Zd18TsrSNVRp8mYZTmPwJ6gLOHdvjv52r7jntgOuEhYyEMvnAr',
    },
  ]);

  allMovies = computed<Movie[]>(() => {
    const all = [...this.newThisWeek(), ...this.mostWatched()];
    const uniqueMovies = new Map<string, Movie>();
    all.forEach((movie) => {
      if (!uniqueMovies.has(movie.title)) {
        uniqueMovies.set(movie.title, movie);
      }
    });
    return Array.from(uniqueMovies.values());
  });

  searchResults = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) {
      return [];
    }
    return this.allMovies().filter(
      (movie) =>
        movie.title.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query) ||
        movie.year.toString().includes(query)
    );
  });

  getMovieByTitle(title: string): Movie | undefined {
    return this.allMovies().find((movie) => movie.title === title);
  }

  openSearch(): void {
    this.isSearchOpen.set(true);
  }

  closeSearch(): void {
    this.isSearchOpen.set(false);
    this.searchQuery.set(''); // Reset query on close
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
}
