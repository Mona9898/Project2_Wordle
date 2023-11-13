import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game/normal">Play Normal</Link></li>
        <li><Link to="/game/hard">Play Hard</Link></li>
        <li><Link to="/rules">Game Rules</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
