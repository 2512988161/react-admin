import React, {Component ,useState} from 'react'
import { Modal , Card ,Popover,Button,Form,Input,DatePicker,Select,Table} from 'antd';
import { PlusCircleOutlined,WomanOutlined,ManOutlined ,FileOutlined } from '@ant-design/icons';
import {  Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import './fmanage.less'
import logo from '../images/logo.svg'
import help from '../images/帮助.svg'
import messag from '../images/消息.svg'
import shop from '../images/购买.svg'
import me from '../images/me.png'
import userimg from '../images/用户.svg'
import wechat from '../images/wechat.png'

import Userinfo from '../userinfo/userinfo'
import Shopping from '../shopping/shopping'
import Dmanage from '../dmanage/dmanage'
import axios from 'axios';



    // componentDidMount() {
    //   axios.get('http://192.168.6.244:10000/api/cases/?dentistID=617916eeef41de498a358145')
    //     .then(res => {
    //       const data = res;
          
    //     })
    // }
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


  const columns = [
    {
      title: '患者姓名',
      dataIndex: 'patientName',
      filters: [
        {
          text: 'John',
          value: 'John',
        },
        {
          text: '李',
          value: '李',
        },
        // {
        //   text: 'Submenu',
        //   value: 'Submenu',
        //   children: [
        //     {
        //       text: 'Green',
        //       value: 'Green',
        //     },
        //     {
        //       text: 'Black',
        //       value: 'Black',
        //     },
        //   ],
        // },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {

      title: '患者ID',
      dataIndex: '_id',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.ID - b.ID,


    },
    {
      title: '性别',
      dataIndex: 'patientSex',
      
    },
    {
      title:'年龄',
      dataIndex:'patientAge',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },

    {
      title: '初诊时间',
      dataIndex: 'treatmentDate',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.firsttime - b.firsttime,
    },
    
    // {
    //   title: '治疗机构',
    //   dataIndex: 'dep',
    //   filters: [
    //     {
    //       text: '华西',
    //       value: '华西',
    //     },
    //     {
    //       text: '省医院',
    //       value: '省医院',
    //     },
    //   ],
    //   onFilter: (value, record) => record.dep.indexOf(value) === 0,
    // },
    // {
    //   title: '数据管理',
    //   dataIndex: 'data',
    // },
    // {
    //   title: '操作',
    //   dataIndex: 'oprt',

    // },
    
  ];
  
  
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }




export default class Fmanage extends Component {
  state = {
    data: [],
    isModalVisible:false,
  };

handleOk  ()  {
    this.setState({setIsModalVisible:true});
  };

componentDidMount() {
    axios.get('http://192.168.6.244:10000/api/cases/?dentistID=617916eeef41de498a358145')
      .then(res => { 
        console.log(res.data.data[0])

        for(var i=0;i<res.data.data[1];i++){
          res.data.data[0][i].treatmentDate=res.data.data[0][i].treatmentDate.slice(0,16)
          //res.data.data[0]['treatmentDate']= res.data.data[0]['treatmentDate'].slice(4,6)
          if(res.data.data[0][i].patientSex==0){res.data.data[0][i].patientSex="男"}
        else{ res.data.data[0][i].patientSex="女"}
      }
        console.log(res.data.data[0])
        var data = res.data.data[0];
        this.setState({ data });
      })
  };



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
        <Button type="primary" htmlType="submit" >
          search
        </Button>
      </Form.Item>
    </Form>
    <Button type="primary" onClick={() => this.setState({isModalVisible:true})} >
        添加患者
      </Button>
      <Modal title="患者添加" visible={this.state.isModalVisible} onOk={() => this.setState({isModalVisible:false})} onCancel={() => this.setState({isModalVisible:false})}>
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
    >
      <Form.Item
        label="患者姓名"
        name="patientName"
        rules={[
          {
            required: true,
            message: '请输入患者姓名！',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="患者年龄"
        name="patientAge"
        rules={[
          {
            required: true,
            message: '请输入患者年龄!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="患者生日"
        name="patientBirth"
        rules={[
          {
            required: true,
            message: '请选择患者生日!',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="初诊日期"
        name="treatmentDate"
        rules={[
          {
            required: true,
            message: '请选择初诊日期!',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      {/* <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>

        
      </Modal>

      <div>

      <Table columns={columns} dataSource={this.state.data} onChange={onChange} />


      </div>

        </div>
  
</div>
)
}

}
