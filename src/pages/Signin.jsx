import React from 'react';

export default function Signin() {
  return (
    <div className="signin-container">
      <h2 className="">SIGN IN</h2>

      <div className="signin flex">
        <div className="signin-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMJmhXDaeBUE79XjTPCcxkON7Jf8FLpQA_w&usqp=CAU"
            alt=""
            className="signin-img"
          />
        </div>

        <div className="form flex">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <div className="form-text">
            <p>
              Don't have an account? <span>Register</span>{' '}
            </p>
            <span>Forgot password</span>
          </div>
          <button className = "signin-btn">SIGN IN</button>
          <p>OR</p>
          <button className = "signin-google">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    </div>
  );
}
