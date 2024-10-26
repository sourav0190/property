// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div style={{ display: 'flex' }}>
        <img
          src="./src/assets/bklogo.jpg"
          style={{ width: '50px', height: '50px', marginRight: '10px' }}
          alt=""
        />
        <div className="logo">BK PROPERTY</div>
      </div>

      <nav className="nav-menu">
        <ul>
          <li>
            <button className="nav-button" onClick={() => navigate('/')}>Home</button>
          </li>
          <li>
            <button className="nav-button" onClick={() => navigate('/Properties')}>Properties</button>
          </li>
          <li>
            <button className="nav-button" onClick={() => navigate('/Agents')}>Agents</button>
          </li>
          <li>
            <button className="nav-button" onClick={() => navigate('/About')}>About</button>
          </li>
          <li>
            <button className="nav-button" onClick={() => navigate('/ContactUs')}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
