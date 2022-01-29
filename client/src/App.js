import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import SignUp from './HomePage/SignUp';
import LogIn from './HomePage/LogIn';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/Signup" component={SignUp}/>
      <Route exact path="/Login" component={LogIn}/>
    </Switch>
      
    </div>
  );
}

export default App;
