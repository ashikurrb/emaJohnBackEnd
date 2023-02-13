import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="form-control">
      <h1>Create Account</h1>
      <form onSubmit="">
        <input type="email" name="" placeholder="Enter Your Email" id="" />
        <br />
        <input
          type="password"
          name=""
          placeholder="Enter your Password"
          id=""
        />
        <br />
        <input
          type="password"
          name=""
          placeholder="Re-enter your Password"
          id=""
        />
        <br />
        <input type="submit" value="Create Account" />
      </form>

      <p>
        Already Have an Acoount? <Link to="/login">Sign In</Link>
      </p>
      <div>
        .............................or...............................................
      </div>
      <br />
      <button className="btn-regular">Signin with Google</button>
    </div>
  );
};

export default Register;
