import React from "react";
import styles from "../Styles/Score.module.css";

const Score = (props) => {
    return (
        <div className={styles.container}>
            <div>Score: {props.score}</div>
        </div>
    );
}

export default Score;
