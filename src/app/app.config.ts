import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"chekonoftravancore","appId":"1:656080923505:web:516325cf61e7854c0964d0","databaseURL":"https://chekonoftravancore-default-rtdb.firebaseio.com","storageBucket":"chekonoftravancore.appspot.com","apiKey":"AIzaSyAobeNDQXOnbydL5D6Uh6_EE6oNKqJKtTI","authDomain":"chekonoftravancore.firebaseapp.com","messagingSenderId":"656080923505","measurementId":"G-BF8Q7KJ4CH"})), provideDatabase(() => getDatabase())]
};
