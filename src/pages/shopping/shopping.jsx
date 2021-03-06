import React, {Component} from 'react'
import './shopping.less'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

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

import Userinfo from '../userinfo/userinfo'
import Manage from '../manage/manage'
import { List,Card,Button} from 'antd';
import { Descriptions, Badge } from 'antd';
import { DatePicker, Space ,Popover,Checkbox} from 'antd';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import wechat from '../images/wechat.png'
const { RangePicker } = DatePicker;
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const content = (
  <div className="wechat">
    <img src={wechat} alt='wechat' width='300'/>
  </div>
);
const text = <span>要获取帮助,请扫描下方二维码加我微信</span>;
const onSearch = value => console.log(value);
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const { Meta } = Card;
const tabListNoTitle = [
    {
      key: 'article',
      tab: '购买产品',
    },
    {
      key: 'app',
      tab: '我的服务',
    },
    {
      key: 'project',
      tab: '购买记录',
    },
  ];
  const data = [
    {
      title: '产品名称',
    },
    {
      title: '剩余次数',
    },
    {
      title: '已用次数',
    },
    {
      title: '有效期',
    },
  ];
  const contentListNoTitle = {
    article: <p>
<p className="anypruc">
    <Checkbox>3980/年
<Card className="prucs"
    hoverable
    // width="20"
    // style={{ width: 160 }}
    cover={<img alt="skull" src={skull} />}
  >

    <Meta title="侧位片投影测量" description="
    自动定点600次
    影像云储存600张
    侧位片测量分析
    侧位片重叠" />
  </Card>
 </Checkbox>
<Checkbox> 3980/年
  <Card className="prucs"
    hoverable
    
    // style={{ width: 160},{size:1000}}
  cover={<img alt="face" src={face} />}
  >
    <Meta title="面型分析" description="自动定点600次
    影像云储存600张
    面型分析
    侧位片、侧面照重叠" />
  </Card>
  </Checkbox>
 <Checkbox>3980/年
  <Card className="prucs"
    hoverable
    // style={{ width: 160 }}
    cover={<img alt="teeth" src={teeth} />}
  >
    <Meta title="面型分析" description="自动定点600次
    影像云储存600张
    面型分析
    侧位片、侧面照重叠"/>
  </Card>
  </Checkbox>
   <Checkbox>3980/年
  <Card className="prucs"
    hoverable
    // style={{ width:160 }}
    cover={<img alt="brain" src={brain} />}
  >
    <Meta title="面型分析" description="自动定点600次
    影像云储存600张
    面型分析
    侧位片、侧面照重叠" />
  </Card></Checkbox>
  <Checkbox>3980/年
  <Card className="prucs"
    hoverable
    // style={{ width:160 }}
    cover={<img alt="sharptooth" src={sharptooth} />}
  >
    <Meta title="面型分析" description="自动定点600次
    影像云储存600张
    面型分析
    侧位片、侧面照重叠"/>
  </Card></Checkbox>
  </p>
  <Button type="primary">购买</Button>
    </p>
    ,


    app: <p className="myservice">
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>的期望顶起顶起顶起我</Card>
      </List.Item>
    )}
  />
    </p>,


    project: <p>
       <Space direction="vertical" size={12}>
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
  <Space direction="vertical">
  <Search
      placeholder="请输入搜索内容"
      allowClear
      enterButton="搜索"
      size="large"
      onSearch={onSearch}
    />
  </Space>
  <Descriptions title="" layout="vertical" bordered>
    <Descriptions.Item label="序号">1</Descriptions.Item>
    <Descriptions.Item label="订单名称">scu</Descriptions.Item>
    <Descriptions.Item label="订单号">202104240001</Descriptions.Item>
    <Descriptions.Item label="支付金额">4396</Descriptions.Item>
    <Descriptions.Item label="支付方式">微信</Descriptions.Item>
    <Descriptions.Item label="订单创建日期">2021-04-24 18:00:00</Descriptions.Item>
  </Descriptions>
    </p>,
  };

export default class Shopping extends Component {
    state = {
        current: 'products',
      };
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
      onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
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
        <div className="shopping-navi">
        
        <Card

        
          // style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>


        </div>
        
           
        </div>
     
)
}
}