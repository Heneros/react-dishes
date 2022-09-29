import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <Link to="/" className='logo'>
        Logo
      </Link>
    </header>

  )
}
export default Header;
