import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAQ16lZhWrmxrhJiOnOVE-Vr8ZxPniOL2g',
  authDomain: 'chatapp-dd5b1.firebaseapp.com',
  projectId: 'chatapp-dd5b1',
  storageBucket: 'chatapp-dd5b1.appspot.com',
  messagingSenderId: '630608558757',
  appId: '1:630608558757:web:b7cf98af060f9d1dd16b4c',
  measurementId: 'G-LXGTTNBDP5',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
