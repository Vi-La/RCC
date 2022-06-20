import { Form, Input, Button, Checkbox } from 'antd';
import { useState, useContext} from 'react';
import { useHistory } from "react-router-dom"
import Layout from "../../hoc/Layout/Layout";
import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import {Link} from "react-router-dom"
import axios from "axios"

const Login = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const [firstName, setFirstName] =useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { isLoading, sendRequest } = useHttpClient()
  const [lastName, setLastName] =useState("")
  const [email, setEmail] =useState("")
  const [phone, setPhone] =useState("")
  const [password, setPassword] =useState("")

  const onFinish = async(values) => {
    console.log('Success:', values);

    try {
  const response=  await axios({
    // url:"http://localhost:5000/api/v1/users/login",
    url:"https://rcc-rwanda1.herokuapp.com/api/v1/users/login",
    method:"POST",
    data:values,
    headers:{
      "Content-Type":"application/json"
    }
  })

  localStorage.setItem("user",JSON.stringify(response?.data))
  // console.log(response?.data.accessToken)
  // console.log(JSON.parse(localStorage.getItem('user')).accessToken)
   if(JSON.parse(localStorage.getItem('user')).accessToken){
     history.push('/dashboard')
   }
    } catch (error) {
      console.log(error)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
    <Layout/>
    <Form
      className='login-body'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span:8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <Form.Item
        // label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input placeholder='Email'/>
      </Form.Item>

      <Form.Item
        // label=""
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='Password'/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button className='login-btn' htmlType="submit"
        // loading={true}
        >
          Login
        </Button>
        <Link className='btn-link' to="signup">&nbsp;Don't have accout? Signup</Link>
      </Form.Item>

    </Form>
    </div>
  );
};

export default Login;
