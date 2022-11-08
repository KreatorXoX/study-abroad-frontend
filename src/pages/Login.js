import React from 'react'
import LoginImage from '../assets/images/loginImage.jpg'
import LoginForm from '../components/LoginForm/LoginForm'
import Slider from '../shared/components/UI-Elements/Slider'
import './Login.css'
const Login = () => {
  return (
    <div className='container'>
      <div className='loginFormPlacement'>
        <div className='loginContent'>
          <div className='loginSide'>
            <img src={LoginImage} alt='loginForm' />
            <p className='no-mini'>One Step Closer</p>
          </div>
          <div className='loginForm'>
            <h2 style={{ color: 'rgb(12, 69, 102)', textAlign: 'left' }}>
              Login Form
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
      <div className='slider'>
        <Slider />
      </div>
    </div>
  )
}

export default Login
