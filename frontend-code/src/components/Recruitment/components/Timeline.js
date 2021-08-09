import React from 'react';
import '../css/Timeline.css';

const Timeline = ({ rounds }) => {
	const listItems = rounds.map((round, index) => {
		let date = formattedDate(new Date(round.date_time));

		return (
			<li key={index}>
				<span className="timeline-point"></span>
				<span className="date">{date}</span>
				<span className="roundName">{round.name}</span>
			</li>
		);
	});
	return (
		<div className="mainz">
			<section className="timeline">
				<div className="timeline-line">
					{/* <span className="timeline-innerline"></span> */}
				</div>
				<ul>{listItems}</ul>
			</section>
		</div>
	);
};

function formattedDate(date) {
	let year = date.getFullYear();
	let month = (1 + date.getMonth()).toString().padStart(2, '0');
	let day = date.getDate().toString().padStart(2, '0');
	return day + '-' + month + '-' + year;
}

export default Timeline;
