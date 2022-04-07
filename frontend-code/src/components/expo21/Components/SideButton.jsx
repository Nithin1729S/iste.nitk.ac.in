import React from "react";
import { Link } from "react-scroll";

import styles from "../css/side.module.css";
import logo from "../Assets/crypt.jpg";
import { offsetCoefficient } from "../Assets/constants";
const SideButton = ({
    name,
    isLeft,
    handleClick,
    isActive,
    projectId,
    itemId,
    logoSide,
}) => {
    const clickHandler = () => {
        handleClick(itemId);
    };
    return (
        <div
            className={`${styles.main} ${isLeft ? styles.left : styles.right} ${
                isActive ? styles.active : null
            }`}
        >
            <Link
                className={styles.link}
                to={itemId + ""}
                smooth
                duration={
                    500 *
                    (projectId > itemId
                        ? projectId - itemId
                        : itemId - projectId)
                }
                offset={window.innerHeight * offsetCoefficient}
                onClick={clickHandler}
                ignoreCancelEvents
            >
                <img src={logoSide === "" ? logo : logoSide} alt="" />
                <h4>{name}</h4>
            </Link>
        </div>
    );
};
export default SideButton;
