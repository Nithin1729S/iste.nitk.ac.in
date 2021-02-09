import React from "react";

import styles from "../../css/login.module.css";
class LoginComponent extends React.Component {
  state = { username: "", password: "", errorMessage: "" };
  handleSubmit = () => {
    if (this.state.username === "") {
      this.setState({ errorMessage: "Empty username is not valid" });
    } else if (this.state.password === "") {
      this.setState({ errorMessage: "Empty password is not valid" });
    }
    //TODO send api request to login and return message appropriately
    else console.log(`${this.state.username} ${this.state.password}`);
  };
  handleInput = (e) => {
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    }
    if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  };
  render() {
    return (
      <div className="container">
        <div className={`row center ${styles.main}`}>
          <div className="col l6 offset-l3 m6">
            <div className="card">
              <div className="card-content black-text">
                <span className="center card-title">Member Login</span>
                <>
                  <p>{this.state.errorMessage}</p>
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="8kfL0ZLEjHpvJ6rg8esyUvgmytBq43mmodsOLJxPON1tf9mjZslrzsmTBotkJseb"
                  />
                  <div className="row">
                    <div className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <i
                            className={`form-icon material-icons prefix ${styles.i}`}
                          >
                            person
                          </i>
                          <input
                            type="text"
                            name="username"
                            autoFocus=""
                            id="id_username"
                            className={styles.input}
                            value={this.state.username}
                            onChange={this.handleInput}
                          />
                          <label className={styles.label}>Username</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <i
                            className={`form-icon material-icons prefix ${styles.i}`}
                          >
                            lock
                          </i>
                          <input
                            type="password"
                            name="password"
                            required=""
                            id="id_password"
                            className={styles.input}
                            value={this.state.password}
                            onChange={this.handleInput}
                          />
                          <label className={styles.label}>Password</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn waves-effect waves-light"
                    onClick={this.handleSubmit}
                  >
                    Submit
                    <i className="material-icons right">send</i>
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginComponent;
