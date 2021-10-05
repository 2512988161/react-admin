import React, {Component} from 'react'
import { Card } from 'antd';
import './manage.less'
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
import Shopping from '../shopping/shopping'
const { Meta } = Card;

export default class Manage extends Component {
render () {
return (
    <div className="manage">
        <header className="manage-headerl">
                <img src={logo} alt='logo' size='6px'/>
                <a href="/manage">颌面部智能定点测量系统 </a>
                
        </header>
        <div className="manage-headerr">
        
        <a className="guide" href="https://sm.ms/image/mMuaiIPnstLbJj1"><img src={help} alt='help' size='20px'/></a>
        <a className="guide" href="https://sm.ms/image/mMuaiIPnstLbJj1">帮助</a>
        <a className="guide"><img src={messag} alt='messag' size='20px'/></a>
        <a className="guide">消息</a>
        <a className="guide" href='/shopping'><img src={shop} alt='shop' size='20px' /></a>
        <a className="guide" href='/shopping'>购买</a>
        <a className="guide" href="/userinfo"><img src={userimg} alt='userimg' size='20px'/></a>
        <a className="guide" href="/userinfo">用户</a>
        </div>
        <div className="manage-funcs">
    <a href="/userinfo" className="manage-funcs-card"><Card
        
        hoverable
        style={{ width: 180 }}
        cover={<img alt="example" src={skull} />}>
        <Meta title="侧位片投影测量" description="测量侧位片投影" />
    </Card></a>
    <a href="/userinfo" className="manage-funcs-card">
    <Card
        className="manage-funcs-card"
        hoverable
        style={{ width: 180 }}
        cover={<img alt="example" src={face} />}>
        <Meta title="面型分析" description="分析面型" />
    </Card></a>
    <a href="/userinfo" className="manage-funcs-card">
    <Card
        className="manage-funcs-card"
        hoverable
        style={{ width: 180 }}
        cover={<img alt="example" src={teeth} />}>
        <Meta title="磨牙定点测量" description="测量磨牙定点" />
    </Card></a>
    <a href="/userinfo" className="manage-funcs-card">
    <Card
        className="manage-funcs-card"
        hoverable
        style={{ width:  180}}
        cover={<img alt="example" src={brain} />}>
        <Meta title="三维头影测量" description="测量三维投影" />
    </Card></a>
    <a href="/userinfo" className="manage-funcs-card">
    <Card
        className="manage-funcs-card"
        hoverable
        style={{ width: 180 }}
        cover={<img alt="example" src={sharptooth} />}>
        <Meta title="尖牙阻生定点测量" description="测量尖牙阻生定点" />
    </Card></a>
    
    </div>
    </div>
    
)
}
}