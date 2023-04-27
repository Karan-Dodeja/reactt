import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firbase/firebas.utils";

const Signin = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);

    // console.log(userDocRef);  
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>
        Signin with Google Popup
      </button>
    </div>
  )
}

export default Signin;