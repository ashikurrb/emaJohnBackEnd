import React from "react";
import { Link } from "react-router-dom";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_Url = location.state?.from || "/shop";
  
  const handleGoogleLogIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_Url);
    });
  };

  return (
    <div className="login-form">
      <h1>Login Here</h1>
      <form onSubmit="">
        <input type="email" name="" placeholder="Your Email" id="" />
        <br />
        <input type="password" name="" placeholder="Password" id="" />
        <br />
        <input type="submit" value="Login" />
      </form>
      <p>
        New to ema-John? <Link to="/register">Create Account</Link>
      </p>

      <div>
        ..............................or..............................................
      </div>
      <br />

      <button className="btn-regular" onClick={handleGoogleLogIn}>
        Signin with Google
      </button>
    </div>
  );
};

export default Login;
