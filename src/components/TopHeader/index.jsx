import React from 'react'
import { Layout, Dropdown, Menu, Avatar } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'

const { Header } = Layout
export default function index () {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );
  return (
    <Header className="site-layout-background" style={{ padding: 0 }} >
      {/* 下拉列表 */}
      <div style={{ float: "right", paddingRight: "12px" }}>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} >
            你好!张三
            <DownOutlined />
            <Avatar size="large" icon={<UserOutlined />} style={{ marginLeft: "12px" }} />
          </a>
        </Dropdown>
      </div>
    </Header>
  )
}
