import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/project.module.css';
import logo from '../Assets//crypt.jpg';
const ProjectContent = ({ projectData, sig }) => {
	
	var desc = projectData.oneline;
	if (typeof desc === 'undefined') {
		desc = 'Description.';
	}
	let renderingTags = null;
	if (projectData.tags)
		renderingTags = projectData.tags
			.slice(0, 6)
			.map((item) => <div key={item}>{item}</div>);
	return (
		<div className={`${styles.main}`} id={projectData.id}>
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
				<div className={styles.tagContainer}>{renderingTags}</div>
				<div className={styles.desc}>{desc}</div>
				<div className={styles.buttonContent}>
					<Link
						to={`/expoPage/${sig.concat(projectData.id)}`}
						className=""
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};
export default ProjectContent;
