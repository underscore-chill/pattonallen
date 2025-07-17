import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})),
  
      provideToastr({
      closeButton: true,
      progressBar: true,
      maxOpened: 8,
      autoDismiss: true,
      timeOut: 3000,
      positionClass: 'toast-top-right',
    }),
  ]
};
