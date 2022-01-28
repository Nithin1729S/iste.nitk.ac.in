import { Link } from 'react-router-dom';

import styles from '../css/EventCards.module.css';

const Card = ({ title, desc, img, formLink, posIndex, isLive }) => {
	const card = {
		0: styles.cardleft,
		1: styles.cardleft,
		2: styles.cardtop,
		3: styles.cardtop,
		4: styles.cardright,
		5: styles.cardright,
	};
	const cardImg = {
		0: styles.cardimgleft,
		1: styles.cardimgleft,
		2: styles.cardimgtop,
		3: styles.cardimgtop,
		4: styles.cardimgright,
		5: styles.cardimgright,
	};

	let buttonLink = (
		<Link className={styles.cardbtnlink} to={formLink}>
			<button className={`waves-effect btn ${styles.cardbtn}`}>
				Get more details!
			</button>
		</Link>
	);

	return (
		<div className={card[posIndex]}>
			<img className={cardImg[posIndex]} src={img} alt={title} />
			<div className={styles.cardesc}>
				<h1 className="center">{title}</h1>
				<p>{desc}</p>
				{buttonLink}
			</div>
		</div>
	);
};

const EventCards = ({ EventData }) => {
	const EventCards = EventData.map(({ title, desc, img, formLink }, index) => (
		<Card
			title={title}
			img={img}
			desc={desc}
			formLink={formLink}
			posIndex={index}
		/>
	));
	return (
		<div className={styles.main}>
			<div className={styles.a}>{EventCards[0]}</div>
			<div className={styles.c}>{EventCards[1]}</div>
			<div className={styles.b}>{EventCards[2]}</div>
			<div className={styles.d}>{EventCards[3]}</div>
			<div className={styles.e}>{EventCards[4]}</div>
			<div className={styles.f}>{EventCards[5]}</div>
		</div>
	);
};
export default EventCards;
