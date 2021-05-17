import React, {useState, useEffect} from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link} from "react-router-dom";
import axios from 'axios'

const SignUpPage = ({submitForm}) => {

  // const history = useHistory()

  const emailPattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/i;
  const passwordPattern = /[a-zA-Z0-9]{3,10}/;

  // const invalidUsername = () => {
  //   if(!emailPattern.test(username)){
      
  //   }
  // }

  const [values, setValues] = useState({
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const validate = value => {
    let errors = {}
    if(!value.username){
      errors.username = 'Please enter your email address';
    } else if(!emailPattern.test(value.username)){
      errors.username = 'Invalid email address';
    } else {
      errors.username = ''
    }
    if(!value.password){
      errors.password = 'Please your password.'
    } else if(!passwordPattern.test(value.password)){
      errors.password = 'Invalid password format.'
    } else {
      errors.password = ''
    }
    return errors;
  }

  const handleSignUp = e => {
    e.preventDefault()
    setErrors(validate(values))
   
      axios.post('http://localhost:5000/register', {username: values.username, password: values.password}).then((response => {
        console.log(response.data)
      }))
    
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
          <div className='sign-border'>
            <input value={values.username} type="text" name='username' onChange={handleChange} placeholder="Mobile Number or Email" />
          </div>
          {errors.username && <small className='text-danger'>{errors.username}</small>}
          {/* <div className="sign-border">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
          </div> */}
          {/* <div className="sign-border">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </div> */}

          <div className='sign-border'>
            <input type="password" name='password' value={values.password} onChange={handleChange} placeholder="Password" />
          </div>
          {errors.password && <small className='text-danger'>{errors.password}</small>}

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
