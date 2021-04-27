import React, { useContext } from "react";
// import {Link, useHistory} from 'react-router-dom'
// import {auth} from '../firebase'
// import {AppContext} from '../context/AppContext'
import Header from "../components/Header";

const HomePage = () => {
  // const {user} = useContext(AppContext)

  // const history = useHistory()
  // const logOut = () => {
  //   auth.signOut()
  //   history.push('/login')
  // }
  return (
    <div className="home-container">
      <section>
        <div className="section">
          <div className="following"></div>
          <div className="main-content">
            <div className="main-header"></div>
            <div className="main-image"></div>
            <div className="main-info">
              <div className="main-icon"></div>
              <div className="main-post"></div>
            </div>
            <div className="main-comment"></div>
          </div>
        </div>
      </section>
      <aside>
        <div className='aside'>

        </div>
      </aside>
    </div>
  );
};

export default HomePage;
