import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideIonicAngular({}), provideFirebaseApp(() => initializeApp({"projectId":"esp32-c0581","appId":"1:346969213795:web:03e13d3c0c8f0e34842156","databaseURL":"https://esp32-c0581-default-rtdb.firebaseio.com","storageBucket":"esp32-c0581.firebasestorage.app","apiKey":"AIzaSyCloAODcnZqaywUtJ5aFAviBhx4yYA9jQ0","authDomain":"esp32-c0581.firebaseapp.com","messagingSenderId":"346969213795"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"esp32-c0581","appId":"1:346969213795:web:03e13d3c0c8f0e34842156","databaseURL":"https://esp32-c0581-default-rtdb.firebaseio.com","storageBucket":"esp32-c0581.firebasestorage.app","apiKey":"AIzaSyCloAODcnZqaywUtJ5aFAviBhx4yYA9jQ0","authDomain":"esp32-c0581.firebaseapp.com","messagingSenderId":"346969213795"})), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({ projectId: "esp32-c0581", appId: "1:346969213795:web:03e13d3c0c8f0e34842156", databaseURL: "https://esp32-c0581-default-rtdb.firebaseio.com", storageBucket: "esp32-c0581.firebasestorage.app", apiKey: "AIzaSyCloAODcnZqaywUtJ5aFAviBhx4yYA9jQ0", authDomain: "esp32-c0581.firebaseapp.com", messagingSenderId: "346969213795" })), provideMessaging(() => getMessaging())]
};
