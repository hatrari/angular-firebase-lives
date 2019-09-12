import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCnXiiWuBVm6OId782Ym96WyKh2MNnkKHc",
      authDomain: "angular-firebase-livre.firebaseapp.com",
      databaseURL: "https://angular-firebase-livre.firebaseio.com",
      projectId: "angular-firebase-livre",
      storageBucket: "",
      messagingSenderId: "1063864311906",
      appId: "1:1063864311906:web:db4ef9ad4cdd7cc9d9b13b"
    }
    firebase.initializeApp(config);
  }
}
