import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../css/registerButton.module.css";

class RegisterButton extends Component {
    render() {
        return (
            <div className="row center">
                <Link to={this.props.link}>
                    <button
                        className={`center-align waves-effect waves-light z-depth-3 btn-large ${styles.register}`}
                        style={{ backgroundColor: "var(--primaryDarker)" }}
                    >
                        REGISTER NOW !
                    </button>
                </Link>
            </div>
        );
    }
}

export default RegisterButton;
