import React from 'react'
// 导入路由组件 路由规则
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '../views/Login';
import NewHome from '../views/Home/NewHome';
/**
 * 创建函数式组件 rfc 
 */
export default function IndexRouter () {
  return (
    <HashRouter>
      {/* 展位  精准匹配*/}
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={NewHome}></Route>
      </Switch>
    </HashRouter>
  )
}
