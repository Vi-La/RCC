import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TwitterIcon from '@mui/icons-material/Twitter';
// import { animateScroll as scroll } from "react-scroll/modules"

const Footer = () => {
  return (
    <footer className="footer" >
      {/* <div className="row footer-row">
        
      </div> */}
      {/* <div className="row">
        <div className="footer-link-container">
          <Link to="/about" className="footer-links">
            About us
          </Link>
          <Link to="/contactus" className="footer-links">
            Contact us
          </Link>
          <ul className="footer-list">
            <li className="footer-item">
              <i className="icon ion-md-cart  icon-big"></i>
              <Link to="/https://www.facebook.com">facebook</Link>
            </li>
            <li className="footer-item">
              <i className="icon ion-md-cart  icon-big"></i>
              <Link to="/https://www.twiter.com">twiter</Link>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="row">
        <div className="col span-1-of-3 box">
          <div>
            <span>Languages</span>
          </div>
          <div>English</div>
          <div>French</div>
          <div>Kinyarwanda</div>
          <div>Swahili</div>
        </div>
        <div className="col span-1-of-3 box">
          <div>
            <span>QUICK LINKS</span>
          </div>
          <div>Gallery</div>
          <div>News</div>
          <div>History</div>
          <div>Community</div>
        </div>
        <div className="col span-1-of-3 box">
          <div>
            <span>Follow us </span>
          </div>
          <div>www.rccrwanda.com</div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Instagram</div>
        </div>
      </div>


      <div className="row footer-row">
        <p>Copyright&copy;2021 all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
