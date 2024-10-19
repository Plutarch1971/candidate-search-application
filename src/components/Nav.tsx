import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <div>
      <nav>
        <ul className='navbar'>
        <li><Link to="/SavedCandidates" aria-label="Potential Candidate">Potential Candidate</Link></li>
        <li><Link to="/" aria-label="Home">Home</Link> </li>
        </ul>
      </nav>  
    </div>
  )
};

export default Nav;
