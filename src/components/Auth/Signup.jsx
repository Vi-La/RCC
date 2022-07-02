import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom"
import Layout from "../../hoc/Layout/Layout";
import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import { Link } from "react-router-dom"
import axios from "axios"

const Signup = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()
 
  const [isSignup,setIsSignup] = React.useState(true)

  const switchMode = ()=>{
    setIsSignup((prev)=>!prev)

    console.log(isSignup)
  }
  const onFinish = async (values) => {
    console.log('Success:', values);
    if(!isSignup){

      try {
        const response=  await axios({
          url:"http://localhost:5000/api/v1/users/login",
          // url:"https://rcc-rwanda1.herokuapp.com/api/v1/users/login",
          method:"POST",
          data:values,
          headers:{
            "Content-Type":"application/json"
          }
        })
      
        localStorage.setItem("user",JSON.stringify(response?.data))
         if(JSON.parse(localStorage.getItem('user')).accessToken){
           history.push('/dashboard')
         }
          } catch (error) {
            console.log(error)
          }
    }else{
    console.log("SIGN API HERE")
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);

  };
  
  return (
    <React.Fragment>
    <Layout />
    <div className='signup-body'>
      <Form
       className='signup__form'
        name="basic"
        labelCol={{
          span: 0,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className='signup-title'>
          <h1>{isSignup?"Sign up now":"Login now"}</h1>
          <p>Please fill in this form to create an account</p>
        </div>
      { isSignup&& (<>
      <Form.Item
          className='signup_input'
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your first Name!',
            },
          ]}
        >
          <Input
            placeholder='First name'
           
          />
        </Form.Item>

        <Form.Item
          className='signup_input'
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your last Name!',
            },
          ]}
        >
          <Input
            placeholder='Last name'
             />
        </Form.Item>
        </>)}

        <Form.Item
          className='signup_input'
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input
            placeholder='Email' />
        </Form.Item>

      {isSignup&&(<> <Form.Item
          className='signup_input'
          name="Country"
          rules={[
            {
              required: true,
              message: 'Please input your Country!',
            },
          ]}
        >
          <Input
            placeholder='Country' />
        </Form.Item>

        <Form.Item
          className='signup_input'
          name="diocese"
          rules={[
            {
              required: true,
              message: 'Please input Diocese!',
            },
          ]}
        >
          <Input
            placeholder='Diocese' />
        </Form.Item>

        <Form.Item
          className='signup_input'
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your Telephone number!',
            },
          ]}
        >
          <Input
            type="number"
            placeholder='Telephone'/>
            
        </Form.Item>
        </>) }
        <Form.Item
          className='signup_input'
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password className='passInput'
            placeholder='Password' />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span:64,
          }}
        >
          <Button className='login-btn' htmlType="submit"
          // loading={true}
          >
           { isSignup?"Sign Up":"Login"}
          </Button>
          <Button color='primary' htmlType="submit"
          style={{width:"300px"}}
          // loading={true}
          >
           { !isSignup&&"Forgot Password?"}
          </Button>
          &nbsp;
         
          <span style={{cursor:"pointer",textDecoration:"underline",color:"sky-blue"}} className='btn-link' onClick={switchMode} >{isSignup?"Already have account? Login":"Don't have account? Signup"}</span>
         
        </Form.Item>

        
      </Form>
    </div>
    </React.Fragment>
  );
};

export default Signup