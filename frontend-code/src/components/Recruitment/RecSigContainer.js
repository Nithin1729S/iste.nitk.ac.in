import React from 'react';

import RecSigCard from './RecSigCard';

import '../../css/sigCards.css';
import { baseUrl } from '../../constants';

const RecSigCards = (props) => {
	const renderedList = props.cardList.map(({ name, avatar, summary }) => {
		const isSig = !Array.isArray(summary);
		let summaryText = isSig
			? summary
			: summary.reduce((allSmps, item) => `${item}\n${allSmps}`, '');

		const linkOuter = '/recs/';
		return (
			<RecSigCard
				key={name}
				name={name}
				avatar={`${baseUrl}${avatar}`}
				summary={summaryText}
				buttonLink={`${linkOuter}${name}`}
			/>
		);
	});

	return <div className="row">{renderedList}</div>;
};

export default RecSigCards;
