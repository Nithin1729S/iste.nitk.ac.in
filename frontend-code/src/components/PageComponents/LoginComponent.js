import React from "react";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";

import styles from "../../css/login.module.css";
import { baseRequest } from "../../constants";
class LoginComponent extends React.Component {
    state = { username: "", password: "", errorMessage: "" };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.username === "") {
            this.setState({ errorMessage: "Empty username is not valid" });
        } else if (this.state.password === "") {
            this.setState({ errorMessage: "Empty password is not valid" });
        } else {
            const user = {
                username: this.state.username,
                password: this.state.password,
            };
            const { history } = this.props;
            baseRequest
                .post(`/account/get_auth_token/`, user)
                .then((res) => {
                    const cookie = new Cookies();
                    cookie.set("AuthToken", res.data.token, { path: "/" });
                    cookie.set("firstName", res.data.first_name, { path: "/" });
                    history.push("/");
                    history.go(0);
                })
                .catch(() => {
                    this.setState({
                        errorMessage: "incorrect credentials, please try again",
                    });
                });
        }
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
        const cookie = new Cookies();
        if (cookie.get("firstName") !== undefined) {
            const { history } = this.props;
            alert("logout to login again");
            history.push("/");
            return null;
        }
        return (
            <div className="container">
                <div className={`row center ${styles.main}`}>
                    <div className="col l6 offset-l3 m6">
                        <div className="card">
                            <div className="card-content black-text">
                                <span className="center card-title">
                                    Member Login
                                </span>
                                <form onSubmit={this.handleSubmit}>
                                    <p>{this.state.errorMessage}</p>
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
                                                        autoFocus={true}
                                                        id="id_username"
                                                        className={styles.input}
                                                        value={
                                                            this.state.username
                                                        }
                                                        onChange={
                                                            this.handleInput
                                                        }
                                                    />
                                                    <label
                                                        className={styles.label}
                                                    >
                                                        Username
                                                    </label>
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
                                                        value={
                                                            this.state.password
                                                        }
                                                        onChange={
                                                            this.handleInput
                                                        }
                                                    />
                                                    <label
                                                        className={styles.label}
                                                    >
                                                        Password
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="btn waves-effect waves-light"
                                        type="submit"
                                    >
                                        Submit
                                        <i className="material-icons right">
                                            send
                                        </i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(LoginComponent);
