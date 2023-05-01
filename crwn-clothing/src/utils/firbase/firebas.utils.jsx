import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc,  getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBumlNX8ABB7zovfX-ux35KAmIhCFDO01w",
    authDomain: "crwn-clothing-db-4395c.firebaseapp.com",
    projectId: "crwn-clothing-db-4395c",
    storageBucket: "crwn-clothing-db-4395c.appspot.com",
    messagingSenderId: "909615698576",
    appId: "1:909615698576:web:394221384cbdde06273e15"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

    if(!userAuth) return;


    const userDocRef = doc(db,"users",userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log(error);
        }

    }
    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}