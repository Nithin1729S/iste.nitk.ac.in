import React, { Component } from 'react';
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'

import { FlexContainerCentered } from '../components/UI/FlexContainers';
import Dashboard from './components/Dashboard';
class Home extends Component {
  componentDidMount() {
    //changing footer
    //this.props.setFooterVal("charge")
  }
  checkLogin = () => {
    const cookie = new Cookies()
    return cookie.get('userName')
  }
  render() {
    if (this.checkLogin()) return <Dashboard />;
    const Container = styled(FlexContainerCentered)`margin-top: 5%; `;
    return (
      <>
      <Container>
        <h3>Obscura Homepage Placeholder</h3>
      </Container>
        <Container isColumn>
          <Link to="/obscura/instructions">
            <button class="btn btn-primary waves-effect" style={{margin:"10%"}}>Instructions</button>
          </Link>
          <Link to="/obscura/login">
            <button class="btn btn-primary waves-effect">Login</button>
          </Link>
        </Container>
      </>
    )
  }
  componentWillUnmount() {
    this.props.setFooterVal("")
  }
}

export default Home;
