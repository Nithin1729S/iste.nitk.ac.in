import React from "react";
import { Link } from "react-router-dom";

import styles from "../css/CTFHeader.module.css";

const logoutHandler = () => {
    //TODO: delete cookie for team name and token
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
