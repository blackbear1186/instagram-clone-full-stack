import React, {useState, useContext} from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";

const SignUpPage = ({user}) => {

  const history = useHistory()

  const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  // const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = e => {
    e.preventDefault()
    
  }


  return (
    <div className="signup-container">
      <div className="signup-box">
        <div>
          <h1>Instagram</h1>
        </div>
        <div className="signup-text-header">
          <span>Sign up to see photos and videos from your friends</span>
        </div>
        <div className='facebook-log-btn'>
          <button type='button'>
          <AiFillFacebook />
          <span>Log in with Facebook</span>
          </button>
        </div>
        <form className="form" onSubmit={handleSignUp}>
          <div className="sign-border">
            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Mobile Number or Email" />
          </div>
          {/* <div className="sign-border">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
          </div> */}
          {/* <div className="sign-border">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </div> */}

          <div className="sign-border">
            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <div className="terms">
          <span>
            By signing up, you agree to our
            <strong>Terms, Data Policy and Cookies Policy .</strong>
          </span>
        </div>
      </div>
      <div className="log-box">
        <span>
          Have an account?
          <Link
            style={{
              textDecoration: "none",
              color: "#0096F6",
              fontWeight: "bold",
            }}
            to="/login"
          >
            {" "}
            Log in
          </Link>
        </span>
      </div>

      <footer>&copy; 2021 Instagram from Facebook</footer>
    </div>
  );
};

export default SignUpPage;
