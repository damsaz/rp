import React, { useState } from 'react';
import { withAuthorization } from 'react-identity'
import Login from './Login';
import { useCookies } from 'react-cookie';
function LoginHeader() {
 
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  function Logout() {
    removeCookie("username");
    window.location.reload();
    }
if(cookies.username)
  return (
 

   
<ul className="navbar-nav">



    <li className="nav-item">
        <a className=" nav-link text-white" >Welcome {cookies.username}</a>
    </li>
    <li className="nav-item">
        <a className="btn text-white" id="login"  onClick={Logout}>Logout</a>
    </li>

</ul>

  

  );
  else
  return (
 

   
    <ul className="navbar-nav">
    
    
    
        <li className="nav-item">
            <a className="nav-link  text-white" id="register"  href="/Account/Register" >Register</a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn text-white" id="login"  href="/Account/Login">Login</a>
        </li>
    
    </ul>
    
      
    
      );

}

export default LoginHeader;
