
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import type { Routes } from '@angular/router';

import { AppComponent } from './src/app.component';
import { HomeComponent } from './src/home.component';
import { MovieDetailComponent } from './src/movie-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:title', component: MovieDetailComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation()),
  ],
}).catch((err) => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
