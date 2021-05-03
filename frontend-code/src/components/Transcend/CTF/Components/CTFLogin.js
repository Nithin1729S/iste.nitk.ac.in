import React from "react";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";

import styles from "../css/CTFLogin.module.css";
import { baseRequest } from "../../../../constants";
class CTFLoginComponent extends React.Component {
    state = { username: "", password: "", errorMessage: "" };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.username === "") {
            this.setState({ errorMessage: "Empty username is not valid" });
        } else if (this.state.password === "") {
            this.setState({ errorMessage: "Empty password is not valid" });
        } else {
            const user = new FormData();
            user.append("username", this.state.username);
            user.append("password", this.state.password);
            const { history } = this.props;
            baseRequest
                .post(`/ctf/login/`, user)
                .then((res) => {
                    console.log(res.data);
                    const cookie = new Cookies();
                    cookie.set("teamId", res.data.teamId, { path: "/" });
                    cookie.set("teamName", this.state.username, { path: "/" });
                    history.push("/transcend/charge");
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
        return (
            <div className="container">
                <div className={`row center ${styles.main}`}>
                    <div className="col l6 offset-l3 m6">
                        <div className="card">
                            <div className="card-content black-text">
                                <span className="center card-title">
                                    Team Login
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
                                                        Team Name
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
                                        className="btn indigo dark"
                                        type="submit"
                                    >
                                        Login
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

export default withRouter(CTFLoginComponent);
