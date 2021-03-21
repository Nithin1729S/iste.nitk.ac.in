import React from "react";
import { Link } from "react-scroll";

import styles from "../css/topNav.module.css";
import logo from "../Assets/crypt.jpg";
import { offsetCoefficient } from "../Assets/constants";
const TopButton = ({ isActive, handleClick, name }) => {
    const projectClick = () => {
        handleClick(name);
    };
    return (
        <div
            className={`${styles.navElement} ${
                isActive ? styles.active : null
            }`}
        >
            <Link
                to={"1"}
                offset={window.innerHeight * offsetCoefficient}
            >
                <img src={logo} alt="" onClick={projectClick} />
            </Link>
            <h2 className={styles.buttonHeader}>{name}</h2>
        </div>
    );
};
export default TopButton;
