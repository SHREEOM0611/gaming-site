import React from 'react';
import loginArrow from '../../images/loginArrow.svg';

import './Login.css';

import slider1 from '../../images/apex_slider.png';
import slider2 from '../../images/cod_slider1.png';
import slider3 from '../../images/fortnite_slider1.jpg';
import slider4 from '../../images/specOps_slider.jpg';
import slider5 from '../../images/valorant_slider1.jpg';
import Navbar from '../Navbar/Navbar.jsx';
const Login=()=>(

<div className="app__login">
  <div className="app__login_template">
    
   
 

<div className="app__login_content">

<div className='app_login_text'>
<img className="app_login_logo" src={loginArrow} />   
<p>LOGIN</p>
</div>


<input className="app__login_content_input" ></input>
<input className="app__login_content_input" ></input>
<button className="app_login_button" >Login</button>

<div className="app_signin">
    <p className="written-content"> Don't have an account? <a href="www.google.com" target="_blank">SignIn</a>
</p>  
</div>
</div>


  </div>

  
</div>

)

export default Login;