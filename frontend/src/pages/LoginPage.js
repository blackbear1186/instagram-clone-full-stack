import React, {useState} from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";

const LoginPage = () => {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()

  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Instagram</h1>
        <form className="form">
          <div className="sign-border">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Phone number, username, or email" />
          </div>
          <div className="sign-border">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>

          <button onClick={handleLogin} type="submit">Log In</button>
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
