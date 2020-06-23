import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { loadTranslations } from '@angular/localize';
import { getTranslations, ParsedTranslationBundle } from '@locl/core';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// VORHER
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// TODO: find a way to switch languages (eg. browser language or token in session storage)
const messages = '/assets/messages.de.json';

// NEU:
getTranslations(messages).then(
  (data: ParsedTranslationBundle) => {
    loadTranslations(data.translations); // <-- this happens before bootstrap!
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }
);
