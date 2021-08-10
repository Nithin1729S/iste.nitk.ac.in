import React from 'react';
import { questions } from '../../../dummyData';
import SingleQuestion from './Question';
import TitleWithLine from '../../../../RenderingComponents/TitleWithLine';

const FAQ = () => {
	//const [questions, setQuestions] = useState(data)
	//console.log(questions);
	return (
		<div className="container">
			<TitleWithLine title="FAQ" />
			<section className="info">
				{questions.map((question) => {
					// console.log(question);
					return <SingleQuestion key={question.id} {...question} />;
				})}
			</section>
		</div>
	);
};

export default FAQ;
