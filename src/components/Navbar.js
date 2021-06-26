import React from "react";
import logo from "../imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";





const Navbar = () => {
  function Clps() {
    return document.getElementById('bar').click();
  }
  return (
    <nav className="navbar collapseOnSelect fixed-top navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo...." />
        </a>
        <button
          className="navbar-toggler"
          id='bar'
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav marl">
            <li className="nav-item active">
              <a className="nav-link" onClick={Clps} href="#aboutme">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={Clps} href="#services">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={Clps} href="#portfolio">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={Clps}  href="#contectus">
                contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
