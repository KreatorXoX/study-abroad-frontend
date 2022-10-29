import React from "react";
import LoginImage from "../assets/images/loginImage.jpg";
import LoginForm from "../components/LoginForm/LoginForm";
import Slider from "../shared/components/UI-Elements/Slider";
import "./Login.css";
const Login = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="loginContent">
          <div className="loginSide">
            <img src={LoginImage} alt="loginForm" />
            <p>One Step Closer</p>
          </div>
          <div className="loginForm">
            <LoginForm />
          </div>
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Login;
