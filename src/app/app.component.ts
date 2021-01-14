import { Component } from '@angular/core';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCl4pl-3th0VBnhDAoduOQIy9HGLKfBwD8',
  databaseURL: 'https://angularchat-748fd-default-rtdb.europe-west1.firebasedatabase.app'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}


