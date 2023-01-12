import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { doc } from 'firebase/firestore';

export default function OAuth() {
  async function handleGoogleSignin() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // check for user
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
