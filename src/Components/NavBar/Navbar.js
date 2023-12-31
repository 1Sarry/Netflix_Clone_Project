import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import netflixLogo from "../../Images/Netflix-logo.png";
import avatar from "../../Images/Netflix-avatar.png";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };

  //  const showNav = () => {
  //     if (window.scrollY > 1080) {
  //       handleShow(false);
  //     } else {
  //       handleShow(true);
  //     }
  //  }
  //    showNav()
      console.log(show)
      
  }, [window.scrollY]);
 
  return (
    <div className={`navbar_main ${show && "nav_black"}`}>
      <img className="nav_logo" src={netflixLogo} alt="Netflix Logo" />
      <img className="nav_avatar" src={avatar} alt="Avatar Logo" />
    </div>
  );
};

export default Navbar;
