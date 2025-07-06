// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/shared/store/counter.reducer';
import { Routes } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideStore({ counter: counterReducer })
  ]
});
