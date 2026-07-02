import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { providePrimeNG } from "primeng/config";
import Aura from "@primeuix/themes/aura";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    providePrimeNG({
      theme: { preset: Aura },
    }),
  ],
};
