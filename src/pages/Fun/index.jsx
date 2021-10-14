import React from 'react';
// 引入样式
import style from './index.module.scss'
function Index () {


  // 创建 容器
  const myRef = React.useRef();
  const [count, setCount] = React.useState(0);
  // 函数中的生命周期钩子函数
  React.useEffect(() => {
    // alert("函数中的生命周期钩子调用了")
    console.log("@");
    show();
  }, [count])
  // 函数中创建状态
  function add () {
    setCount(count + 1)
  }

  function show () {
    console.log(myRef.current)
  }
  return (
    <div>
      <h2>{count}</h2>
      <div ref={myRef}></div>
      <div className={style.title}>

      </div>
      <button onClick={add}>函数组件加加</button>
    </div>
  )
}
export default Index;