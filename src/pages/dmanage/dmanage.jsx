import React, {Component} from 'react'
import { Card ,Popover,Button} from 'antd';
import { Table, Tag, Space,List,card,Layout  ,Typography,Collapse } from 'antd';
import { Descriptions } from 'antd';
import { FolderOutlined,RollbackOutlined,PlusOutlined,DeleteOutlined } from '@ant-design/icons';
import './dmanage.less'
import logo from '../images/logo.svg'
import help from '../images/帮助.svg'
import messag from '../images/消息.svg'
import shop from '../images/购买.svg'
import me from '../images/me.png'
import userimg from '../images/用户.svg'
import wechat from '../images/wechat.png'
import Userinfo from '../userinfo/userinfo'
import Shopping from '../shopping/shopping'

const { Panel } = Collapse;

const text1 = `
  2021/7/16  18岁
`;
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const content = (
    <div className="wechat">
      <img src={wechat} alt='wechat' width='300'/>
    </div>
  );
const text = <span>要获取帮助,请扫描下方二维码加我微信</span>;
const datalist = [
  "ak",
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const data = [
  {
    title: '姓名',
    content:"ak",
  },
  {
    title: '性别',
    content:"ak1",
  },
  {
    title: '患者ID',
    content:"ak",
  },
  {
    title: '出生日期',
    content:"ak",
  },
];

export default class Dmanage extends Component {
  state = {
    patientSex:"男",
    patientId:"5bf3e196",
    patientBirth:"2002-10-10",
    patientName:"患者1",
  };
render () {
return (<div>
    <div className="dmanage">
        <header className="dmanage-headerl">
                <img src={logo} alt='logo' size='6px'/>
                <a href="/manage">颌面部智能定点测量系统 </a>
                
        </header>
        <div className="dmanage-headerr">
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
    
          
          <div className="dmanage-funcs">
        <span className="dmanage-funcs-header">
        <font color="white">姓名：{this.state.patientName} 性别：{this.state.patientSex} 患者ID：{this.state.patientId} 出生日期：{this.state.patientBirth}</font>
        <a href="/fmanage"><button><RollbackOutlined /><font size="2">患者管理</font></button></a>
        </span>
        



        <div className="dmanage-funcs-navi">
        
        <Collapse accordion className="">
        <Panel header="stage 1" key="1" >
          <p><font size="1">{text1}</font></p>
          <button><DeleteOutlined /></button>
          <button><PlusOutlined /><font size='1'>新建</font></button>
          <button><font size='1'><FolderOutlined />展示</font></button>
        
        </Panel>
        <Panel header="stage 2" key="2">
          <p><font size="1">{text1}</font></p>
          <button><DeleteOutlined /></button>

          <button><PlusOutlined />
          <font size='1'>新建</font>
          </button>

          <button><font size='1'><FolderOutlined />展示</font></button>
        </Panel>
        <Panel header="stage 3" key="3" >
          <p><font size="1">empty</font></p>
          <button><DeleteOutlined /></button>
          <button><PlusOutlined /><font size='1'>新建</font>
        </button>
        <button><font size='1'><FolderOutlined />展示</font></button>
        </Panel>
  </Collapse>
        </div>
        </div>

        </div>
    
)
}
}