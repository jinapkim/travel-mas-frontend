import React, {useState} from 'react';
import '../css/signup_form.css'
  
const SignupForm = () => {

  const [userInfo, setInfo] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: ''
  })

  return (
    <>   
      <h1>Signup</h1>
      <div className='form'>
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
            value={userInfo.username}
            onChange={(e) => setInfo({...userInfo, username: e.target.value})}
          />
          <input 
            className='user-form-input' 
            type='text' 
            placeholder='Password' 
            value={userInfo.password}
            onChange={(e) => setInfo({...userInfo, password: e.target.value})}
          />
          <button>
            Create Account
          </button>
      </form>
      </div>

    </>
  );
};

export default SignupForm;
