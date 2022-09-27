import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Login from './components/Login'
import Blackbox from './components/Blackbox'

class Obsidian extends Component {
    checkLogin = () => {
    // use localStorage to see if user is already logged in
        return !localStorage.getItem("obsidianUserInfo")

    }

    render() {
        if (this.checkLogin()) {
            return (<Login/>)
        }
        return (<Blackbox/>)
    }
}

export default withRouter(Obsidian);