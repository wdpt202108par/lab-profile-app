import logo from './logo.svg';
import background from '../src/oval-bg.png';

import Homepage from './components/Homepage';
import Signup from './components/Signup';



import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component = {Homepage}/>
        <Route exact path="/signup" component = {Signup}/>
      </Switch>


    </div>
  );
}

export default App;
