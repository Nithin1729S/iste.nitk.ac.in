import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class ObscuraLogin extends Component {
  render() {
      return (
        <> 
            <h1>Login Placeholder</h1>
            <Link to='/obscura/dashboard'><button className='btn waves-effect'>Login</button></Link>
        </>
    )
  }
}

export default ObscuraLogin;
