import React, {Component} from 'react'
import {Layout, Table } from 'antd';
 
const { Header, Content } = Layout;
 
const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
const columns = [
{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
},
{
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
},
{
    title: '住址',
    dataIndex: 'address',
    key: 'address',
},
];
 
class Admin extends React.Component{
    render(){
        return (
            <Layout>
                <Header>
                    <div style={{lineHeight:'64px', fontSize:"20px", color:"white",textAlign:"center"}}> 
                        拉布拉卡 - 卡片管理系统
                    </div>
                </Header>
 
                <Content > {/* style={{"border":"solid red"}} */}
                    <Table dataSource={dataSource} columns={columns} />;
                </Content>
            </Layout>
        );
    }
}
 
export default Admin;