import React from "react";
import logo from "../pictures/logo.svg";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiPhoneMissedCall } from "react-icons/hi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import "./Footer.scss";
function Footer() {
  return (
    <footer class="footerDistributed">
      <div className="footerContainer">
        <div class="footerLeft">
          <Link className="logo" to="/">
            <img
              src={logo}
              alt="logo"
              width="15%"
              height="100%"
              // viewBox="2 2 5 6"
            />
            <p className="PopcronSubTitle">Popcorn © 2023</p>
          </Link>

          
        </div>
<div className="leftCenter">
  <ul className="middleList">
    <li className="listItems"> <a href="#">About Us</a> </li>
    <li className="listItems"> <a href="#">Contact Us</a></li>
    <li className="listItems"> <a href="#">Privacy Policy</a></li>
    <li className="listItems"> <a href="#">Terms and Conditions</a></li>
    <li className="listItems"> <a href="#">Copyright Information</a></li>
  </ul>
</div>
<div className="leftRight">
  <ul className="middleList">
    <li className="listItems"> <a href="#">FAQ</a></li>
    <li className="listItems"> <a href="#">Support</a></li>
    <li className="listItems"> <a href="#">Site Map</a></li>
    <li className="listItems"> <a href="#">Related Links</a></li>
    <li className="listItems"> <a href="#">Social Media Links</a></li>
  </ul>
</div>
        
      </div>
    </footer>
  );
}

export default Footer;
