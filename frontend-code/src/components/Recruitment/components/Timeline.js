import React from 'react';
import '../css/Timeline.css';
const Timeline = ({rounds}) => {
	const listItems = rounds.map((round, index) => {
		const date = new Date(round.date_time).toDateString().substring(0,11);
		return (
			<li key={index}>
				<span className="timeline-point"></span>
				<span className="date">{date}</span>
				<p>{round.name}</p>
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

export default Timeline;
