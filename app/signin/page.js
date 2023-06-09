'use client'


import React, { useState } from 'react'
import Styles from './signin.module.css'
import KawilabLogo from '../../public/modification1.png'
import Image from 'next/image'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '../../public/signin-up resources/icons8-google-96.png'
import Link from 'next/link'

export default function page({useradd}) {
  const [user, setUser] = useState(false)

  const handleuser = ()=>{
    setUser(true)
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    useradd(user);
  };
  return (
    <div className={Styles.SignIn}>

      <div className={Styles.formContainer}>
          <div className={Styles.logoContainer}>
            <Image src={KawilabLogo} height={150}/>
          </div>
          <form className={Styles.form} onSubmit={handleSubmit}>
              <div className={Styles.email}>
                <MailOutlineIcon className={Styles.emailIcon}/>
                <input className={Styles.emailInput} type='text' placeholder='Enter Your Email' required/>
              </div>
              <div className={Styles.password}>
                <LockOutlinedIcon className={Styles.PasswordIcon}/>
                <input className={Styles.passwordInput} type='password' placeholder='Enter Your Password' required />
              </div>
              <div className={Styles.CheckboxForgotPassword}>
                <div  className={Styles.checkboxRemember}>
                  <input type='checkbox'  className={Styles.checkbox}/>
                  <label>Remember me</label>
                </div>
                <div className={Styles.forgot}>Forgot Password?</div>
              </div>
              <button className={Styles.signinButton} onClick={handleuser}>Sign in</button>
              <h6 className={Styles.Noaccount}>Don't have an acccount? <Link href='/signup'>Sign Up</Link></h6>
              <div className={Styles.line}></div>
              <button className={Styles.google}>
                <Image src={GoogleIcon} height={25} className={Styles.googleImg}/>
                Login with Google
              </button>
          </form>
      </div>
    </div>
  )
}
