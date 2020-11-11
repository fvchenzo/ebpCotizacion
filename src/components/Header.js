import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="assets/img/logo.jpg" alt="logo" />  
      </Link>
      
    </header>
  )
}

export default Header