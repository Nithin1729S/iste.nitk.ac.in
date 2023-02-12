import logo from './credit2.jpg';

const project2 = {
	id: 2,
	oneline:
		'Conducting a business case study on IKEA using business, operation, strategic, marketing and quantiative analysis frameworks',
	// copy the abstract here
	logo: logo,
	name: 'IKEA: A Business Case Study', // replace the name here
	imgUrl: [],
	members: [
		'Ankit Stephen Thomas',
		'Rohaan Sunil',
		'Ojas Agrawal',
		'Harsha Satija',
		'Matcha Nitin',
		'Akshat Raj',
		'Solayappan Arunachallam',
	], // add both mentors and mentees here, each name has to under quotes
	description: {
		aim: (
			<div>
				Conducting a business case study on IKEA using business, operation,
				strategic, marketing and quantiative analysis frameworks
			</div>
		),
		des: (
			<div>
				In this project we have conducted a business analysis that included a
				PESTLE, McKinsey 7S Strategy analysis. The operation analysis included a
				business model and value proposition canvas, IKEA's digital dominance,
				its controversies, challenges and failures. In the marketing analysis we
				studied the 'Buy with your Time' and 'My Son' campaigns on certain
				parameters. The strategy analysis included a Porter's 5 forces, 5C and
				VRIO analysis. The quantiative analysis included a coherent study of
				IKEA's ba;ance sheet from FY'15-FY'20 and using Google Data Studio,
				graphs, plots and charts were pictorially reporesented to draw
				inferences.
			</div>
		),
		res: (
			<div
				style={{
					paddingBottom: '2%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{
					<iframe
						src="https://drive.google.com/file/d/1Vj4DZdYtoYwh6vuCn4XMOGS1Vh_Blkq1/preview"
						width="640"
						height="480"
						allow="autoplay"
					></iframe>
				}
			</div>
		),
	},
};
export default project2;
