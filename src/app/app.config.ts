import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  isDevMode,
  provideCheckNoChangesConfig,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    ...(isDevMode()
      ? [
          // enable extra checks in dev mode only
          provideCheckNoChangesConfig({
            exhaustive: true,
            interval: 3_000,
          }),
        ]
      : []),
  ],
};
