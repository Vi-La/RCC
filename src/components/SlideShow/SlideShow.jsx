import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Row, Col } from "antd";
import Img from "../../assets/holy-spirit-OCN.jpg";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import "./SlideShow.css";
import { publicRequest } from "../../api";

const SlideShow = () => {
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const getLesson = async () => {
      const response = await publicRequest.get("saint");
      setLesson(response.data.data)
    }
    getLesson()
  }, [])

  return (
    <div className="slide-container" >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
        <Col className="gutter-row " span={14}>
          <Carousel autoplay>
            <div id="slider">
              <figure className="wgh-slider-item-figure">
                <div className="slides">
                  <div className="slider">
                    <div className="legend"></div>
                    <div className="content">
                      <div className="content-txt">
                        <h1>Rwanda ChatholiqueCharismatique aux Rwanda</h1>
                        <h2>
                          We are The Rwandan Charismatics,it's very greatfull
                          Join us right now.
                        </h2>
                      </div>
                    </div>

                    <div className="image">
                      <img src={Img} alt="pic1" />
                    </div>
                  </div>
                  <div className="slider">
                    <div className="legend"></div>
                    <div className="content">
                      <div className="content-txt">
                        <h1>Rwanda Charismatique aux </h1>
                        <h2>
                          We are The Rwandan Charismatics,it's very greatfull
                          Join us right now
                        </h2>
                      </div>
                    </div>
                    <div className="image">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/002/543/301/original/pentecost-sunday-holy-spirit-vector.jpg"
                        alt="pic2"
                      />
                    </div>
                  </div>
                  <div className="slider">
                    <div className="legend"></div>
                    <div className="content">
                      <div className="content-txt">
                        <h1>Rwanda Charismatique aux </h1>
                        <h2>
                          We are The Rwandan Charismatics,it's very greatfull
                          Join us right now
                        </h2>
                      </div>
                    </div>
                    <div className="image">
                      <img
                        src="https://cdn.pixabay.com/photo/2020/01/24/17/07/pray-4790759_1280.jpg"
                        alt="pic3"
                      />
                    </div>
                  </div>
                </div>
                <figcaption className="wgh-slider-item-figure__caption">
                  <a href="/aupair">
                    <div className="aupair-link">Rwanda</div>
                  </a>
                  <br />
                  <a href="/aupair">
                    <span style={{ color: "white" }}>
                      More about us <OpenInNewIcon size="50px" />
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </span>
                  </a>
                </figcaption>
              </figure>
            </div>
          </Carousel>
        </Col>
        <Col className="gutter-row" span={10}>
            {lesson.slice(0,1).map((item)=>(
          <div className="saint-of-the-day" key={item._id}>
            <div>
              <h2 className="saint-of-the-day-title">Lesson of the day</h2>
            </div>
            <div className="saint-of-the-day-picture">
              <img
                alt="saint-of-the-day"
                src={item.image}/>
            </div>
            <div className="saint-of-the-day-description">
              <h2 className="saint-of-the-day-name">{item.sainterName}</h2>
              <p>
                {item.desc}
              </p>
            </div>
          </div>
            ))}
        </Col>
      </Row>
    </div>
  );
};

export default SlideShow;
