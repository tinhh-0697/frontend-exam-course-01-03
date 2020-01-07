import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDHvo45SbABBh6poHpoKhwZK_xfFf9IRPo',
  authDomain: 'fir-react-final-course.firebaseapp.com',
  databaseURL: 'https://fir-react-final-course.firebaseio.com',
  projectId: 'fir-react-final-course',
  storageBucket: 'fir-react-final-course.appspot.com',
  messagingSenderId: '1080766918188',
  appId: '1:1080766918188:web:ee5ef490a8d0d73b7bab89',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
