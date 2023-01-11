import React from 'react';

export default function Navigation() {
  return (
    <nav className="navigation-bar display-flex">
      <div>
        <img
          className="nav-logo"
          src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
          alt=""
        />
      </div>
      <div>
        <ul className="nav-page-links display-flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
