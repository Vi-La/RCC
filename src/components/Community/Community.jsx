import React, { useEffect, useState } from "react";
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
import { publicRequest } from "../../api";

const Communities = () => {
  const [communities,setCommunities] = useState([]);
  useEffect(()=>{
    const getCommunity = async ()=>{
      const response = await publicRequest.get("community");
      setCommunities(response.data.data)
    }
    getCommunity()
  },[])

  return (
    <div >
      <section className="section-community" id="community">
        <div className="row ">
          <h2 className="community-heading">Our Community</h2>
        </div>
        <div className="row community-row">
            {communities.slice(0,10).map((item)=>(
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={item._id}>
            <img src={item.image} alt="Head quators" className="Community-img" />
            <h3>{item.title}</h3>
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
                {item.action}
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
              {item.member}
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
                {item.twLink}
              </Link>
            </div>
          </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Communities;
