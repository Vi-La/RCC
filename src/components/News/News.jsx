import React, { useEffect, useState } from "react";
import { Card, List, Avatar, Space, Layout } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import Lay from "../../hoc/Layout/Layout";
import Footer from "../Footer/Footer";
import { publicRequest } from "../../api";
import './News.css'

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
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async ()=>{
      const response = await publicRequest.get("news");
      setNews(response.data.data)
    }
    getNews()
  }, [])

  return (

    <div >
      <Lay />
      <Layout />
      <div className="titleContainer"> Top News</div>
      <div className='container1'>
        {news?.map((item) => (
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
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default News;
