import React from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function AuthPage() {
  return<>
    <SignUpForm />
    {/* {user ? <LoginForm /> : <SignUpForm />} */}
    <LoginForm />
  
  </>;
}

export default AuthPage;
