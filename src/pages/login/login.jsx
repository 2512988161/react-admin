import React, {Component} from 'react'
import './login.less'
import logo from './images/logo.svg'
import { Form, Input, Button, Icon } from 'antd';

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
      autoComplete="off"
      className="login-form"
    >
      <Form.Item
        label="Username"
        name="username"
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
        <Button type="primary" htmlType="submit" className="login-form-buttom">
          Submit
        </Button>
      </Form.Item>


    </Form>

        </section>
    </div>
)
}
}