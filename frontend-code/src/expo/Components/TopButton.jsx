import React from 'react';
import { Link } from 'react-scroll';

import styles from '../css/topNav.module.css';
import logo from '../Assets/crypt.jpg';
import { offsetCoefficient } from '../Assets/constants';
const TopButton = ({ isActive, handleClick, name, logoSIG }) => {
	const projectClick = () => {
		handleClick(name);
	};
	return (
		<div className={`${styles.navElement} ${isActive ? styles.active : null}`}>
			<Link to={'1'} offset={window.innerHeight * offsetCoefficient}>
				<img src={logoSIG} alt="" onClick={projectClick} />
			</Link>
			<h2 className={styles.buttonHeader}>
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</h2>
		</div>
	);
};
export default TopButton;
