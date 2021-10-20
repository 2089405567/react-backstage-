import React from 'react'
import { Route, Switch } from 'react-router'
import { Layout, Breadcrumb } from 'antd';
// 导航栏
import TopHeader from '../../components/TopHeader';
// 侧边栏
import SideMenu from '../../components/SideMenu/SideMenu';
import Nopermission from '../Home/Nopermission/Nopermission';
import User from '../Home/user/index';
import UserManage from '../Home/user-manage'
import RightList from '../Home/right-manage/RightList'
import RoleList from '../Home/right-manage/RoleList'
import './index.sass'
const { Content, Footer, } = Layout;
export default function NewHome () {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu></SideMenu>
        <Layout className="site-layout">
          <TopHeader></TopHeader>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route path="/home" component={User}></Route>
                {/* 用户管理 */}
                <Route path="/user-manage" component={UserManage}></Route>
                {/* 角色管理 */}
                <Route path="/right-manage/role/list" component={RightList}></Route>
                <Route path="/right-manage/rigth/list" component={RoleList}></Route>
                <Route from="/" to="/home" exact></Route>
                <Route path="*" component={Nopermission}></Route>
              </Switch>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    </div>
  )
}
