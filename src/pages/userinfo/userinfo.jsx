import React, {Component} from 'react'
import './userinfo.less'
import logo from '../images/logo.svg'
import help from '../images/帮助.svg'
import messag from '../images/消息.svg'
import shop from '../images/购买.svg'
import me from '../images/me.png'
import userimg from '../images/用户.svg'
import Shopping from '../shopping/shopping'
import Manage from '../manage/manage'
import { Checkbox, Row, Col,Select,Collapse ,Avatar, Image,Form, Input, Button } from 'antd';
import { Radio,Popover } from 'antd';
import wechat from '../images/wechat.png'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  const content = (
    <div className="wechat">
      <img src={wechat} alt='wechat' width='300'/>
    </div>
  );
  const text = <span>要获取帮助,请扫描下方二维码加我微信</span>;
export default class Userinfo extends Component {
   
render () {
    
return (
    <div className="userinfo">
        <header className="userinfo-headerl">
                <img src={logo} alt='logo' size='6px'/>
                <a href="/manage">颌面部智能定点测量系统 </a>
                 
        </header>
        <div className="userinfo-headerr">
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

        <div className="userinfo-item">

        <Collapse accordion width='700px'>
        <Panel header="基本信息" key="1" >
                <Avatar src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} />
                <Button type="link">立即认证</Button>
                <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="昵称"
        name="nickname"
        rules={[{ required: true, message: '请输入昵称' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="姓名"
        name="username"
        rules={[{ required: true, message: '请输入姓名' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="性别"
        name="sex"
        rules={[{ required: true, message: '请选择性别' }]}
      >
      <Radio.Group label="性别">
      <Radio value={1}>男</Radio>
      <Radio value={2}>女</Radio>
      </Radio.Group>
      </Form.Item>

      

      <Form.Item
        label="手机号"
        name="phonenum"
        rules={[{ required: false, message: '请输入电话' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="所属单位"
        name="department"
        rules={[{ required: true, message: '请输入所属单位' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="地址"
        name="location"
        rules={[{ required: true, message: '请输入地址' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="职称">
          <Select>
            <Select.Option value="v1">v1</Select.Option>
            <Select.Option value="v2">v2</Select.Option>
            <Select.Option value="v3">v3</Select.Option>
            <Select.Option value="v4">v4</Select.Option>
            <Select.Option value="v5">v5</Select.Option>
          </Select>
      </Form.Item>
      <Form.Item label="学历">
          <Select>
            <Select.Option value="小学">小学</Select.Option>
            <Select.Option value="初中">初中</Select.Option>
            <Select.Option value="高中">高中</Select.Option>
            <Select.Option value="大学">大学</Select.Option>
            <Select.Option value="硕士">硕士</Select.Option>
            <Select.Option value="博士">博士</Select.Option>
            <Select.Option value="院士">院士</Select.Option>
          </Select>
      </Form.Item>
      <Form.Item label="微信">
          <Button type="link">绑定</Button>
        </Form.Item>
        <Form.Item label="邮箱">
          <Button type="link">绑定</Button>
        </Form.Item>
        <Form.Item label="擅长专业">
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">口腔全科</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">口腔正畸</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">口腔种植</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">儿童口腔</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">口腔颌面外科</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="F">牙周</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="G">牙体牙髓</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="H">口腔修复</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="I">口腔粘膜</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>


            
        </Panel>
        <Panel header="工作信息" key="2">
            <Form>
            <Form.Item
        label="所在医疗机构"
        name="med_dep"
        rules={[{ required: true, message: '请输入所在医疗机构' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="所在地"
        name="med_loc"
        rules={[{ required: true, message: '请输入所在地' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="详细地址"
        name="dtl_loc"
        rules={[{ required: true, message: '请输入详细地址' }]}
      >
        <Input />
      </Form.Item><Form.Item
        label="执照"
        name="lic"
        rules={[{ required: true, message: '请输入执照信息' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name= 'introduction' label="说明">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
            </Form>
        </Panel>
        <Panel header="地址管理" key="3">
        <Form name="dynamic_form_item" >
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 1) {
                return Promise.reject(new Error('至少一个地址'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                
                label={index === 0 ? '地址' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "请输入地址或删除此输入框.",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="地址信息" style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                增加地址
              </Button>
              <Button
                type="dashed"
                onClick={() => {
                  add('The head item', 0);
                }}
                style={{ width: '60%', marginTop: '20px' }}
                icon={<PlusOutlined />}
              >
                自上增加地址
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
        </Panel>
        </Collapse>,
        </div>

    </div>
)
}
}