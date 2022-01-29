import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

 
class Homepage extends Component {
 
  render() {
    return(
        <div className="Homepage">
            <img src="background" alt="background image"/>
            <h1>IronProfile</h1>
            <h3>Today we will create an app with authoritation, adding some cool styles!</h3>
            <div className="CTA">
                <Link to={'/signup'}>Sign Up</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    )
  }
}
 
export default Homepage;