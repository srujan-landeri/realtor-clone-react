import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation().pathname.slice(1);
  const navigate = useNavigate();
  const auth = getAuth();
  const [pathName, setPathName] = React.useState('Sign in');

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPathName('Profile');
      } else {
        setPathName('Sign in');
      }
    });
  }, [auth]);
  return (
    <nav className="navigation-bar flex">
      <div>
        <img
          className="nav-logo pointer"
          src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
          alt="logo"
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
      <div>
        <ul className="nav-page-links flex ">
          <li
            className={location === '' ? 'nav-active-link pointer' : ' pointer'}
            onClick={() => navigate('/')}
          >
            Home
          </li>
          <li
            className={
              location === 'offers' ? 'nav-active-link pointer' : ' pointer'
            }
            // onClick={() => navigate('/offers')}
            onClick={() => navigate('/offers')}
          >
            Offers
          </li>
          <li
            className={
              location === 'sign-in' ||
              location === 'sign-up' ||
              location === 'forgot-password' ||
              location === 'profile'
                ? 'nav-active-link pointer'
                : ' pointer'
            }
            onClick={() => navigate('/profile')}
          >
            {pathName}
          </li>
        </ul>
      </div>
    </nav>
  );
}
