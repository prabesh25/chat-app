import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [currState, setCurrState] = useState("sign up");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === "sign up" ? (
          <input
            placeholder="username"
            required
            type="text"
            className="form-input"
          />
        ) : null}
        <input
          placeholder="Email adress"
          required
          type="email"
          className="form-input"
        />
        <input
          type="password"
          placeholder="password"
          required
          className="form-input"
        />
        <button type="submit">
          {currState === "sign up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use &privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "sign up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("sign up")}>click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
