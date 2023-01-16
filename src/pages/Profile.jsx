import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [changeDetaials, setChangeDetails] = React.useState(false);

  function handleLogout() {
    auth.signOut();
    navigate('/');
    toast.success('sign out was successful');
  }

  function handleFormDataOnChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName != formData.name) {
        //updating display name
        await updateProfile(auth.currentUser, {
          displayName: formData.name,
        });

        //update name in the firestore

        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, {
          name: formData.name,
        });
        toast.success('update was successful');
      }
    } catch (error) {
      toast.error('There was a problem while updating');
    }
  }

  return (
    <div className="signin-container">
      <h2 className="prof-heading">My Profile</h2>

      <form action="" onSubmit={onSubmit} className="signin m-auto form flex">
        <input
          disabled={!changeDetaials}
          autoComplete="off"
          className={
            changeDetaials
              ? 'form-input prof-input prof-input-active'
              : 'form-input prof-input'
          }
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormDataOnChange}
        />
        <input
          disabled
          autoComplete="off"
          className="form-input prof-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormDataOnChange}
        />

        <div className="prof-text">
          <p>
            Do you want to edit your details?{' '}
            <span
              onClick={() => {
                changeDetaials && onSubmit();
                setChangeDetails((prev) => !prev);
              }}
            >
              {changeDetaials ? 'Apply Changes' : 'Edit'}
            </span>{' '}
          </p>
          <span onClick={handleLogout}>Sign out</span>
        </div>
      </form>
    </div>
  );
}
