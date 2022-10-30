import React, {useState} from 'react';
import { post_register } from '../services/users'
import '../css/signup_form.css'
  
const SignupForm = () => {

  const [userInfo, setInfo] = useState({
    first_name: '',
    last_name: '',
    user_name: '',
    password: ''
  });

  const Submit = (e) => {
    e.preventDefault();
    try {
        post_register(
          userInfo.first_name, 
          userInfo.last_name,
          userInfo.user_name, 
          userInfo.password
        );
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>   
      <h1>Signup</h1>
      <div className='form' onSubmit={Submit}>
      <form>
          <input 
            className='user-form-input' 
            type='text' 
            placeholder='First name' 
            value={userInfo.first_name}
            onChange={(e) => setInfo({...userInfo, first_name: e.target.value})}
          />
          <input 
            className='user-form-input' 
            type='text' 
            placeholder='Last name' 
            value={userInfo.last_name}
            onChange={(e) => setInfo({...userInfo, last_name: e.target.value})}
          />
          <input 
            className='user-form-input' 
            type='text' 
            placeholder='Username' 
            value={userInfo.user_name}
            onChange={(e) => setInfo({...userInfo, user_name: e.target.value})}
          />
          <input 
            className='user-form-input' 
            type='text' 
            placeholder='Password' 
            value={userInfo.password}
            onChange={(e) => setInfo({...userInfo, password: e.target.value})}
          />
          <button type='submit'>
            Create Account
          </button>
      </form>
      </div>

    </>
  );
};

export default SignupForm;
