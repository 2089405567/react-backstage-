import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Setstarte from './components/setSate'
import Fun from './pages/Fun'
function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Setstarte}></Route>
        <Route path="/Fun" component={Fun}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
