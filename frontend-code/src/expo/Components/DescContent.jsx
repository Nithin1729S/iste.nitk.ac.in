import React from 'react';
import { constant, gmeets } from '../Assets/constants';
import styles from '../css/descPage.module.css';
import { Link } from 'react-router-dom';

const DescContent = ({ sn, id }) => {
	let arr = constant[sn],
		garr = gmeets[sn],
		index = 0,
		curProj = {},
		curmeet = {};
	//Dummy address
	// let imgAddr =
	// 	'https://drive.google.com/file/d/151fRJsNFIIjefxK9x_MkoTHBKFLcMzNh/preview';
	for (index = 0; index < arr.length; index++) {
		if (arr[index].id === id) {
			curProj = arr[index];
			curmeet = garr[index].meetLink;
			break;
		}
		if (id > arr.length) {
			curProj = arr[0];
			curmeet = garr[0].meetLink;
		}
	}
	console.log(curmeet);

	// For heading components
	var comp = <div>No Content</div>;
	if (typeof curProj.description['aim'] === 'object') {
		var content = ['aim', 'res', 'meth', 'con'];
		comp = content.map((item, index) => {
			var inter = curProj.description[item];
			var title;
			if (item === 'aim') title = 'Aim';
			else if (item === 'meth') title = 'Methodology';
			else if (item === 'res') title = 'Results';
			else title = 'Conclusion and Future work';
			return (
				<>
					<div key={index} className={styles.subheading}>
						<div className={styles.subheadingtext}>{title}</div>
					</div>
					<div className={styles.description}>{inter}</div>
				</>
			);
		});
	}

	//For images
	var imgs = curProj.imgUrl;
	var images;
	if (imgs.length === 0) images = <></>;
	else {
		images = imgs.map((item, index) => {
			return (
				<>
					<iframe
						className={styles.imgSize}
						src={item}
						key={index}
						title={index}
					></iframe>
				</>
			);
		});
		images = (
			<>
				<div className={styles.subheading}>
					<div className={styles.subheadingtext}>
						Images, Screenshots and Videos
					</div>
				</div>
				<div className={styles.imgDiv}>{images}</div>
			</>
		);
	}

	//Return function
	return (
		<div className={styles.main}>
			<div className={styles.card}>
				<Link to={`/expo/`} className="waves-light btn-small btnColor">
					Go Back
				</Link>
				<div className={styles.heading}>{curProj.name}</div>
				<div className={styles.headingSub}>
					{sn.charAt(0).toUpperCase() + sn.slice(1)} | 2020
				</div>

				{/* <div className={styles.subheading}>
					<div className={styles.subheadingtext}>Images</div>
				</div>
				<div className={styles.imgDiv}>
					<img src={imgAddr} alt="Punisher" className={styles.imgSize}></img>
				</div> */}

				<div className={styles.subheading}>
					<div className={styles.subheadingtext}>Meet link</div>
				</div>
				<div className={styles.description}>
					Visit{' '}
					<a className={styles.meet} href={curmeet}>
						this link
					</a>{' '}
					to join a Google meet and interact live with the people who worked on
					this project!{' '}
				</div>

				<div className={styles.subheading}>
					<div className={styles.subheadingtext}>Members</div>
				</div>
				<div className={styles.description}>
					<ol className={styles.membersList}>
						{curProj.members.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ol>
				</div>

				{comp}

				{images}
			</div>
		</div>
	);
};
export default DescContent;
