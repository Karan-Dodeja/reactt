import { useEffect } from "react";
import { signInWithGooglePopup, auth, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firbase/firebas.utils";
import { getRedirectResult } from 'firebase/auth';

const Signin = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  useEffect(async () => {
    const response = await getRedirectResult(auth);
    
    if(response) {
      const userDocref = await createUserDocumentFromAuth(response.user);
    }

  }, [])

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>
        Signin with Google Popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
        Signin with Google Seprate Page
      </button>
    </div>
  )
}

export default Signin;