import React from 'react';

import RecSigCard from './RecSigCard';

import './css/sigCards.css';
import { baseUrl } from '../../../../../constants';

const RecSigCards = (props) => {
	const renderedList = props.cardList.map(({ name, avatar }) => {
		const linkOuter = '/recs/';
		return (
			<RecSigCard
				key={name}
				name={name}
				avatar={`${baseUrl}${avatar}`}
				buttonLink={`${linkOuter}${name}`}
			/>
		);
	});

	return <div className="row">{renderedList}</div>;
};

export default RecSigCards;
