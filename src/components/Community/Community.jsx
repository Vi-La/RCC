import React from "react";
import './Community.css'
import Building1 from "../../assets/building1.jpg";
import EmptyArtal from "../../assets/Empty-artal.jpg";
import Artal1 from "../../assets/Artal1.jpg";
import Building3 from "../../assets/building3.jpg";
import Lisbon from "../../assets/lisbon-3.jpg";
import London from "../../assets/london.jpg";
import Community from "../../assets/community1.jpg";
import Layout from "../../hoc/Layout/Layout";
import People from "../../assets/peaple.jpg";
import Berlin from "../../assets/berlin.jpg";
import SanFrancisco from "../../assets/san-francisco.jpg";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import TwitterIcon from "@material-ui/icons/Twitter";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";

const Communities = () => {
  return (
    <div>
    <section className="section-community" id="community">
      <div className="row ">
        <h2 className="community-heading">Our Community</h2>
      </div>
      <div className="row community-row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src={Building1} alt="Head quators" className="Community-img" />
          <h3>UECR</h3>
          <div className="community-features">
            <LocalActivityIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/community1-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <PeopleIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            1000+ Members
          </div>
          <div className="community-features">
            <TwitterIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              Twitter
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src={EmptyArtal} alt="Head quators2" className="Community-img" />
          <h3>Kibungo</h3>
          <div className="community-features">
            <LocalActivityIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/community2-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <PeopleIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            15000+ Members
          </div>
          <div className="community-features">
            <TwitterIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              Twitter
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src={EmptyArtal} alt="Head quators2" className="Community-img" />
          <h3>Kibungo</h3>
          <div className="community-features">
            <LocalActivityIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/community2-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <PeopleIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            15000+ Members
          </div>
          <div className="community-features">
            <TwitterIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              Twitter
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src={Artal1} alt="Head quators3" className="Community-img" />
          <h3>Ruhengeri</h3>
          <div className="community-features">
            <LocalActivityIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/community3-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <PeopleIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            2000+ Members
          </div>
          <div className="community-features">
            <TwitterIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              Twitter
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src={Building3} alt="Head quators4" className="Community-img" />
          <h3>Nyundo</h3>
          <div className="community-features">
            <LocalActivityIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/community4-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <PeopleIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            2500+ Members
          </div>
          <div className="community-features">
            <TwitterIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              Twitter
            </Link>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src={Building3} alt="Head quators4" className="Community-img" />
          <h3>Nyundo</h3>
          <div className="community-features">
            <LocalActivityIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/community4-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <PeopleIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            2500+ Members
          </div>
          <div className="community-features">
            <TwitterIcon
              style={{
                color: "#e67e22",
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
            />
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Communities;
