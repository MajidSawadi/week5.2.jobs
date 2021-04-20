
import { Switch ,Route, Link} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Test from './Components/Test'
import Login from './Components/Login'
import Home from './Components/Home'
import JobDetail from './Components/JobDetail'
import JobList from './Components/JobList'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/test" component={Test}/>
      <Route path="/login" component={Login}/>
      <Route path="/" exact component={Home}/>
      <Route path="/jobs/:id" component={JobDetail}/>
      <Route path="/jobs" component={JobList}/>
      </Switch>
    </div>
  );
}

export default App;
