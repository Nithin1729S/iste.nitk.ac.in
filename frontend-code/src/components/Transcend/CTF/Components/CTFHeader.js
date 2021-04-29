import React from "react";
import Cookie from "universal-cookie";
import { Link } from "react-router-dom";

import styles from "../css/CTFHeader.module.css";

const logoutHandler = () => {
    const cookie = new Cookie();
    cookie.remove("AuthToken");
    cookie.remove("teamName");
    window.location.reload();
};

const CTFHeader = ({ name, score }) => {
    return (
        <div className={styles.main}>
            <h3 className={styles.title}>{name}</h3>
            <h3 className={styles.score}>{score}</h3>

            <Link to="/leaderboard">
                <button className="btn waves-effect">View Leaderboard</button>
            </Link>
            <button className="btn waves-effect" onClick={logoutHandler}>
                Logout
            </button>
        </div>
    );
};
export default CTFHeader;
