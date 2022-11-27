import React from "react";
import {useContext, useState} from "react";
import { message } from "antd";

import "./Login.css";
import {loginAdmin} from "../api";
import UserContext from "../UserContext";
import {Navigate} from "react-router-dom";
import {useNavigate} from "react-router";

export const AdminLoginBody = ({ callback }) => {
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    const formDetails = new FormData();
    formDetails.append('email', email);
    formDetails.append('password', password);
    loginAdmin(formDetails).then((res) => {
      if(res.status === 200) {
        callback()
        message.success(res.data.message)
        navigate('/adminpanel')
      }
    }).catch((err) => {
      message.error(err?.response?.data?.message || 'Something went wrong!');
    });
  }

  if(user.isAuth) {
    if(user.type === 'admin') return <Navigate to='/adminpanel'/>;
    if(user.type === 'president') return <Navigate to={`/${user.club}`}/>;
  }

  return (
    <div className="Login__form">
      <h2>ADMIN LOGIN</h2>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <div className="form">
            <h1 className="h1__text">Log in</h1>
            <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
            <br/>
            <button className="Login__btn" onClick={handleSubmit}>Log In</button>
            {/* <Link href="/adminpanel"> Admin Panel</Link> */}
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="hey">Hey, there!</h1>
              <p>To login as President, Click below.</p>
              <a href="/presidentlogin">
                <button
                  className="Login__btn"
                  // className="ghost"
                  type="submit"
                  id="president_login"
                >
                  President Login
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default LoginBody;
