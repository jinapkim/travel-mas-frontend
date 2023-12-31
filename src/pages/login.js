import React, { useState } from "react";
//import PropTypes from 'prop-types';
import "../css/signup_form.css";
import "../services/users";
import { post_login } from "../services/users";

// pass {setToken} to Login

const Login = () => {
  //
  const [loginInfo, setInfo] = useState({
    user_name: "",
    password: "",
  });

  const Submit = (e) => {
    e.preventDefault();
    post_login(loginInfo.user_name, loginInfo.password)
      .then((resp) => {
        localStorage.setItem("access_token", resp.data.access_token);
        localStorage.setItem("refresh_token", resp.data.refresh_token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <div className="form" onSubmit={Submit}>
        <form>
          <input
            className="user-form-input"
            type="text"
            placeholder="Username"
            value={loginInfo.user_name}
            onChange={(e) =>
              setInfo({ ...loginInfo, user_name: e.target.value })
            }
          />
          <input
            className="user-form-input"
            type="text"
            placeholder="Password"
            value={loginInfo.password}
            onChange={(e) =>
              setInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account?</p>
      </div>
    </>
  );
};

//Login.propTypes = {
//    setToken: PropTypes.func.isRequired
//}

export default Login;
