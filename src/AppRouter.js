import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <div>Home</div>
const About = () => <div>Home</div>
const Users = () => <div>Home</div>

const AppRouter = () => {
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                </ul>
            </nav>


            <Route path="/" exact component={Index}></Route>
            <Route path="/about"  component={About}></Route>
            <Route path="/users"  component={Users}></Route>
        </div>
    </Router>
}


export default AppRouter