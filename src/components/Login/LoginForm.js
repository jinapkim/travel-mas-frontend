import { useState } from "react";
import { post_login } from "../../services/users";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const changeUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    post_login(userName, password)
      .then((resp) => {
        localStorage.setItem("access_token", resp.data.access_token);
        localStorage.setItem("refresh_token", resp.data.refresh_token);
        setError('');
        props.setLoggedInStatus();
        props.closePopUp();
        localStorage.setItem("user_id", resp.data.user_id);
        props.setLoggedInStatus();
      })
      .catch((error) => {
        console.log(error.response);
        setError(error.response.data.message);
      });
    props.closePopUp();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="login__controls">
          <div className="login__control">
            <label>Username</label>
            <input
              type="text"
              value={userName}
              onChange={changeUserNameHandler}
            />
          </div>
          <div className="login__control">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={changePasswordHandler}
            />
          </div>
          <div className="login__actions">
            <button type="submit">Sign In</button>
          </div>
        </div>
        {error && <span>{error}</span>}
      </form>
    </>
  );
};

export default LoginForm;
