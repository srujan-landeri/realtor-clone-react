import React from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai/';
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Signin() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const [view, setView] = React.useState(true);

  const navigate = useNavigate();

  function handleInputOnChange(event) {
    console.log(formData);
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      if (userCredential.user) {
        navigate('/');
        toast.success('signin was successful');
      } else {
        toast.error('bad user credential');
      }
    } catch (error) {
      toast.error('problem while signin');
    }
  }

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

        <form className="form flex" onSubmit={onSubmit}>
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
              type={view ? 'password' : 'text'}
              placeholder="Password"
              value={formData.password}
              onChange={handleInputOnChange}
            />

            {view ? (
              <AiFillEyeInvisible
                size={22}
                className="view-icon pointer"
                onClick={() => setView((prev) => !prev)}
              />
            ) : (
              <AiFillEye
                size={22}
                className="view-icon pointer"
                onClick={() => setView((prev) => !prev)}
              />
            )}
          </div>

          <div className="form-text flex">
            <p>
              Don't have an account?{' '}
              <span className="pointer" onClick={() => navigate('/sign-up')}>
                Register
              </span>{' '}
            </p>
            <span
              className="pointer"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot password?
            </span>
          </div>
          <button className="signin-btn blue pointer">SIGN IN</button>
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
