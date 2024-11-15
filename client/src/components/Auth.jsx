import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/emoji.png';

const initialState = {
  fullName: '',
  username: '',
  password: '',
  confirmPassword: '',
  phoneNumberL: '',
  avatarURL: ''
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);   

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(form); 
    }

    const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
    };

  return (
    <div className='auth__form-container'>
      <div className='auth__form-container_fields'>
        <div className='auth__form-container_fields-content'>
            <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
            <form onSubmit={handleSubmit}>
                {isSignup && (
                    <div className='auth__form-container_fields-content_input'>
                        <label htmlFor="fullName">Full Name</label>
                        <input 
                            name='fullName' 
                            type="text"
                            placeholder="Enter your full name"
                            onChange={handleChange}
                            required
                                 />
                    </div>                    
                )}
                <div className='auth__form-container_fields-content_input'>
                        <label htmlFor="username">Username</label>
                        <input 
                            name='username' 
                            type="text"
                            placeholder="Enter your username"
                            onChange={handleChange}
                            required
                                 />
                    </div>
                {isSignup && (
                <div className='auth__form-container_fields-content_input'>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        name='phoneNumber' 
                        type="text"
                        placeholder="Enter your full phone number"
                        onChange={handleChange}
                        required
                                />
                </div>                    
                )}
                {isSignup && (
                <div className='auth__form-container_fields-content_input'>
                    <label htmlFor="avatarURL">Avatar URL</label>
                    <input 
                        name='avatarURL' 
                        type="text"
                        placeholder="Avatar URL"
                        onChange={handleChange}
                        required
                                />
                </div>                    
                )}
                <div className='auth__form-container_fields-content_input'>
                    <label htmlFor="password">Password</label>
                    <input 
                        name='password' 
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                                />
                </div>
                {isSignup && (
                <div className='auth__form-container_fields-content_input'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        name='confirmPassword' 
                        type="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        required
                                />
                </div>                    
                )}
                <div className='auth__form-container_fields-content_button'>
                  <button>{isSignup ? "Sign Up " : "Sign In"}</button>
                </div>
            </form>
            <div className='auth__form-container_fields-account'>
               <p>
              {isSignup ?  "Have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign up"}
              </span>
            </p>
            </div>           
        </div>        
      </div>
      <div className='auth__form-container_image'>
          <img src={signinImage} alt="sign-in"/>
        </div>
    </div>
  )
}

export default Auth
