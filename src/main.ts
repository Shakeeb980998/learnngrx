import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/shared/store/counter.reducer';
import { BlogReducer } from './app/shared/store/Blog/Blog.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app/app.routes';
import { AppState } from './app/shared/store/Global/App.state';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), 
    provideStore(AppState),
    importProvidersFrom(BrowserAnimationsModule),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
});
