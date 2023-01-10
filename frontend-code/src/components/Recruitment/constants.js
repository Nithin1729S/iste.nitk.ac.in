
export const sigs = [
	'Crypt',
	'Credit',
	'Catalyst',
	'Concrete',
	'Clutch',
	'Create',
	'Chronicle',
	'Charge',
];



export const questions = [
	{
		question: 'Can I apply for multiple SIGs?',
		answer:
			'Yes. You can apply for as many SIGs as you want to. Fill out the form and select the SIGs you are interested to join.',
		open: true,
	},
	// {
	// 	question: 'Does each SIG have a different recruitment procedure and do I have to fill out separate registration forms for each one?',
	// 	answer:
	// 		'Yes, each SIG has its own registration form and varied selection procedure. The form links and further details about the rounds are mentioned on our website.',
	// 	open: false,
	// },
	{
		question: 'Is there a limit to the number of SIGs you can apply for?',
		answer:
			'No, you can apply for as many SIGs as you want to. However we recommend that you be a part of only 3 SIGs to ensure that you will be able to balance your time.',
		open: false,
	},
	{
		question: 'How will I know if I am selected for the next round?',
		answer:
			'You will receive an email and a message on WhatsApp regarding your selection for each round.',
		open: false,
	},
	// {
	// 	question:
	// 		'Where can I view the details of the recruitment process for a SIG?',
	// 	answer:
	// 		'Click the respective SIG card in the above panel to view the recruitment details! \n Additionally, if you want to see details about a particular SIG, use the drop-down on the navbar!',
	// 	open: false,
	// },
	// {
	// 	question: 'Does ISTE recruit 3rd years?',
	// 	answer:
	// 		'Yes we do! We do consider exceptional 3rd year candidates as well. However, a majority of our intake will comprise of 2nd years.',
	// 	open: false,
	// },
	{
		question: 'Is it a must to have prior experience in the SIG of my interest?',
		answer: 'Nope, it is not compulsory. You will need to know the basics of the SIG, however the most important traits we are seeking are genuine interest and enthusiasm.',
		open : true
	},
	{
		question: 'Once I join ISTE, Can I be a part of a SIG other than the one I applied for during recruitment?',
		answer: 'Yes definitely! You can join any of our 8 SIGs based on your interest.',
		open : false
	},
	{
		question: 'I have a query not listed here, who can I contact?',
		answer: (
			<>
				Feel free to contact anyone below if you have any other doubts:<br></br>
				<ul style={{ paddingLeft: '5%' }}>
					<li style={{ listStyleType: 'disc', color: 'var(--primaryDarker)' }}>
						Ankit Stephen Thomas: 9567097555
					</li>
					<li style={{ listStyleType: 'disc', color: 'var(--primaryDarker)' }}>
						Ayush Mangukia : 8105288410
					</li>{' '}
					<li style={{ listStyleType: 'disc', color: 'var(--primaryDarker)' }}>
						Gayathri Nisha: 8296233742
					</li>
				</ul>
			</>
		),

		open: true,
	},
];

export const instructions = [
	// 'Make sure to register <b>individually</b> for all the sigs you wish to apply to',
	'To view the details of the recruitment process for a ISTE, read through the instructions and FAQs. Click on the <a class="btn indigo darken-4 white-text" href="https://forms.gle/26wALjm3MBKgn93aA" target="_blank"><b>Register</b></a> button to be redirected to the registration form. ',
	// 'You can also access the respective SIG\'s recruitment page from the <a class="btn indigo darken-4 white-text "><b>Apply for recruitments!</b></a> button in the respective SIG\'s details page.',
	'To view last year projects, click on the <a class="btn grey darken-1 white-text "><b>Expo</b></a> button in the navbar or the <a class="btn indigo darken-4 white-text "><b>Expo</b></a> button on the respective SIG\'s recruitment page.',
	'To view the details of a SIG as well as this year\'s projects, select the respective SIG from the drop-down menu or click on the <a class="btn indigo darken-4 white-text "><b>Projects</b></a> button in the respective SIG\'s recruitment page.',
	'You can register <b>ONLY</b> through your nitk.edu email id.',
	// 'The registration forms close on <b> 26th September, 11.59pm, IST.</b>',
	'You will be notified via email and WhatsApp about any recruitment round timing and required information. Make sure you check these frequently.',
	// 'We will be having video interviews on Microsoft Teams, the details of which will be sent to you after the online tests.',
	'If you have any issues, contact the POC for that SIG directly.',
];
