import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { authErrorInterceptor } from './services/myMovies/auth/auth-error.interceptor';
import { MessageService } from 'primeng/api';
import { authInterceptor } from './services/myMovies/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    MessageService,
    // Aqui configuramos o HttpClient e injetamos seu interceptor
    provideHttpClient(
      withInterceptors([authInterceptor, authErrorInterceptor])
    ),
    provideAnimations(),
  ],
};
