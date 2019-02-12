import '../index.css';
import React from 'react';

const Header = () => (
  <header className="header">
    <section className="main-block">
      <p className="main-heading">The Artifact</p>
      <p className="sub-heading">Culture & Art Blog</p>
      <nav className="nav">
        <ul className="nav-bar">
          <li className="nav-element last-element">Blog</li>
          <li className="nav-element">About</li>
          <li className="nav-element">Contact</li>
        </ul>
      </nav>
    </section>
  </header>);

export default Header;
