import React, { Component } from 'react';
import {withRouter} from 'react-router'

//import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'

import { FlexContainerCentered as Container} from '../components/UI/FlexContainers';
import Dashboard from './components/Dashboard';
class Home extends Component {
  componentDidMount() {
    this.props.setFooterVal("crypt")
  }
  checkLogin = () => {
    // use localStorage to see if user is already logged in
    return true;
  }
  // homePage will contain the jsx to render the home-page 
  homePage = (
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
  );
  render() {
    if (!this.checkLogin()) {
      return this.homePage;
    }
    return <Dashboard setFooterVal={ this.props.setFooterVal }/>
  }

  componentWillUnmount() {
    this.props.setFooterVal("")
  }
}

export default withRouter(Home);
