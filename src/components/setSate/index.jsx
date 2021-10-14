import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class index extends Component {
  state = {
    count: 0
  }
  add = () => {

    const { count } = this.state
    // setState 调用的异步的
    this.setState({
      count: count + 1
    }, () => {
      // 获取最新的值
      console.log(this.state.count)
    })

    // setState 可以传递函数


  }
  render () {
    return (
      <div>
        {
          this.state.count
        }

        <button onClick={this.add}>按钮</button>
        <Link to="/Fun">页面跳转</Link>
      </div>
    );
  }
}

export default index;