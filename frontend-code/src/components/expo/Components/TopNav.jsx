import React from 'react';

import styles from '../css/topNav.module.css';
import logo from "../Assets/istelogo.png";

import TopButton from './TopButton';
const ProjectNav = ({ handleClick, sig, data }) => {
	return (
		<div className={`${styles.main}`}>
			<div className={`${styles.head}`}>
			<div className={`${styles.header}`}>{sig}</div>
			{/* <div className={`${styles.slash}`}></div> */}
			<div className={`${styles.logo}`}>
						<a
                            href="/"
                            style={{
                                backgroundColor: "transparent",
                            }}
                        >
                            <img
                                src={logo}
                                width="100"
                                height="100"
                                style={{ float: "right", marginRight: "5%" }}
                                alt="ISTE Logo"
                            />
                        </a>
			</div>
			</div>
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
