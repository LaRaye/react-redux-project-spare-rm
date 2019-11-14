import React from 'react';
import { Link  } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav `
  li {
    list-style: none
  }

  ul {
    display: flex;
    justify-content: space-evenly;
  }
`

const Navbar = () => (
  <StyledNav>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stays">Stays</Link></li>
        <li><Link to="/stays/new">List a Stay</Link></li>
      </ul>
    </nav>
  </StyledNav>
)

export default Navbar;
