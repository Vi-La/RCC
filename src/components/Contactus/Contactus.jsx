import React, { useState } from "react";
import { publicRequest } from './../../api/index'

const Contactus = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault()
    sendMessage(fullName, phone, email, address, msg)
  }
  const sendMessage = async (fullName, phone, email, address, msg)=>{
    
    await publicRequest.post("message/send",{
      fullName: fullName,
      phone: phone,
      email: email,
      address: address,
      message: msg
    }).then((response)=>{
      console.log(response)
    });
    clear()
  };
  const clear = ()=>{
    setFullName = "";
    setPhone = "";
    setEmail = "";
    setAddress = "";
    setMsg = "";
  }
  
  return (
    <section className="section-form">
      <div className="row">
        <h2 className="Signup-heading">We're happy to hear from you</h2>
      </div>
      <div className="row">
        <form method="post" action="#" className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col span-1-of-3">
            </div>
            <div className="col span-2-of-3">
              <input
                type="text"
                name="name"
                value={fullName}
                id="name"
                placeholder="Your names"
                required
                onChange={(e)=> setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
            </div>
            <div className="col span-2-of-3">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                id="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
            </div>
            <div className="col span-2-of-3">
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e)=> setAddress(e.target.value)}
                id="address"
                placeholder="Your address (diocese)"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
            </div>
            <div className="col span-2-of-3">
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                id="phone"
                placeholder="Telephone number"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
            </div>
            <div className="col span-2-of-3">
              <textarea 
              name="message"
              value={msg}
              onChange={(e)=> setMsg(e.target.value)}
              placeholder="Your message"
              >
              </textarea>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>&nbsp;</label>
            </div>
            <div className="col span-2-of-3">
              <input type="submit" value="Submit"/>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
