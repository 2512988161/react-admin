import React, {Component} from 'react'
import { Card ,Popover,Button} from 'antd';
import { Table, Tag, Space,List,card,Layout  ,Typography} from 'antd';
import { Descriptions } from 'antd';
import { RollbackOutlined,PlusOutlined } from '@ant-design/icons';
import './dmanage.less'
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
        <Descriptions>
        <Descriptions.Item label="姓名"   className="dmanage-funcs-header-item">Zo</Descriptions.Item>
        <Descriptions.Item label="性别"   className="dmanage-funcs-header-item">18000</Descriptions.Item>
        <Descriptions.Item label="患者ID"   className="dmanage-funcs-header-item">Hang</Descriptions.Item>
        <Descriptions.Item label="出生日期"   className="dmanage-funcs-header-item">empty</Descriptions.Item>
        </Descriptions>
        <a href="/fmanage"><button><RollbackOutlined />患者管理</button></a>
        </span>
        <button><PlusOutlined />新建</button>

        </div>

        </div>
    
)
}
}