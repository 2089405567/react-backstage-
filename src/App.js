import { Button } from 'antd';
import './App.css'
import IndexRouter from './router/index'
function App () {
  return (
    <div className="App">
      <IndexRouter></IndexRouter>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
