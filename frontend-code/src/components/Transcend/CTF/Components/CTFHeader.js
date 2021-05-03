import React from "react";
import Cookie from "universal-cookie";
import { Link } from "react-router-dom";

import styles from "../css/CTFHeader.module.css";

const logoutHandler = () => {
    const cookie = new Cookie();
    cookie.remove("teamId");
    cookie.remove("teamName");
    window.location.reload();
};

const CTFHeader = ({ name, score }) => {
    return (
        <>
            <div className={styles.main}>
                <h3 className={styles.title}>Welcome, {name}</h3>

                <div className={styles.buttons}>
                    <Link to="/leaderboard">
                        <button className={`btn ${styles.button} waves-effect`}>
                            View Leaderboard
                        </button>
                    </Link>
                    <button
                        className={`btn ${styles.button} waves-effect`}
                        onClick={logoutHandler}
                    >
                        Logout
                    </button>
                </div>
            </div>
            <h3 className={styles.score}>{score}</h3>
        </>
    );
};
export default CTFHeader;
