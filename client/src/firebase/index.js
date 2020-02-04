const firebase = require('firebase/app');
const firebaseStorage = require('firebase/storage');
const firebaseConfig = {
  apiKey: 'AIzaSyD3dSEkK4NG7WO-zH-xbi9_J-0yl_xIVEs',
  authDomain: 'travel-link-f95ab.firebaseapp.com',
  databaseURL: 'https://travel-link-f95ab.firebaseio.com',
  projectId: 'travel-link-f95ab',
  storageBucket: 'travel-link-f95ab.appspot.com',
  messagingSenderId: '126641234823',
  appId: '1:126641234823:web:eff74c6a87680bdc896922'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase };
