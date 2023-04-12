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
<div className="footerContainer">


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

  
  <p>Popcorn © 2023</p>


 
</div>

<div class="footer-center">
<p class="footer-company-about">
    <span>Contact us</span>
  </p>
  <div style={{
      display:'flex', alignItems:'center'
    }}>
    <HiLocationMarker style={{
      marginRight:'8px', color:'#ffff', fontSize:'15px'
    }}/>
    <p><span style={{color:'#92999f'}}>unkown street, noLand</span></p>
  </div>

  <div style={{
      display:'flex', alignItems:'center'
    }} >
    <HiPhoneMissedCall style={{
      marginRight:'8px', color:'#ffff', fontSize:'15px'
    }}/>
    <p style={{color:'#92999f'}}>

      +00 0000 00 00
    </p>
  </div>

  <div style={{
      display:'flex', alignItems:'center'
    }}>
  <BsFillEnvelopeFill style={{
      marginRight:'8px', color:'#ffff', fontSize:'15px'
    }}/>
    <p><a href="#" style={{color:'#92999f'}}>support@popcorn.com</a></p>
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
</div>
</footer>


    )
}

export default Footer