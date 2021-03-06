import React, {Component} from 'react'
import './login.less'
import logo from '../images/logo.svg'
import { Form, Input, Button, Icon } from 'antd';
import {Link,BrowserRouter} from 'react-router-dom'
import Manage from '../manage/manage'
import axios from 'axios';

const onFinish = (values) => {
    axios.post('http://192.168.6.244:10000/api/auth/login',values).then(function(response){
      console.log(response);
      if(response.data.msg=="成功") {window.location.href="/manage"}
      else{alert(response.data.msg)}
    }).catch(function(error){

      console.log(error)
    })
    
    console.log('Success:', values);
    // <BrowserRouter><link to="/manage">abouxasacascas</link></BrowserRouter>;
    // <Manage/>  
  };

 const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);};

export default class Login extends Component {
  
render () {
return (
    <div className="login">
        <header className="login-header">
                <img src={logo} alt='logo' size='60px'/>
                <h1>颌面部智能定点测量系统 </h1>

        </header>
        <section className="login-content">
            
            <h2>用户登录</h2>
            
            <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="login-form"
    >
      <Form.Item
        label="Username"
        name="userName"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

    

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" className="login-form-buttom"  >
          Submit
        </Button>
      </Form.Item>


    </Form>

        </section>
    </div>
)
}
}