import React, { useEffect, useState } from "react";
import Building1 from "../../assets/building1.jpg";
import EmptyArtal from "../../assets/Empty-artal.jpg";
import Artal1 from "../../assets/Artal1.jpg";
import Building3 from "../../assets/building3.jpg";
import Lisbon from "../../assets/lisbon-3.jpg";
import London from "../../assets/london.jpg";
import Community from "../../assets/community1.jpg";
import People from "../../assets/peaple.jpg";
import Berlin from "../../assets/berlin.jpg";
import SanFrancisco from "../../assets/san-francisco.jpg";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import TwitterIcon from "@material-ui/icons/Twitter";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";
import Layout from "../../hoc/Layout/Layout"
import Footer from "../Footer/Footer"
import { publicRequest } from "../../api";

const Documentations = () => {

  const [communities,setCommunities] = useState([]);
  useEffect(()=>{
    const getCommunity = async ()=>{
      const response = await publicRequest.get("community");
      setCommunities(response.data.data)
    }
    getCommunity()
  },[])

  return (
    <div>
      <Layout />
      <section className="section-community">
        <div className="row ">
          <h2 className="community-heading">Our Library</h2>
        </div>
        <div className="row community-row">

          {communities.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <img src={item.image} alt="Head quators2" className="Community-img" />
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
                <Link to="/community2-activity" className="community-links">
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
      <Footer />
    </div>
  );
};

export default Documentations;
