import React from "react";
import loginArrow from "../../images/loginArrow.svg";
import { useState, useEffect } from "react";

import "./Signin.css";

const Signin = () => {
  // const [name, setName] = useState("");
  return (
    <div className="app__login">
      <div className="app__login_template">
        <div className="app__signin_content">
          <div className="app_login_text">
            <img className="app_login_logo" src={loginArrow} />
            <p>Sign In</p>
          </div>

          <form>
            <input
              className="app__login_content_input"
              // value={name}
              text="username"
            ></input>
            <input className="app__login_content_input"></input>
            <input className="app__login_content_input"></input>
            <input className="app__login_content_input"></input>
            <input
              class="favorite styled"
              type="button"
              value="Sign Up"
            ></input>
            {/* <button className="app_login_button" >SignIn</button> */}

            <div className="app_signin">
              <p className="written-content">
                {" "}
                Already have an account?{" "}
                <a href="www.google.com" target="_blank">
                  LogIn
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
