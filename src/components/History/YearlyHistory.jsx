import React, { useEffect, useState } from 'react'
import { List, Avatar, Space, Divider } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import YearlyTeam from './YearlyTeam';
import Footer from '../Footer/Footer';
import { publicRequest } from '../../api';

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `Event ${i}`,
    avatar: 'https://cdn.vectorstock.com/i/1000x1000/65/08/pentecost-sunday-holy-spirit-vector-28346508.webp',
    description:
      'We are The Rwandan Charismatics.',
    content:
      "We are The Rwandan Charismatics,it's very greatfull Join us right now, are you looking for the place where you can find charismatic units? Don't worry! here we go!, this is where you are looking for!. in God we believe, in Jesus we trust, Holy spirit our pariticularity and we can't also forget Holy Mary. ",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const YearlyHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const response = await publicRequest.get("history");
      setHistory(response.data.data)
    }
    getHistory()
  }, [])

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={ history }
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.image}
              />
            }
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.eventName}</a>}
              description={item.title}
            />
            {item.content}
          </List.Item>
        )}
      />
      <Divider />
      {/* <h4 style={{ textAlign: 'center', fontWeight: 600, fontSize: '20px' }}>Team</h4>
      <div className='history-team'>
        <YearlyTeam />
        <YearlyTeam />
        <YearlyTeam />
        <YearlyTeam />
      </div> */}
    </>
  )
}

export default YearlyHistory