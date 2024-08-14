import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import SignUpPage from './sign_up';
// import SignInPage from './sign_in';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <SignUpPage/>
    {/* <SignInPage/> */}
  </React.StrictMode>
);


