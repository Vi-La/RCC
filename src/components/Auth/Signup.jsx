import { Form, Input, Button, Checkbox } from 'antd';
import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom"
import Layout from "../../hoc/Layout/Layout";
import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import { Link } from "react-router-dom"

const Signup = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const [firstName, setFirstName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { isLoading, sendRequest } = useHttpClient()
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [diocese, setDiocese] = useState("")
  const [password, setPassword] = useState("")

  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      const responseData = await sendRequest(
        "https://rcc-rwanda.herokuapp.com/api/v1/signup",
        "POST",
        JSON.stringify(values),
        { "Content-Type": "application/json" }
      )
      if (responseData.error) {
        alert(responseData.error)
      } else {
        console.log(responseData)
        auth.login(
          responseData.id,
          responseData.fullName,
          responseData.email,
          responseData.token
        )
        sessionStorage.setItem('rccRwUser', JSON.stringify(responseData))
        history.push("/")
      }
    } catch (error) { }

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);

  };
  console.log("Firstname", firstName)
  return (
    <div>
      <Layout />
      <Form
        className='signup-body'
        name="basic"
        labelCol={{
          span: 0,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className='signup-title'>
          <h1>Sign up now</h1>
          <p>Please fill in this form to create an account</p>
        </div>
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} />
        </Form.Item>

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
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
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
            placeholder='Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)} />
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
            placeholder='Diocese'
            value={diocese}
            onChange={(e) => setDiocese(e.target.value)} />
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
            placeholder='Telephone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
            
        </Form.Item>

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
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
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
            Sign Up
          </Button>
          &nbsp;
          <Link className='btn-link' to="/login">Already have account? Login</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup