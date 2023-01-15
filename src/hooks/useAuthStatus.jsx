import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  // checking status here is used for making loading effect
  const [checkingStatus, setCheckingStatus] = React.useState(true);

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in
        console.log(user);
        console.log('signed in rendered');
        setLoggedIn((prev) => !prev);
      } else {
        // user is signed out / user is not loggin in
        console.log('user is not signed in');
      }
      setCheckingStatus(false);
    });
  }, []); // empty dependencies array implies that function is called only once the page rendes
  return { loggedIn, checkingStatus };
}
