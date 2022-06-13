import React from "react";
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

const Documentations = () => {

  const community = [
    {
      id: "1",
      title: "Kibungo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4RD4hBtEK8A8NS8L5cFGYxAJ2Tt8XSuf6Q&usqp=CAU",
      linkName: "Activities",
      member: "2000+Members",
      Twitter: "Twitter"
    },
    {
      id: "2",
      title: "Kibungo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqj4mkz0P12au-oOkyhvn8KNR8r_sQimQcQ&usqp=CAU",
      linkName: "Activities",
      member: "1800+Members",
      Twitter: "Twitter"
    },
    {
      id: "3",
      title: "Kibungo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgw83Csoz7-UlhpSr4EEb2VTiRAzeOQCI7AQ&usqp=CAU",
      linkName: "Activities",
      member: "1000+Members",
      Twitter: "Twitter"
    },
    {
      id: "4",
      title: "Kibungo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5WnO6unKBm-1P4hm1hIx8Upa-bZq_uWHGg&usqp=CAU",
      linkName: "Activities",
      member: "500+Members",
      Twitter: "Twitter"
    },
    {
      id: "5",
      title: "Kibungo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64eqxb5Rp_VIyAgIQHksH0EH8haPTOfddnA&usqp=CAU",
      linkName: "Activities",
      member: "15000+ Members",
      Twitter: "Twitter"
    },
    {
      id: "3",
      title: "Kibungo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgw83Csoz7-UlhpSr4EEb2VTiRAzeOQCI7AQ&usqp=CAU",
      linkName: "Activities",
      member: "1000+Members",
      Twitter: "Twitter"
    },
    {
      id: "4",
      title: "Kibungo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5WnO6unKBm-1P4hm1hIx8Upa-bZq_uWHGg&usqp=CAU",
      linkName: "Activities",
      member: "500+Members",
      Twitter: "Twitter"
    },
    {
      id: "5",
      title: "Kibungo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4o_1P1vMbixI17Id06pH2sluJVS0JFthFMw&usqp=CAU",
      linkName: "Activities",
      member: "15000+ Members",
      Twitter: "Twitter"
    }
  ]
  return (
    <div>
      <Layout />
      <section className="section-community">
        <div className="row ">
          <h2 className="community-heading">Our Library</h2>
        </div>
        <div className="row community-row">

          {community.map((item) => (
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
                  {item.linkName}
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
                  {item.Twitter}
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
