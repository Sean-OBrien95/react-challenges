import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";

class NavBarForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true,
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false,
        })
        console.log(this)
    }

    render() {
        return (
            <div className = {css.NavBar}>
                <h1>Gallery</h1>
                <NavBarChild
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignIn={this.handleSignIn}
                    handleSignOut={this.handleSignOut}
                 />
            </div>
        )
    }
}

export default NavBarForm