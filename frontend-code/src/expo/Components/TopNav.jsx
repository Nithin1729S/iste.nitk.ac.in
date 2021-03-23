import React from 'react';

import styles from '../css/topNav.module.css';

import TopButton from './TopButton';
const ProjectNav = ({ projectId, handleClick, sig, data }) => {
	return (
		<div className={styles.main}>
			<h1 className={styles.header}>{sig}</h1>
			<div className={styles.content}>
				{data.map((item) => {
					return (
						<TopButton
							key={item.id}
							isActive={sig === item.name}
							handleClick={(project) => handleClick(project)}
							name={item.name}
							logoSIG={item.logo}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default ProjectNav;
