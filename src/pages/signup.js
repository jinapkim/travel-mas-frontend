import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { post_register } from '../services/users'
import '../css/signup_form.css'
  
const SignupForm = () => {

  const navigate = useNavigate();

  const [userInfo, setInfo] = useState({
    first_name: '',
    last_name: '',
    user_name: '',
    password: ''
  });

  // Display error messsage if post request fails
  const [error, setError] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    post_register(
      userInfo.first_name, 
      userInfo.last_name,
      userInfo.user_name, 
      userInfo.password
    )
    .then((res) => {
      console.log(res.data);
      setError('');
      navigate('/');
    })
    .catch((error) => {
      setError(error.response.data.message);
      console.log(error.response);
    })
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
            pattern="^(?=.{1,25}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$"
            required
            onChange={(e) => setInfo({...userInfo, first_name: e.target.value})}
          />
          <input 
            className='user-form-input' 
            type='text' 
            placeholder='Last name' 
            value={userInfo.last_name}
            pattern="^(?=.{1,25}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$"
            required
            onChange={(e) => setInfo({...userInfo, last_name: e.target.value})}
          />
          <input 
            className='user-form-input' 
            type='text' 
            placeholder='Username' 
            value={userInfo.user_name}
            pattern="^[A-Za-z0-9]+"
            required
            onChange={(e) => setInfo({...userInfo, user_name: e.target.value})}
          />
          <input 
            className='user-form-input' 
            type='password' 
            placeholder='Password' 
            value={userInfo.password}
            pattern="^[a-zA-Z0-9!@#$%^&]*$"
            required
            onChange={(e) => setInfo({...userInfo, password: e.target.value})}
          />
          <button type='submit'>
            Create Account
          </button>
      </form>
      {error && <span>{error}</span>}
      </div>

    </>
  );
};
  
export default SignupForm;
