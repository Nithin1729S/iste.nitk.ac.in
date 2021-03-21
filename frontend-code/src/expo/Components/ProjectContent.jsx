import React from "react";

import styles from "../css/project.module.css";
import logo from "../Assets//crypt.jpg";
const ProjectContent = ({ projectData }) => {
    return (
        <div className={styles.main} id={projectData.id}>
            <div className={styles.imageContent}>
                <img alt="project" src={logo} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.header}>{projectData.name}</h2>
            </div>
        </div>
    );
};
export default ProjectContent;
