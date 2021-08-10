import React, { useState } from 'react';
import { questions } from '../../../dummyData';
import SingleQuestion from './Question';

const FAQ = () => {
	//const [questions, setQuestions] = useState(data)
	//console.log(questions);
	return (
		<div className="container">
			<h3>FAQ</h3>
			<section className="info">
				{questions.map((question) => {
					console.log(question);
					return <SingleQuestion key={question.id} {...question} />;
				})}
			</section>
		</div>
	);
};

export default FAQ;
