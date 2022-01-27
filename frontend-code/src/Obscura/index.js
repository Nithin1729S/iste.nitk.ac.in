import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'

import { FlexContainerCentered as Container} from '../components/UI/FlexContainers';
import Dashboard from './components/Dashboard';
class Home extends Component {
  componentDidMount() {
    //TODO : figure out how to persist footer 
    //this.props.setFooterVal("crypt")
  }
  checkLogin = () => {
    const cookie = new Cookies()
    return cookie.get('userName')
  }
  render() {
    if (this.checkLogin()) return <Dashboard />; // forwards user to Dashboard if already logged in

    return (
      <>
      <Container isColumn>
        <h3>Obscura Homepage Placeholder</h3>
        <Container isColumn style={{alignItems: 'center'}}>
          <div>
              <Link to="/obscura/instructions">
                <button class="btn btn-primary waves-effect" style={{margin:"10%"}}>Instructions</button>
              </Link>
          </div>
          <Link to="/obscura/login">
            <button class="btn btn-primary waves-effect">Login</button>
          </Link>
        </Container>
      </Container>
      </>
    )
  }
  componentWillUnmount() {
    //this.props.setFooterVal("")
  }
}

export default Home;
