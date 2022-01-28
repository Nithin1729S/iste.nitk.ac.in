import React from "react";
import styles from "../Styles/HeartBar.module.css";

import Heart from "./Heart";

class HeartBar extends React.Component {
    render() {
        let hearts = []
        for (let i = 0; i < this.props.lives; i++)
            hearts.push(<Heart key={i}/>);
        return (
            <div className={styles.heartInfo}>
                Lives
                <div className={styles.heartBar}>
                    {hearts}
                </div>
            </div>
        );
    }
}

export default HeartBar;
