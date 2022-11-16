import { useState } from "react";
import { post_login } from "../../services/users";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
        localStorage.setItem("user_id", resp.data.user_id);
        props.setLoggedInStatus();
      })
      .catch((error) => {
        console.log(error);
      });
    props.closePopUp();
  };

  return (
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
    </form>
  );
};

export default LoginForm;
