import React from 'react';
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function Signup() {
  const [email, setEmail] = React.useState('');

  const navigate = useNavigate();

  function handleInputOnChange(event) {
    setEmail(event.target.value);
  }

  return (
    <div className="signin-container">
      <h2 className="">Forgot Password</h2>

      <div className="signin flex">
        <div className="signin-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMJmhXDaeBUE79XjTPCcxkON7Jf8FLpQA_w&usqp=CAU"
            alt=""
            className="signin-img"
          />
        </div>

        <form className="form flex">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={handleInputOnChange}
            className="form-input"
          />

          <div className="form-text flex">
            <p>
              Don't have an account?{' '}
              <span className="pointer" onClick={() => navigate('/sign-up')}>
                Sign up
              </span>{' '}
            </p>
            <span className="pointer" onClick={() => navigate('/sign-in')}>
              Sign in instead
            </span>
          </div>
          <button className="signin-btn blue pointer">
            GET RESET PASSWORD
          </button>
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
