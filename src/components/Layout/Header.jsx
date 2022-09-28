import React from "react";
import LoginHeader from "../Account/LoginHeader"
import { useNavigate } from "react-router-dom";
function Header() {
 
    return(
<header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-black border-bottom box-shadow mb-3 edit">
            <div className="container-fluid">
              
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/"  >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/AddUser">AddUser</a>
                        </li>
                        <LoginHeader />
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
  
}
export default Header;