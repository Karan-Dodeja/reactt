import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBumlNX8ABB7zovfX-ux35KAmIhCFDO01w",
    authDomain: "crwn-clothing-db-4395c.firebaseapp.com",
    projectId: "crwn-clothing-db-4395c",
    storageBucket: "crwn-clothing-db-4395c.appspot.com",
    messagingSenderId: "909615698576",
    appId: "1:909615698576:web:394221384cbdde06273e15"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);