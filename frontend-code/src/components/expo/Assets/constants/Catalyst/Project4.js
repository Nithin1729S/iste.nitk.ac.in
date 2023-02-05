// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './project expo_Vfinal_catalyst4.png';

const project4 = {
	id: 4,
	oneline:
		'The aim of this study is modeling of biokinetics of anaerobic digestion',
	// copy the abstract here
	logo: logo,
	name: 'Modelling and Simulation for Biogas Production from Organic Waste', // replace the name here
	imgUrl: [],
	members: [
		'Dhruv Banerjee',
		'Rahul Maheshwari',
		'Rugved Pande',
		'Radhika Rathi',
		'Vinayak Vishnu Nayak',
	], // add both mentors and mentees here, each name has to under quotes
	description: {
		aim: (
			<div>
				The aim of this study is modeling of biokinetics of anaerobic digestion
			</div>
		),
		des: (
			<div>
				This project models the anaerobic digestion process used for the
				production of biogas from biomass. The search for appropriate models to
				be use in control theory is now a major priority for optimizing the
				fermentation process and solve important problems, such as renewable
				energy development from biodegradable organic waste.In this project, we
				present a simple mathematical model with a reduces set of state
				variables and parameters. Our kinetic model involves biological
				reactions (acidogenesis and methanogenesis) with two groups of
				microorganism.The differential equations obtained in the mass balances
				of biomass,substrate and biogas are represented in a simulink model.We
				study the plots obtained for each transfer function using PID controller
				in our model .At last this project also includes the error analysis
				using various methods.
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
						src="https://drive.google.com/file/d/1Rl6PE0uSy6M8DTQMdtaG8GMGzY64fWOO/preview"
						width="640"
						height="480"
						allow="autoplay"
					></iframe>
				}{' '}
			</div>
		),
	},
};
export default project4;
