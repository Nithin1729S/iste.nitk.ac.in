import React,{useEffect} from 'react';
import { constant, gmeets, furContent } from '../Assets/constants';
import styles from '../css/descPage.module.css';
import { Link } from 'react-router-dom';

const DescContent = ({ sn, id }) => {
	useEffect(() => {
		return () => {
			// window.alert("unmounted")	
			window.location.reload()
		}
	})
	let arr = constant[sn],
		garr = gmeets[sn],
		gFur = furContent[sn],
		index = 0,
		curProj = {},
		curmeet = {},
		curFur = {};
	//Dummy address
	// let imgAddr =
	// 	'https://drive.google.com/file/d/151fRJsNFIIjefxK9x_MkoTHBKFLcMzNh/preview';
	for (index = 0; index < arr.length; index++) {
		if (arr[index].id === id) {
			curProj = arr[index];
			curmeet = garr[index].meetLink;
			// curFur = gFur[index].fur;
			break;
		}
		if (id > arr.length) {
			curProj = arr[0];
			curmeet = garr[0].meetLink;
			// curFur = gFur[0].fur;
		}
	}

	// For heading components
	var comp = <div>No Content</div>;
	if (typeof curProj.description['aim'] === 'object') {
		let content = ['aim', 'des', 'res', 'con'];
		const titleObject = {
			aim: 'Aim',
			des: 'Description',
			res: 'Report/Results',
			// con: 'Conclusion and Future work',
		};
		comp = content.map((item, index) => {
			let inter = curProj.description[item];
			const title = titleObject[item];
			if (!inter) return null;
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

	//For further reading section
	// var furComponent = <></>;
	// if (!(typeof curFur === 'undefined' || curFur === '')) {
	// 	furComponent = (
	// 		<>
	// 			<div className={styles.subheading}>
	// 				<div className={styles.subheadingtext}>Further Reading</div>
	// 			</div>
	// 			<div className={styles.description}>
	// 				Visit{' '}
	// 				<a
	// 					className={styles.meet}
	// 					href={curFur}
	// 					target="_blank"
	// 					rel="noreferrer"
	// 				>
	// 					this link
	// 				</a>{' '}
	// 				to view a GitHub repo or a full report to get the whole picture!
	// 			</div>
	// 		</>
	// 	);
	// }

	//Return function
	return (
		<div className={styles.main}>
			<div className={styles.card}>
				<Link to={`/expo/`} className="waves-light btn-small btnColor">
					Go Back
				</Link>
				<div className={styles.heading}>{curProj.name}</div>
				<div className={styles.headingSub}>
					{sn.charAt(0).toUpperCase() + sn.slice(1)} | 2021
				</div>

				{/* <div className={styles.subheading}>
					<div className={styles.subheadingtext}>Images</div>
				</div>
				<div className={styles.imgDiv}>
					<img src={imgAddr} alt="Punisher" className={styles.imgSize}></img>
				</div> */}

				{/* <div className={styles.subheading}>
					<div className={styles.subheadingtext}>Meet link</div>
				</div>
				<div className={styles.description}>
					Visit{' '}
					<a className={styles.meet} href={curmeet}>
						this link
					</a>{' '}
					to join a Google meet and interact live with the people who worked on
					this project!{' '}
				</div> */}
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
				{/* {furComponent} */}
				{images}
			</div>
		</div>
	);
};
export default DescContent;
