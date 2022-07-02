import React, { useEffect, useState } from "react";
import { Card, List, Avatar, Space, Layout } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import Navigation from "./../Navigation/Toolbar/Toolbar";
import Footer from "../Footer/Footer";
import { publicRequest } from "../../api";
import './News.css'
import LatestNews from "./LatestNews"

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: "#",
    title: `Live christian life ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Address a prayer to God with RCC.",
    content:
      "We are The Rwandan Charismatics,it's very greatfull Join us right now, are you looking for the place where you can find charismatic units? Don't worry! here we go!, this is where you are looking for!. in God we believe, in Jesus we trust, Holy spirit our pariticularity and we can't also forget Holy Mary. ",
  });
}

const IconText = ({ icon }) => (
  <Space>
    {React.createElement(icon)}
  </Space>
);

const News = () => {
  
  return (
    <>
      <Navigation />
      <div className="news__main__container" >
        <div className="row">
        <h2>RCCR NEWS</h2>
        </div>
        <div className='news__container'>
          <div className="news__main__body">
            <div>
              <div className="news__img">
                <img src="https://cdn.pixabay.com/photo/2017/01/03/01/08/jesus-christ-1948251_1280.jpg" alt="jesus" />
              </div>
              <div className="newsHeader">
                <h2 className="newsHeader">What a friend we have in Jesus</h2>
              </div>
              <div>
                <p> Iusto quo alias quod, incidunt ea esse veritatis soluta neque quia rem est animi a deleniti quam provident tempora dolor explicabo officiis.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p> Iusto quo alias quod, incidunt ea esse veritatis soluta neque quia rem est animi a deleniti quam provident tempora dolor explicabo officiis.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p> Iusto quo alias quod, incidunt ea esse veritatis soluta neque quia rem est animi a deleniti quam provident tempora dolor explicabo officiis.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="news_right__side__bar">
            <div>
              <LatestNews />
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default News;

{/* <div className="titleContainer"> Top News</div> */ }

{/* {news?.map((item) => (
          <div className="bodyContainer">
            <div className="imageContainer">
              <img src={item.newsImage} />
            </div>
            <div className="contentContainer">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button className="btn">Read More ...</button>
            </div>
          </div>
        ))} */}