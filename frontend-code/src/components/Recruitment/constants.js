export const dummy = {
	regLink: 'google.com/',
	rounds: [
		{
			roundName: 'Round 1',
			date: '2021-05-19',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet turpis in diam elementum venenatis. Curabitur ut diam non ipsum euismod pharetra. Sed enim diam, euismod at nibh sit amet, consectetur maximus neque. Donec quis mauris nec libero eleifend suscipit blandit non metus. Nam risus dolor, faucibus eu lorem eget, egestas vulputate elit. Pellentesque sed nisi est. Suspendisse venenatis ullamcorper quam et mollis. Etiam nec turpis libero. Vivamus ac faucibus leo. Integer pulvinar, libero a accumsan rhoncus, lectus turpis consectetur libero, ac laoreet enim ex nec metus. ',
			isOver: true,
		},
		{
			roundName: 'Round 2',
			date: '2021-05-21',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet turpis in diam elementum venenatis. Curabitur ut diam non ipsum euismod pharetra. Sed enim diam, euismod at nibh sit amet, consectetur maximus neque. Donec quis mauris nec libero eleifend suscipit blandit non metus. Nam risus dolor, faucibus eu lorem eget, egestas vulputate elit. Pellentesque sed nisi est. Suspendisse venenatis ullamcorper quam et mollis. Etiam nec turpis libero. Vivamus ac faucibus leo. Integer pulvinar, libero a accumsan rhoncus, lectus turpis consectetur libero, ac laoreet enim ex nec metus. ',
			isOver: true,
		},
		{
			roundName: 'Round 3',
			date: '2021-05-23',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet turpis in diam elementum venenatis. Curabitur ut diam non ipsum euismod pharetra. Sed enim diam, euismod at nibh sit amet, consectetur maximus neque. Donec quis mauris nec libero eleifend suscipit blandit non metus. Nam risus dolor, faucibus eu lorem eget, egestas vulputate elit. Pellentesque sed nisi est. Suspendisse venenatis ullamcorper quam et mollis. Etiam nec turpis libero. Vivamus ac faucibus leo. Integer pulvinar, libero a accumsan rhoncus, lectus turpis consectetur libero, ac laoreet enim ex nec metus. ',
			isOver: false,
		},
		{
			roundName: 'Round 4',
			date: '2021-05-25',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet turpis in diam elementum venenatis. Curabitur ut diam non ipsum euismod pharetra. Sed enim diam, euismod at nibh sit amet, consectetur maximus neque. Donec quis mauris nec libero eleifend suscipit blandit non metus. Nam risus dolor, faucibus eu lorem eget, egestas vulputate elit. Pellentesque sed nisi est. Suspendisse venenatis ullamcorper quam et mollis. Etiam nec turpis libero. Vivamus ac faucibus leo. Integer pulvinar, libero a accumsan rhoncus, lectus turpis consectetur libero, ac laoreet enim ex nec metus. ',
			isOver: false,
		},
	],
};

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
			'Yes. You can apply for as many SIGs as you want to. Fill out the form for each SIG you want to apply for separately.',
		open: true,
	},
	{
		question: 'Is there a limit to the number of SIGs you can apply for?',
		answer:
			'No, you can apply for as many SIGs as you want to. However we recommend that you be a part of only 3 SIGs to ensure that you will be able to balance your time.',
		open: true,
	},
	{
		question: 'How will I know if I am selected for the next round?',
		answer:
			'You will receive an email and a message on WhatsApp regarding your selection for each round.',
		open: false,
	},
	{
		question:
			'Where can I view the details of the recruitment process for a SIG?',
		answer:
			'Click the respective SIG card in the above panel to view the recruitment details! \n Additionally, if you want to see details about a particular SIG, use the drop-down on the navbar!',
		open: false,
	},
	{
		question: 'Does ISTE recruit 3rd years?',
		answer:
			'Yes we do! We do consider exceptional 3rd year candidates as well. However, a majority of our intake will comprise of 2nd years.',
		open: false,
	},
	{
		question: 'I have a query not listed here, who can I contact?',
		answer: (
			<>
				Feel free to contact anyone below if you have any other doubts:<br></br>
				<ul style={{ paddingLeft: '5%' }}>
					<li style={{ listStyleType: 'disc', color: 'var(--primaryDarker)' }}>
						Sai Shruti Prakhya: 9686749909
					</li>
					<li style={{ listStyleType: 'disc', color: 'var(--primaryDarker)' }}>
						Arjun A. : 9895089920
					</li>{' '}
					<li style={{ listStyleType: 'disc', color: 'var(--primaryDarker)' }}>
						Shreyas Bhat: 9623830564
					</li>
				</ul>
			</>
		),

		open: true,
	},
];

export const instructions = [
	'To view the details of the recruitment process for a SIG, select the appropriate card to go to that SIG\'s recruitment page. Click on the <a class="btn waves-effect indigo darken-4 white-text "><b>Register</b></a> button to be redirected to the registration form. ',
	'You can also access the respective SIG\'s recruitment page from the <a class="btn waves-effect indigo darken-4 white-text "><b>Apply for recruitments!</b></a> button in the respective SIG\'s details page.',
	'To view last year projects, click on the <a class="btn waves-effect grey darken-1 white-text "><b>Expo</b></a> button in the navbar or the <a class="btn waves-effect indigo darken-4 white-text "><b>Expo</b></a> button on the respective SIG\'s recruitment page.',
	'To view the details of a SIG as well as this year\'s projects, select the respective SIG from the drop-down menu or click on the <a class="btn waves-effect indigo darken-4 white-text "><b>Projects</b></a> button in the respective SIG\'s recruitment page.',
	'You can register <b>ONLY</b> through your nitk.edu email id.',
	'The registration forms close on <b> 25th September, 11.59pm, IST.</b>',
	'You will be notified via email and WhatsApp about any recruitment round timing and required information. Make sure you check these frequently.',
	'We will be having video interviews on Microsoft Teams, the details of which will be sent to you after the online tests.',
	'If you have any issues, contact the POC for that SIG directly.',
];
