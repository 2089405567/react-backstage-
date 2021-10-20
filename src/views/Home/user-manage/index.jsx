import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import axios from 'axios';
// 函数式组件中组件名大写
export default function Index () {

  const [dataSource, setdataSource] = useState([]);
  // 生命周期
  useEffect(() => {
    axios.get("http://localhost:3000/rights").then(res => {
      setdataSource(res.data)
      console.log(res.data)
    })
  }, [])
  //表头项 不变
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '管理项',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '路径',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '操作',
      dataIndex: 'grade',
      key: 'grade',
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}
