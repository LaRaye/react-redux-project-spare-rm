import React from 'react';
import { Link  } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/stays">Stays</Link>
      <Link to="/stays/new">List a Stay</Link>
    </ul>
  </nav>
)

export default Navbar;
