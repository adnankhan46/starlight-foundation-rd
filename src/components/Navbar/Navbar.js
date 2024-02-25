import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/logos/logo-theme.png";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  const [navbar, toggleNav] = useState(false);

  return (
    <React.Fragment>
      <div className="navbar">
        <a href="/home" className="navbarLeft">
          <img src={Logo} alt="Starlight Foundation Logo" />
          <h3>STARLIGHT FOUNDATION</h3>
        </a>
        <div className={"navbarRight " + navbar}>
          <div className="navLink">
            <a href="/aboutus">About Us</a>
          </div>
          <div className="navLink">
            <a href="/whychildren">Why Children</a>
          </div>
          <div className="navLink">
            <a href="/aboutus">Our Projects</a>
          </div>
          <div className="navLink">
            <a href="/governance">Governance</a>
          </div>
          <div className="navLink">
            <a href="/volunteer">Volunteer</a>
          </div>
          
          <div className="navLink">
            <a href="/partner">Partnership</a>
          </div>
          <div className="navLink">
            <a href="/contactus">Contact Us</a>
          </div>
          <div className="donate-nav">
          
            <a href="/donate"><i className="fas fa-heart"></i>  DONATE</a>
  </div>
          {/* <div className="navLink hasDropdown">
            <a>Annual Report</a>
            <div className="dropdownMenu">
              <ul>
                <li>
                  <a href="./Work Report 2020-2021.pdf" target="_blank">
                    2020-2021
                  </a>
                </li>
                <li>  
                  <a href="./Work Report 2021-2022.pdf" target="_blank">
                    2021-2022
                  </a>
                </li>
              </ul>
            </div>
  </div> */}
        </div>
       {!navbar?  <div className="nav-donate-btn">
       <a href="/donate"><i className="fas fa-heart"></i> DONATE</a>
</div>:""}
        <div className="menuHamburger" onClick={() => toggleNav(!navbar)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
