import React from 'react'
import { Row, Col } from "antd";
import { Input } from 'antd';
import {SendOutlined,PaperClipOutlined} from '@ant-design/icons';


const Messages = () => {
    return (
        
           <Row gutter={{ xs: 8, sm: 16, md: 28, lg:16}} className="message-body-container">
                <Col className="gutter-row " span={24}>
                 <div className="message-container">
                 <Col className="gutter-row " span={10}>
                   <div className="user-one">
                   Hello, How are doing?
                   </div>
                   </Col>
                   <Col className="gutter-row " span={10}>
                   <div className="user-two">
                   Hey Dear, I'm doing well.
                   </div>
                   </Col>
                 </div>
                 
                 <form>
                 <Input size="large"
                  placeholder="large size"
                   prefix={<PaperClipOutlined style={{cursor:'pointer',color:'#69c0ff'}}/>}
                   suffix={<SendOutlined style={{cursor:'pointer',color:'#69c0ff'}}/>} 
                    style={{borderRadius:'10px'}}
                   />
                </form>
                </Col>
           </Row> 
        
    )
}

export default Messages
