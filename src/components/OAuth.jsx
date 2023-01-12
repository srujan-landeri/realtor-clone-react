import React from 'react';
import { FcGoogle } from 'react-icons/fc';
export default function OAuth() {
  return (
    <button className="signin-btn red pointer">
      {' '}
      <FcGoogle size={22} className="g-icon" />
      CONTINUE WITH GOOGLE
    </button>
  );
}
