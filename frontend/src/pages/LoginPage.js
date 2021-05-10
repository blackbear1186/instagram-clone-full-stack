import React, {useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'

const LoginPage = () => {

  const history = useHistory()

  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [confirmPasswordLogin, setConfirmPasswordLogin] = useState('')

  const [loginMessage, setLoginMessage] = useState('')
  const [usernameErr, setUsernameErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('')


  // const [login, setLogin] = useState(false)

  const usernameError = () => {
    if(usernameLogin.length === 0) {
      setUsernameErr('Please enter your username.')
    } else {
      setUsernameErr('')
    }
  }
  const passwordError = () => {
    if(passwordLogin.length === 0) {
      setPasswordErr('Please enter your password.')
    } else {
      setPasswordErr('')
    }
  }

  const confirmPasswordError = () => {
    if (confirmPasswordLogin.length === 0) {
      setConfirmPasswordErr('Please confirm the password.')
    } else if(passwordLogin !== confirmPasswordLogin) {
      setConfirmPasswordErr('The passwords do not match.')
    } else {
      setConfirmPasswordErr('')
    }
  }
  // userNameErr()

  const handleLogin = e => {
    // e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation()

    axios.post('http://localhost:5000/login', {username: usernameLogin, password: passwordLogin})
    .then((response) => {

      if(response.data.message) {
        setLoginMessage(response.data.message)
      } else {
        setLoginMessage('')
      } 
      // usernameError()
      // passwordError()
      // confirmPasswordError()

      history.push('/')

    
    //  setLogin(false)

      console.log(response.data)

    })
  }


  return (
    <div className="login-container">
      <div className="login-box"  >
        <h1>Instagram</h1>
        <form className="form" onSubmit={handleLogin}>
          <div className={usernameErr ? 'danger-border' : 'sign-border'}>
            <input type="text" value={usernameLogin} onChange={(e) => setUsernameLogin(e.target.value)} placeholder="Phone number, username, or email" />
          </div>
          <small className='text-danger'>{usernameErr}</small>

          <div className={passwordErr ? 'danger-border' : 'sign-border'}>
            <input type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} placeholder="Password" />
          </div>
          <small className='text-danger'>{passwordErr}</small>

          <div className={passwordErr ? 'danger-border' : 'sign-border'}>
            <input type="password" value={confirmPasswordLogin} onChange={(e) => setConfirmPasswordLogin(e.target.value)} placeholder="Confirm Password" />
          </div>
          <small className='text-danger'>{confirmPasswordErr}</small>

          <button type="submit">Log In</button>

          <small className='text-danger'>{loginMessage}</small>

        </form>
        <div className="or">OR</div>
        <div className="facebook">
          <AiFillFacebook />
          <span>Log in with Facebook</span>
        </div>
        <span className="forgot">Forgot password?</span>
      </div>
      <div className="sign-box">
        <span>
          Don't have an account?
          <Link
            style={{
              textDecoration: "none",
              color: "#0096F6",
              fontWeight: "bold",
            }}
            to="/signup"
          >{" "}
             Sign up
          </Link>
        </span>
      </div>

      <footer>&copy; 2021 Instagram from Facebook</footer>
    </div>
  );
};

export default LoginPage;
