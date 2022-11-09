import React from 'react'
import LoginImage from '../assets/images/loginImage.jpg'
import LoginForm from '../components/LoginForm/LoginForm'
import Slider from '../shared/components/UI-Elements/Slider'
import styles from './Login.module.css'
const Login = () => {
  return (
    <div className='container'>
      <div className={styles.loginFormPlacement}>
        <div className={styles.loginContent}>
          <div className={styles.loginSide}>
            <img src={LoginImage} alt='loginForm' />
            <p className={styles['no-mini']}>One Step Closer</p>
          </div>
          <div className={styles.loginForm}>
            <h2 style={{ color: 'rgb(12, 69, 102)', textAlign: 'left' }}>
              Login Form
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <Slider />
      </div>
    </div>
  )
}

export default Login
