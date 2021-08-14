import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import styles from './css/Question.module.css';

function Question(data) {
	const [expanded, setExpanded] = useState(data.open);
	
	return (
		<div className="container row">
			<header>
				<h4 onClick={() => setExpanded(!expanded)} className="question-title">
					<div className="col l11 s10">{data.question}</div>

					<div
						className={`col l1 s2 center valign-wrapper ${styles.arrowButtonContainer}`}
					>
						<i
							style={{ float: 'right' }}
							onClick={() => setExpanded(!expanded)}
						>
							<div className={styles.arrowButton}>
								{expanded ? <FaArrowUp /> : <FaArrowDown />}
							</div>
						</i>
					</div>
				</h4>
			</header>
			<div
				className="col s12 l12 flow-text"
				style={{ paddingLeft: '3%' }}
				onClick={() => setExpanded(!expanded)}
			>
				{expanded && (
					<h5
						style={
							({ color: '#1a237e' },
							{ fontSize: '2em' },
							{ fontWeight: 'lighter' })
						}
					>
						{data.answer}
					</h5>
				)}
			</div>
		</div>
	);
}

export default Question;
