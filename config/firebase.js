import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyANBHpcxOVpHfxDkbOAlxasmkxeu7Q_5mw',
  authDomain: 'meee-cards.firebaseapp.com',
  databaseURL: 'https://meee-cards.firebaseio.com',
  projectId: 'meee-cards',
  storageBucket: 'meee-cards.appspot.com',
  messagingSenderId: '372631265496'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const firebaseApp = firebase;
