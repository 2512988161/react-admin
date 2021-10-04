import React, {Component} from 'react'
import './manage.less'
import logo from './images/logo.svg'
import help from './images/帮助.svg'
import messag from './images/消息.svg'
import shop from './images/购买.svg'
import me from './images/me.png'
import userimg from './images/用户.svg'


export default class Manage extends Component {
render () {
return (
    <div className="manage">
        <header className="manage-headerl">
                <img src={logo} alt='logo' size='6px'/>
                <h1>颌面部智能定点测量系统 </h1>
                
        </header>
        <div className="manage-headerr">
        <img src={help} alt='help' size='20px'/>
        <a className="guide" href="https://sm.ms/image/mMuaiIPnstLbJj1">帮助</a>
        <img src={messag} alt='messag' size='20px'/>
        <div className="guide">消息</div>
        <img src={shop} alt='shop' size='20px'/>
        <div className="guide">购买</div>
        <img src={userimg} alt='userimg' size='20px'/>
        <a className="guide" href="https://baidu.com">用户</a>
        </div>

        <div className="">

        </div>

    </div>
)
}
}