// Importe outros serviços conforme necessário

import { Injectable } from "@angular/core";
import { key } from "./key";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private app;
  public auth;
  public firestore;
  public storage;

  constructor() {
    const firebaseConfig = {
      apiKey: key,
      authDomain: "ebook-exemplo2.firebaseapp.com",
      projectId: "ebook-exemplo2",
      storageBucket: "ebook-exemplo2.firebasestorage.app",
      messagingSenderId: "407843143200",
      appId: "1:407843143200:web:775508a895c49f02bf8645"
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}
