import React, { useEffect, useState } from "react";
import './Team.css'
import { Link } from "react-router-dom";
import Customer from "../../assets/customer-1.jpg";
import Customer2 from "../../assets/customer-2.jpg";
import Customer3 from "../../assets/customer-3.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { publicRequest } from "../../api";
import { Col, Divider, Row } from 'antd';
const style = {
  // background: '#0092ff',
  // padding: '20px 0',
};

const Team = () => {
  const [member, setMember] = useState([]);

  useEffect(() => {
    const teamMembers = async () => {
      const response = await publicRequest.get("getInTouch");
      setMember(response.data.data)
    }
    teamMembers()
  }, []);
  return (
    <section className="section-team" id="team">
      <div className="row">
        <h2 className="team-heading">Get in touch with our team</h2>
      </div>
      <div className="Our__teams">
        <div className="row">
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {member.map((item) => (
              <Col className="gutter-row" xs={24} lg={6} style={{ marginBottom: "50px" }} key={item._id}>
                <div style={style}>
                  <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2017/01/03/01/08/jesus-christ-1948251_1280.jpg" alt="team-member-name" />
                    <div className="card__description">
                      <div className="card__description-item">{item.fullName}</div>
                      <div className="card__description-item">{item.title}</div>
                      <div className="card__description-item">{item.diocese}</div>
                    </div>

                    <Divider />
                    <div className="team__social__container">
                      <div className="team__social__container__social_item">
                        <FacebookIcon
                          style={{
                            color: "#e67e22",
                            fontSize: "20px",
                            float: "left",
                            marginRight: "5px"
                          }}
                        />
                        <Link to="/https://www.facebook.com" className="social-media">
                          {item.fbLink}
                        </Link>
                      </div>
                      <div className="team__social__container__social_item">
                        <TwitterIcon
                          style={{
                            color: "#e67e22",
                            fontSize: "20px",
                            float: "left",
                            marginRight: "5px"
                          }}
                        />
                        <Link to="/https://www.twitter.com" className="social-media">
                          {item.twLink}
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Team;
