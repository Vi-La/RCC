import React from 'react'
import { Card } from 'antd';
import "./latest.css"

const { Meta } = Card;

const LatestNews = () => {
    return (
        <div className="lastest__news">
            <Card
           
                hoverable
                style={{
                    width: "100%",
                }}
                cover={<img alt="example" style={{height:"300px"}} src="https://cdn.pixabay.com/photo/2016/02/03/16/00/cross-1177327_1280.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>
    )
}

export default LatestNews
