import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
    return(
        <div className="HomePage">
            <h1>IronProfile</h1>
            <p>Today we will create an app with au authorisation, adding  some cool styles!</p> 
                <Link to="/SignUp">
                    <button>Sign Up</button>
                </Link>
            

                <Link to="/LogIn">
                    <button>Log In</button>
                </Link>
                
        </div>
    )
}


export default HomePage;