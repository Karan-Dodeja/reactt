import React from 'react'
import { signInWithGooglePopup } from "../../utils/firbase/firebas.utils";

const signin = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return (
    <div>
      <h1>Sign In Component</h1>
      <button onClick={logGoogleUser}>
        Signin with Google Popup
      </button>
    </div>
  )
}

export default signin;