import React from 'react';
import logo from '../pictures/logo.svg';
import { Link } from 'react-router-dom';
import{BsFacebook} from 'react-icons/bs';
import{AiOutlineTwitter} from 'react-icons/ai';
import {HiPhoneMissedCall} from 'react-icons/hi';
import{BsFillEnvelopeFill} from 'react-icons/bs';
import{HiLocationMarker} from 'react-icons/hi';
import{BsLinkedin} from 'react-icons/bs';
import{AiFillGithub} from 'react-icons/ai';
import './Footer.scss'
function Footer() {
  return (
<footer class="footer-distributed">

<div class="footer-left">

<Link className="logo" to="/">
          <img
            src={logo}
            alt="logo"
            width="15%"
            height="100%"
            // viewBox="2 2 5 6"
          />
        </Link>

  <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    <a href="#">Blog</a>
  
    <a href="#">Pricing</a>
  
    <a href="#">About</a>
    
    <a href="#">Faq</a>
    
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">Company Name © 2015</p>
</div>

<div class="footer-center">

  <div>
    <HiLocationMarker/>
    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
  </div>

  <div>
    <HiPhoneMissedCall/>
    <p>+1.555.555.5555</p>
  </div>

  <div>
  <BsFillEnvelopeFill/>
    <p><a href="mailto:support@company.com">support@company.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About the company</span>
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>

  <div class="footer-icons">

    <a href="#"><BsFacebook/></a>
    <a href="#"><AiOutlineTwitter/></a>
    <a href="#"><BsLinkedin/></a>
    <a href="#"><AiFillGithub/></a>

  </div>

</div>

</footer>


    )
}

export default Footer