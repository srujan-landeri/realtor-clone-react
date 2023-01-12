import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function OAuth() {
  const navigate = useNavigate();
  const location = useLocation().pathname.slice(1);

  async function handleGoogleSignin() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // check for user

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      if (location === 'sign-in') {
        toast.success('Signin was successful');
      } else if (location === 'sign-up') {
        toast.success('Signup was successful');
      } else {
        toast.success('password was successfully reset');
      }
      navigate('/');
    } catch (error) {
      console.log(error);
      toast("couldn't sign in with google");
    }
  }

  return (
    <button
      type="button"
      className="signin-btn red pointer"
      onClick={handleGoogleSignin}
    >
      <FcGoogle size={22} className="g-icon" />
      CONTINUE WITH GOOGLE
    </button>
  );
}
