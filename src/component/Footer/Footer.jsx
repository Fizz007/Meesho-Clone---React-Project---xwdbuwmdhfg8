import React from "react";
import "../Footer/Footer.css";
import logo from "../../img/meesho.png";
import app from "../../img/App.png";
import pay from "../../img/pay.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_position footer_col">
      <div>
        <section className="banner">
          <h5>Repair Servies</h5>
          <h2>Up to 70% off-On all T-shirts and Accessories</h2>
          <button>Expolre</button>
        </section>
      </div>
      {/* <section id="sign-in" >
   
    <div className="search">
    <h3>Sign Up For New-letters</h3>
    <h5>Get Email upates on our latest shop and <span>special offers</span></h5>
    </div>
        <div>
       
            <input type="text" id="search" placeholder="Search item" />
        <button className='signup_btn'>Sign up</button>
    </div>
</section> */}

      <footer>
        <div className="col">
          <img src={logo} className="logo" />
          <h4>Contact</h4>
          <p>
            <strong>Adress :</strong>A-1/367,Madhu vihar ,uttam nagar
          </p>
          <p>
            <strong>Contact :</strong>011-253356523
          </p>
          <p>
            <strong>hours :</strong>10:00-18:00, Mon-Sat
          </p>
          <strong>Follow</strong>
          <br />

          <div className="icons">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
             
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <p>About Us</p>
          <p>Delivery Info</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>Contact Us</p>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <p>Sign In</p>
          <p>View Chart</p>
          <p>My Wish List</p>
          <p>Track My order</p>
          <p>Help</p>
        </div>
        <div className="col">
          <h4>Install App</h4>
          <p>From App Store or Google Pay</p>
          <img id="App" src={app} alt="" />
          <p>payment</p>
          <img id="payment" src={pay} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
