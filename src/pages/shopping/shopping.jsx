import React, {Component} from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './shopping.less'
import logo from './images/logo.svg'
import help from './images/帮助.svg'
import messag from './images/消息.svg'
import shop from './images/购买.svg'
import me from './images/me.png'
import userimg from './images/用户.svg'
import skull from './images/skull.svg'
import face from './images/face.svg'
import teeth from './images/teeth.svg'
import sharptooth from './images/sharptooth.svg'
import brain from './images/brain.svg'
import Userinfo from '../userinfo/userinfo'
import Manage from '../manage/manage'
const { SubMenu } = Menu;
  
export default class Shopping extends Component {
    state = {
        current: 'products',
      };
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    render () {
    const { current } = this.state;

   return (
    <div className="shopping">
        <header className="shopping-headerl">
                <img src={logo} alt='logo' size='6px'/>
                <a href="/manage">颌面部智能定点测量系统 </a>  
        </header>
        <div className="shopping-headerr">
        <a className="guide" href="https://sm.ms/image/mMuaiIPnstLbJj1"><img src={help} alt='help' size='20px'/></a>
        <a className="guide" href="https://sm.ms/image/mMuaiIPnstLbJj1">帮助</a>
        <a className="guide"><img src={messag} alt='messag' size='20px'/></a>
        <a className="guide">消息</a>
        <a className="guide" href='/shopping'><img src={shop} alt='shop' size='20px' /></a>
        <a className="guide" href='/shopping'>购买</a>
        <a className="guide" href="/userinfo"><img src={userimg} alt='userimg' size='20px'/></a>
        <a className="guide" href="/userinfo">用户</a>
        </div>
        <div className="shopping-navi">
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="products" icon={<MailOutlined />} className="shopping-navi-button">
                购买产品
            </Menu.Item>
            <Menu.Item key="myservice" icon={<MailOutlined />} className="shopping-navi-button">
                我的服务
            </Menu.Item>
            <Menu.Item key="myrecord" icon={<MailOutlined />} className="shopping-navi-button">
                购买记录
            </Menu.Item>
            
            </Menu>
        </div>
        <div>
         
        </div>
           
        </div>
     
)
}
}