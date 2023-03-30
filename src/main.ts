import { environment } from './environments/environments';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp(environment.firebase);

let appInit = false;

if (!appInit) {
  firebase.auth().onAuthStateChanged(() => {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  });
  appInit = true;
}
