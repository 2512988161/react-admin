import React, {Component ,useState} from 'react'
import { Card ,Popover,Button,Form,Col,Row,Input,DatePicker,Select} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import {  Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import './fmanage.less'
import logo from '../images/logo.svg'
import help from '../images/帮助.svg'
import messag from '../images/消息.svg'
import shop from '../images/购买.svg'
import me from '../images/me.png'
import userimg from '../images/用户.svg'
import skull from '../images/skull.svg'
import face from '../images/face.svg'
import teeth from '../images/teeth.svg'
import sharptooth from '../images/sharptooth.svg'
import brain from '../images/brain.svg'
import wechat from '../images/wechat.png'


import Userinfo from '../userinfo/userinfo'
import Shopping from '../shopping/shopping'

const { Option } = Select;
const { Meta } = Card;
const content = (
    <div className="wechat">
      <img src={wechat} alt='wechat' width='300'/>
    </div>
  );
const text = <span>要获取帮助,请扫描下方二维码加我微信</span>;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => {console.log(value)}


  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }




export default class Fmanage extends Component {
  
render () {
  
return (<div className="global">
    <div className="fmanage">
        <header className="fmanage-headerl">
                <img src={logo} alt='logo' size='6px'/>
                <a href="/manage">颌面部智能定点测量系统 </a>
                
        </header>
        <div className="fmanage-headerr">
        <Popover className="guide" placement="bottom" title={text} content={ content} trigger="click">
        <a className="guide" href="https://sm.ms/image/mMuaiIPnstLbJj1"><img src={help} alt='help' size='20px'/></a>
        <a className="guide" href="https://sm.ms/image/mMuaiIPnstLbJj1">帮助</a>
      </Popover>
        <a className="guide"><img src={messag} alt='messag' size='20px'/></a>
        <a className="guide">消息</a>
        <a className="guide" href='/shopping'><img src={shop} alt='shop' size='20px' /></a>
        <a className="guide" href='/shopping'>购买</a>
        <a className="guide" href="/userinfo"><img src={userimg} alt='userimg' size='20px'/></a>
        <a className="guide" href="/userinfo">用户</a>
        </div>
        </div>
        <div className="fmanage-funcs">
  <Form
      layout="inline"
      name="basic"
      labelCol={{ span: 2}}
      wrapperCol={{ span: 18 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    className="ox"
    style={{ color: "white" }}
    >
      <Form.Item
        //label="患者姓名"
        name="username"
        rules={[{  message: '请输入患者名!' }]}
        style={{ color: "white" }}
      >
        患者姓名
        <Input />
      </Form.Item>
      <Form.Item
       //label="出生日期"
        validateStatus="error"
        style={{ color: "white" }}
       // help="Please select right date"
        //style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
      >
        出生日期
        <DatePicker />
      </Form.Item>
      
      <Form.Item
        name="state"
        //label="治疗阶段"
        hasFeedback
        style={{ color: "white" }}
      >
        治疗阶段
        <Select placeholder="请选择治疗阶段">
        <Option value="step1">第一阶段</Option>
          <Option value="step2">第二阶段</Option>
          <Option value="step3">第三阶段</Option>
        </Select>
      </Form.Item>

      <Form.Item
      // label="治疗日期"
       style={{ color: "white" }}
        validateStatus="error"
       // help="Please select right date"
        //style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
      >治疗日期
        <DatePicker />
      </Form.Item>
      <Form.Item
        //label="治疗医生"
        name="dctname"
        style={{ color: "white" }}
        rules={[{ message: '请输入治疗医生名!' }]}
      >治疗医生
        <Input />
      </Form.Item>
      <Form.Item
       // label="治疗机构"
        name="dep"
        style={{ color: "white" }}
        rules={[{  message: '请输入治疗机构!' }]}
      >治疗机构
        <Input />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          search
        </Button>
      </Form.Item>
    </Form>
    <Button type="primary"><PlusCircleOutlined />添加患者</Button>

      <div>



        
      </div>

        </div>
  
</div>
)
}

}
