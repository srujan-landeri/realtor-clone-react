import { getAuth } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [formData, setFormData] = React.useState({
    name: 'xyz',
    email: 'xyz@gmail.com',
  });
  const auth = getAuth();
  const navigate = useNavigate();

  function handleLogout() {

    auth.signOut();
    navigate('/');
  }

  return (
    <div className="signin-container">
      <h2 className="prof-heading">My Profile</h2>

      <form action="" className="signin m-auto form flex">
        <input
          disabled
          className="form-input prof-input"
          type="text"
          name="name"
          value={formData.name}
        />
        <input
          disabled
          className="form-input prof-input"
          type="email"
          name="email"
          value={formData.email}
        />

        <div className="prof-text">
          <p>
            Do you want to edit your details? <span>Edit</span>{' '}
          </p>
          <span onClick={handleLogout}>Sign out</span>
        </div>
      </form>
    </div>
  );
}
