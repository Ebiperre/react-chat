import React from "react";
import GoogleSignin from "/src/assets/btn_google_signin_dark_pressed_web.png";

const Welcome = () => {
  const googleSignIn = () => {
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/src/assets/btn_google_signin_dark_pressed_web.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;