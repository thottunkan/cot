import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Database, set, ref, update, getDatabase } from 'firebase/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  firebaseConfig: any;
  db: any;
  constructor(private http: HttpClient) {
    this.firebaseConfig = {
      apiKey: "AIzaSyAobeNDQXOnbydL5D6Uh6_EE6oNKqJKtTI",
      authDomain: "chekonoftravancore.firebaseapp.com",
      projectId: "chekonoftravancore",
      storageBucket: "chekonoftravancore.appspot.com",
      messagingSenderId: "656080923505",
      appId: "1:656080923505:web:516325cf61e7854c0964d0",
      measurementId: "G-BF8Q7KJ4CH"
    };
    const app = initializeApp(this.firebaseConfig);
    const analytics = getAnalytics(app);
    this.db = getDatabase();
  }

  writePostData(postObj: any) {
    set(ref(this.db, 'posts/'), postObj);
  }
  findPostData(){
    
  }
}
