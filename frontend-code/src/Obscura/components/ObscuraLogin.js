import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class ObscuraLogin extends Component {
  
  componentDidMount() {
    this.props.setFooterVal("obscura")
  }
  
  // TODO : add login page
  // once user is successfully logged in after API Request
  // store the fetched user data into localStorage

  render() {
      return (
        <> 
            <h1>Login Placeholder</h1>
            <Link to='/obscura/dashboard'><button className='btn waves-effect'>Login</button></Link>
        </>
    )
  }
  componentWillUnmount() {
    this.props.setFooterVal("")
  }
}

export default ObscuraLogin;
