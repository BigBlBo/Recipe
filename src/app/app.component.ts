import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature: string;

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDunzMo1bzWxxLDwnKo9KQyp-ZNR22L1O8',
      authDomain: 'recipe-udemy-92620.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
