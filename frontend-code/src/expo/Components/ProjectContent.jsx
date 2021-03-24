import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/project.module.css';
import logo from '../Assets//crypt.jpg';
const ProjectContent = ({ projectData, sig }) => {
	console.log(projectData, sig);
	var desc = projectData.oneline;
	if (typeof desc === 'undefined') {
		desc = 'Description.';
	}

	return (
		<div className={styles.main} id={projectData.id}>
			<div className={styles.imageContent}>
				<img
					alt="project"
					src={
						typeof projectData.logo === 'undefined' ? logo : projectData.logo
					}
					className={styles.image}
				/>
			</div>
			<div className={styles.content}>
				<h2 className={styles.header}>{projectData.name}</h2>
				<div>{desc}</div>
				<div className={styles.buttonContent}>
					<Link
						to={`/expo/${sig.concat(projectData.id)}`}
						className="waves-light btn-small btnColor"
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};
export default ProjectContent;
