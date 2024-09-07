import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
@Injectable({
  providedIn: 'root'
})

const firebaseConfig = {
  apiKey: "AIzaSyAobeNDQXOnbydL5D6Uh6_EE6oNKqJKtTI",
  authDomain: "chekonoftravancore.firebaseapp.com",
  projectId: "chekonoftravancore",
  storageBucket: "chekonoftravancore.appspot.com",
  messagingSenderId: "656080923505",
  appId: "1:656080923505:web:516325cf61e7854c0964d0",
  measurementId: "G-BF8Q7KJ4CH"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export class FirebaseService {

  constructor() { }

}
