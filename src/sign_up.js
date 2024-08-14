import React, { useState } from 'react';
import './sign_up.css';
import sing_up_Image from './sing_up_Image.png';
import Google_image from './Google_image.png';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    
    const isValidEmail = validateEmail(newEmail);
    setIsValid(isValidEmail);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSignUpClick = () => {
    
    console.log('Sign up clicked!');
  };

  const handleSignInClick = () => {
    console.log('Sign in clicked!');
  };

  const handleGoogleSignInClick = () => {
    console.log('Sign in with Google clicked!');
  };

  return (
    <div className="my-div">
      <img className="my-img" loading="lazy" src={sing_up_Image} alt="Background" />
      <div className="my-div2">Create an account</div>
      <div className="my-div3">Enter your email to sign up for this app</div>
      <input
        className="my-div4"
        type="text"
        placeholder="email@domain.com"
        value={email}
        onChange={handleChange}
      />
      <div className="my-div5">
      <button className="my-div5" onClick={handleSignUpClick} disabled={!isValid}>
        Sign up with email
      </button>
      </div>
      <div className="my-div6">
      <button className="my-div6" onClick={handleSignInClick}>
        Already have an account? Sign in
      </button>
      </div>
      <div className="my-div7">
        <div className="my-div8"></div>
        <div className="my-div9">or continue with</div>
        <div className="my-div10"></div>
      </div>
      <button className="my-div11" onClick={handleGoogleSignInClick}>
        <img className="my-img2" loading="lazy" src={Google_image} alt="Google Logo" />
        <div className="my-div12">Google</div>
      </button>
      <div className="my-div13">
        By clicking continue, you agree to our Terms of Service and Privacy Policy
      </div>
    </div>
  );
}

export default SignUpPage;
