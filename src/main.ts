import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { BlogEffects } from './app/shared/store/Blog/Blog.Effects';
import { Actions } from '@ngrx/effects';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app/app.routes';
import { AppState } from './app/shared/store/Global/App.state';
import { AppEffect } from './app/shared/store/Global/app.Effect';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), 
    provideStore(AppState),
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(EffectsModule.forRoot()), 
    provideEffects(BlogEffects,AppEffect),                  
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
});

