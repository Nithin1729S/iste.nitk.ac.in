import React, { Component } from 'react';
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'

import { FlexContainerCentered } from '../components/UI/FlexContainers';
class Home extends Component {

  render() {
    let Container = styled(FlexContainerCentered)`
      margin-top: 5%; `;
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
}

export default Home;
