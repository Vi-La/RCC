import React, { useState } from "react";
import { publicRequest } from './../../api/index'

const Contactus = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [msg, setMsg] = useState('');

  const [formData,setFormData] = useState({
    fullName:"",
    phone:"",
    email:"",
    address:"",
    message:""
  })

  const handleSubmit = async(e)=>{
    e.preventDefault()
    await publicRequest.post("message/send",{
      formData
    }).then((response)=>{
      console.log("data",response)
    });
   
    console.log("data", formData)
    clear()
  }
   // sendMessage(fullName, phone, email, address, msg)
  // const sendMessage = async (fullName, phone, email, address, msg)=>{
  // };
  const clear = ()=>{
    setFormData({
      fullName:"",
      phone:"",
      email:"",
      address:"",
      message:""
    })
  }
  
  return (
    <section className="section-form">
      <div className="row contact__heading">
        <h2>We're happy to hear from you</h2>
      </div>
      <div className="row contact__form-container">
        <form method="post" action="#" className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            
            <div className="col span-2-of-3">
              <input
                type="text"
                name="name"
                value={formData.fullName}
                id="name"
                placeholder="Your names"
                required
                onChange={(e)=>setFormData({
                  ...formData,
                  fullName:e.target.value
                })}
              />
            </div>
          </div>
          <div className="row">
            
            <div className="col span-2-of-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e)=> setFormData({
                  ...formData,
                  email:e.target.value
                })}
                id="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-2-of-3">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={(e)=> setFormData({
                  ...formData,
                  address:e.target.value
                })}
                id="address"
                placeholder="Your address (diocese)"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-2-of-3">
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={(e)=> setFormData({
                  ...formData,
                  phone:e.target.value
                })}
                id="phone"
                placeholder="Telephone number"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-2-of-3">
              <textarea 
              name="message"
              value={formData.message}
              onChange={(e)=> setFormData({
                ...formData,
                message:e.target.value
              })}
              placeholder="Your message"
              >
              </textarea>
            </div>
          </div>
          <div className="row">
            <div className="col span-2-of-3">
              <input type="submit" value="Send"/>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
