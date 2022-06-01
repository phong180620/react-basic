import React from "react";
import './Nav.scss'
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom"


class Nav extends React.Component {

    render() {

        return (
            <div className="topnav">

                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active"  >
                    Todos
                </NavLink>
                <NavLink to="/about" activeClassName="active" >
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active" >
                    Users
                </NavLink>
                {/* <a class="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/about">About</a> */}


            </div>
        )
    }

}

export default Nav;