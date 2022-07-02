import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { publicRequest } from "../../api";
import "./latest.css"

const { Meta } = Card;

const LatestNews = () => {
    const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await publicRequest.get("news");
      setNews(response.data.data)
    }
    getNews()
  }, []);

    return (

        <div className="lastest__news">
            {news.map((item)=>(
            <Card
                 key={item._id}
                hoverable
                style={{
                    width: "100%",
                }}
                cover={<img alt="Image" style={{height:"200px", width:"300px", padding:"10px 0px 10px 50px"}} src={item.newsImage} />}
            >
                <Meta title={item.title} description={item.desc} />
            </Card>
            ))}
        </div>
    )
}

export default LatestNews
