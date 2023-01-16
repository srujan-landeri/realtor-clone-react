import React from 'react';
import spinner from '../assets/spinner.svg';
export default function Spinner() {
  return (
    <div className="flex spinner">
      <img src={spinner} className="loader" alt="loading" />
    </div>
  );
}
