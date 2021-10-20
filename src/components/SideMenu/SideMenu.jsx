import { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom'
// 引入axios 
import axios from 'axios';
import './index.css'
import {
  UserOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;


// 模拟数据
// const MenuList = [
//   {
//     key: "/home",
//     title: "首页",
//     icon: <UserOutlined />
//   },
//   {
//     key: "/user-manage",
//     title: "用户管理",
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: "/user-manage/list",
//         title: "用户列表",
//         icon: <UserOutlined />
//       }
//     ]
//   },
//   {
//     key: "/right-manage",
//     title: "权限列表",
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: "/right-manage/role/list",
//         title: "角色列表",
//         icon: <UserOutlined />
//       },
//       {
//         key: "/right-manage/rigth/list",
//         title: "角色列表",
//         icon: <UserOutlined />
//       }
//     ]
//   },
// ]
// 函数式组件的 传参 props
function SideMenu (props) {
  const [MenuList, setMeun] = useState([]);
  // 函数式组件生命周期函数
  useEffect(() => {
    axios.get("http://localhost:3000/rights?_embed=children").then(res => {
      setMeun(res.data)
      console.log(props.location.pathname)
    })
  }, []);

  // 权限
  const childrenPagePermission = (item) => {
    return item.pagepermisson === 1
  }
  // 渲染 renderMenu 列表
  const renderMenu = (MenuList) => {
    return MenuList.map(item => {
      // 可选链操作符 ?. 允许读取位于连接对象链深处的属性的值
      if (item.children?.length > 0 && childrenPagePermission(item)) {
        return <SubMenu key={item.key} icon={item.icon} title={item.title}>
          {renderMenu(item.children)}
        </SubMenu>
      }
      return childrenPagePermission(item) && <Menu.Item key={item.key} icon={item.icon}
        onClick={() => {
          // 引用高阶组件 完成 页面跳转·
          props.history.push(item.key)
        }}
      >{item.title}</Menu.Item>
    })
  }

  // 函数组件中定义 start
  const [collapsed] = useState(false)
  const openKeys = ["/" + props.location.pathname.split('/')[1]]
  return (
    <Sider collapsible collapsed={collapsed} >
      <div className="logo">
        后台管理系统
      </div>
      {/* 打开 菜单项  非受控组件 defaultSelectedKeys 受控组件 selectedKeys */}
      <Menu theme="dark" selectedKeys={[props.location.pathname]} defaultOpenKeys={openKeys} mode="inline">
        {renderMenu(MenuList)}
      </Menu>

    </Sider>
  )
}
export default withRouter(SideMenu);