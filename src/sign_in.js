import React, { useState } from "react";
import './sign_in.css';
import Google_image from './Google_image.png';
import sign_in_image from './signIn_Image.jpg';
// import {Link} from 'react-router-dom';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailSignIn = () => {
    console.log('Signing in with email:', email, 'and password:', password);
  
  };

  const handleGoogleSignInClick = () => {
    console.log('Sign in with Google clicked!');
  };

  return (
    <div className="div">
      <img
        className="Img1"
        loading="lazy"
        src={sign_in_image}
        alt="background"
      />
      <div className="div2">Sign in</div>
      <div className="div3">Enter your email and password to sign in this app</div>
      <div>
        <input
          className="div4"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="password">
        <input
          className="div5"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button className="div6" onClick={handleEmailSignIn}>
          Sign in with email
        </button>
      </div>
      <div className="div7">Forgot your password?</div>
      <div className="div8">
        <div className="div9" />
        <div className="div10">or continue with</div>
        <div className="div11" />
      </div>
      <button className="div12" onClick={handleGoogleSignInClick}>
        <img
          className="Img2"
          loading="lazy"
          src={Google_image}
          alt="google"
        />
        <div className="div13">Google</div>
      </button>
      <div className="div14">
        By clicking continue, you agree to our Terms of Service and Privacy
        Policy
      </div>
    </div>
  );
}

export default SignInPage;
