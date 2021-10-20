//应用的根组件
import React,{Component} from "react"//只要定义组件必须引入
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"
import Manage from "./pages/manage/manage"
import Fmanage from "./pages/fmanage/fmanage"
import Shopping from "./pages/shopping/shopping"
import Userinfo from "./pages/userinfo/userinfo"

export default class App extends Component{

    render(){
        return(
            <BrowserRouter>
            <Switch>//只匹配其中一个
            <Route path='/login' component={Login}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/manage' component={Manage}/>
            <Route path='/fmanage' component={Fmanage}/>
            <Route path='/shopping' component={Shopping}/>
            <Route path='/userinfo' component={Userinfo}/>

            </Switch>
            </BrowserRouter>
        )
    }
}

