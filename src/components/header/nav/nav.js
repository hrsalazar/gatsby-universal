import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/breads">Breads</Link>
      </li>
      <li>
        <Link to="/coffee">Coffee</Link>
      </li>
      <li>
        <Link to="/catering">Catering</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
