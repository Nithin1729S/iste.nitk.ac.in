import React, { Component } from 'react';
import {withRouter} from 'react-router'

//import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'
import Styles from "./css/landingpage.module.css";
import Dashboard from './components/Dashboard';
class Home extends Component {
  componentDidMount() {
    // the footer background and color can be update in css/footer.css
    this.props.setFooterVal("obscura")
  }
  checkLogin = () => {
    // use localStorage to see if user is already logged in
    return !localStorage.getItem("userInfo")
  }
  // homePage will contain the jsx to render the home-page 
  homePage = (
    <section
      className={Styles.mainSection}
    >
      <div className={`row ${Styles.btnGroup}`}>
        <div>
          <Link to="/obscura/instructions">
            <button
              className={`btn btn-primary waves-effect white-text btn-large ${Styles.instructionBtn} ${Styles.btn}`}
            >
            </button>
          </Link>
        </div>
        <div>
          <Link to="/obscura/login">
            <button
              className={`btn btn-primary waves-effect white-text btn-large ${Styles.loginBtn} ${Styles.btn}`}
            >
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
  render() {
    if (this.checkLogin()) {
      return this.homePage;
    }
    return <Dashboard setFooterVal={ this.props.setFooterVal }/>
  }

  componentWillUnmount() {
    this.props.setFooterVal("")
  }
}

export default withRouter(Home);
