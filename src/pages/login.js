import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../css/signup_form.css'
import '../services/users';
import { post_login } from '../services/users';
  
const Login = ({setToken}) => {

  const [loginInfo, setInfo] = useState({
    username: '',
    password: ''
  })

const Submit = (e) => {
    e.preventDefault();
    try {
        post_login()
    }
}

  return (  
    <>   
      <h1>Login</h1>
      <div className='form'>
      <form>
          <input 
            className='user-form-input' 
            type='text' 
            placeholder='Username' 
            value={loginInfo.username}
            onChange={(e) => setInfo({...loginInfo, username: e.target.value})}
          />
          <input 
            className='user-form-input' 
            type='text' 
            placeholder='Password' 
            value={loginInfo.password}
            onChange={(e) => setInfo({...loginInfo, password: e.target.value})}
          />
          <button>
            Login
          </button>
      </form>
      </div>

    </>
  );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;