import React from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai/';
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

export default function Signup() {
  const [formData, setFormData] = React.useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [viewP, setViewP] = React.useState(true);
  const [viewCP, setViewCP] = React.useState(true);

  const navigate = useNavigate();

  function handleInputOnChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const auth = getAuth();
      const userCreadential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      updateProfile(auth.currentUser, {
        displayName: formData.fullname,
      });
      const user = userCreadential.user;
      console.log(user);
      // creating copy of form data for storing onto dataset
      // passwords are excluded for security resons
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      delete formDataCopy.confirmPassword;
      formDataCopy.timestamp = serverTimestamp();

      // adding data onto db
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      // going to home page if everything goes well
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signin-container">
      <h2 className="">SIGN UP</h2>

      <div className="signin flex">
        <div className="signin-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMJmhXDaeBUE79XjTPCcxkON7Jf8FLpQA_w&usqp=CAU"
            alt=""
            className="signin-img"
          />
        </div>

        <form className="form flex" onSubmit={onSubmit}>
          <input
            name="fullname"
            type="text"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleInputOnChange}
            className="form-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputOnChange}
            className="form-input"
          />
          <div className="pass-container">
            <input
              className="form-input"
              name="password"
              type={viewP ? 'password' : 'text'}
              placeholder="Password"
              value={formData.password}
              onChange={handleInputOnChange}
            />

            {viewP ? (
              <AiFillEyeInvisible
                size={22}
                className="view-icon pointer"
                onClick={() => setViewP((prev) => !prev)}
              />
            ) : (
              <AiFillEye
                size={22}
                className="view-icon pointer"
                onClick={() => setViewP((prev) => !prev)}
              />
            )}
          </div>

          <div className="pass-container">
            <input
              className="form-input"
              name="confirmPassword"
              type={viewCP ? 'password' : 'text'}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputOnChange}
            />

            {viewCP ? (
              <AiFillEyeInvisible
                size={22}
                className="view-icon pointer"
                onClick={() => setViewCP((prev) => !prev)}
              />
            ) : (
              <AiFillEye
                size={22}
                className="view-icon pointer"
                onClick={() => setViewCP((prev) => !prev)}
              />
            )}
          </div>

          <div className="form-text flex">
            <p>
              Already have an account?{' '}
              <span className="pointer" onClick={() => navigate('/sign-in')}>
                Sign in
              </span>{' '}
            </p>
            <span
              className="pointer"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot password?
            </span>
          </div>
          <button className="signin-btn blue pointer">SIGN UP</button>
          <div className="flex or-container">
            <hr className="h-line hr1" />
            <span>OR</span>
            <hr className="h-line hr2" />
          </div>
          <OAuth />
        </form>
      </div>
    </div>
  );
}
