import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDPaSFPcE3N9eUWuSxMhJZ1oHB7CiO_s9A",
    authDomain: "devpost-2099c.firebaseapp.com",
    projectId: "devpost-2099c",
    storageBucket: "devpost-2099c.appspot.com",
    messagingSenderId: "742735497824",
    appId: "1:742735497824:web:656344c9b525543cc3d105",
    measurementId: "G-8QXK4S61ZF"
  };

const firebaseapp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseapp);
export const auth = getAuth(firebaseapp);

  