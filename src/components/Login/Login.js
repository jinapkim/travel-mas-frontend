import { useState } from "react";
import Popup from "reactjs-popup";
import LoginForm from "./LoginForm";
import "reactjs-popup/dist/index.css";
import "./Login.css";

const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  const closePopUpHandler = () => setOpen(false);
  const loginHandler = () => setIsLoggedIn(true);
  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_id");
    setIsLoggedIn(false);
  }

  if (localStorage.getItem("access_token") || isLoggedIn) {
    return (
      <div>
        <button className="login__button" type="button" onClick={logoutHandler}>Log Out</button>
      </div>
    )
  }

  return (
    <div>
      <button className="login__button" type="button" onClick={() => setOpen(true)}>
        Sign In
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closePopUpHandler} modal>
        <LoginForm closePopUp={closePopUpHandler} setLoggedInStatus={loginHandler}/>
      </Popup>
    </div>
  );
};

export default Login;
