import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../pictures/logo.svg'
import './Header.scss'


function Header() {
  return (
<div className="header">
   
    <Link to="/">
    <div className="logo">
  <img src={logo} alt="logo" width="100%" height="100%" viewBox="2 2 5 6" border="2px solid red"/>
</div>
    </Link>
  <h1>My first Movie App</h1>
    <div className="img">
      
    </div>
</div>
  )
}

export default Header