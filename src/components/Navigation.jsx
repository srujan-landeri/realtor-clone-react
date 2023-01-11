import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation().pathname.slice(1);
  const navigate = useNavigate();

  return (
    <nav className="navigation-bar flex">
      <div>
        <img
          className="nav-logo"
          src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
          alt="logo"
          onClick={() => navigate('/')}
        />
      </div>
      <div>
        <ul className="nav-page-links flex">
          <li
            className={location === '' ? 'nav-active-link' : ''}
            onClick={() => navigate('/')}
          >
            Home
          </li>
          <li
            className={location === 'offers' ? 'nav-active-link' : ''}
            onClick={() => navigate('/offers')}
          >
            Offers
          </li>
          <li
            className={location === 'sign-in' ? 'nav-active-link' : ''}
            onClick={() => navigate('/sign-in')}
          >
            Signin
          </li>
        </ul>
      </div>
    </nav>
  );
}
