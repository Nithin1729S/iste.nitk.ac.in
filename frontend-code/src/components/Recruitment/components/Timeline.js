import React from 'react';
import '../css/Timeline.css';
const Timeline = (props) => {
	const abc = props.rounds;
	const listitems = abc.map((todo, index) => {
		return (
			<li key={index}>
				<span className="timeline-point"></span>
				<span className="date">{todo.date}</span>
				<p>{todo.roundName}</p>
			</li>
		);
	});
	return (
		<div className="mainz">
			<section className="timeline">
				<div className="timeline-line">
					{/* <span className="timeline-innerline"></span> */}
				</div>
				<ul>{listitems}</ul>
			</section>
		</div>
	);
};

export default Timeline;
