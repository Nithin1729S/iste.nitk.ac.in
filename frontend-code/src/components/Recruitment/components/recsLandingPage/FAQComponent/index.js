import React from 'react';
import SingleQuestion from './Question';
import TitleWithLine from '../../../../RenderingComponents/TitleWithLine';

const FAQ = ({questions}) => {
	//const [questions, setQuestions] = useState(data)
	//console.log(questions);
	return (
		<div className="container">
			<TitleWithLine title="Frequently Asked Questions" />
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
