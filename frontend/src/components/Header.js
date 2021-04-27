import React from "react";
import direction from '../icons/direction.png'
import heart from '../icons/heart.png'
import home from '../icons/home.png'
import send from '../icons/send.png'
import profile from '../images/profile.jpg'

const Header = () => {

  return (
    <header>
      <div className="header-container">
        <div className="header">
          <h2>Instagram</h2>
        </div>
        <div className="search">
          <input type="text" placeholder='Search'/>
        </div>
        <div className="icons">
          <img className="icon" src={home} alt=''/>
          <img className="icon" src={send} alt=''/>
          <img className="icon" src={direction} alt=''/>
          <img className="icon" src={heart} alt=''/>
          <img className='profile-icon' src={profile} alt=''/>
        </div>
      </div>
    </header>
  );
};

export default Header;
