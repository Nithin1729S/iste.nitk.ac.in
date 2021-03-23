export const constant = {
	//Format for a project
	// {
	//     id: 2,
	//     logo: '', // Find the project logo in the current up site and copy paste logo from there (Go to SIGS -> project and find the logo)
	//     name: '',
	//     imgUrl: ['', '', '', '', ''], //Alls the images
	//     members: ['', '', '', '', ''], // Members
	//     description: {
	//         aim: (<div></div>), // Aim
	//         meth: (<div></div>), // Methodology
	//         res: (<div></div>), // Results
	//         con: (<div></div>), // Conclusion and Future Scope
	//     },
	//     meetLink: 'This is the meet link',
	// },
	catalyst: [
		{
			id: 1,
			logo:
				'https://images-na.ssl-images-amazon.com/images/I/51D-9qGCi1L._SL1000_.jpg',
			name:
				'Simulation Model for Biodiesel Production Embedded with MPC using PFR',
			imgUrl: [
				'https://drive.google.com/file/d/151fRJsNFIIjefxK9x_MkoTHBKFLcMzNh/view?usp=sharing',
				'https://drive.google.com/file/d/1iixnaapJ1Qm5n8xK77sygK_rAI6ifSxW/view?usp=sharing',
				'https://drive.google.com/file/d/1YMqmhbtezm0TVirV4EIQnIeRW_NXfH52/view?usp=sharing',
				'https://drive.google.com/file/d/12yAx8jLCuW47iotrSCueujaixAtfYJvs/view?usp=sharing',
				'https://drive.google.com/file/d/1Eef3s9OksThOX-sPtZv1-K64Wj6AZfXE/view?usp=sharing',
				'https://drive.google.com/file/d/11asPiZf1nYQQZ97YfsRJ3XObTpqByk8j/view?usp=sharing',
				'https://drive.google.com/file/d/1WvkMe3uZbjLrTnC9IkoEPOybA21Zbp4w/view?usp=sharing',
				'https://drive.google.com/file/d/1zkYaRpX_keU7ORWrKbrwl0uRFFVUp8d9/view?usp=sharing',
				'https://drive.google.com/file/d/1bLmzz-8kU6v2r5vpn776LzYIydoH1a0A/view?usp=sharing',
			],
			members: [
				'Abhijeet Singh',
				'Aditya Reddy',
				'Rohan Suratkal',
				'Rohaan Sunil',
				'Rugved Pande',
				'Mohona Mukherjee',
			],
			description: {
				aim: (
					<div>
						The aim of this project was to model and simulate for Biodiesel
						Production embedded with Model Predictive Control(MPC) operating in
						a Plug Flow Reactor(PFR) using MATLAB-Simulink.
						<br />
						<br /> {'     '} In industrial processes, the demand for better
						control of process conditions has led to more significant
						complications in control mechanisms. Controllers are required to
						make a non-offset or tiny offset between signal outputs and
						references by tuning to compensate for frequently changing operating
						conditions. Model predictive control (MPC) is an advanced control
						technique that relies on system identification and usually applies
						with linear processes. MPC is used to steer a process to operate at
						the values given from the optimization calculation step.
					</div>
				),
				meth: (
					<div>
						Reactions
						<br />
						<br />
						Raw Materials: Triglyceride (TG) and Methanol (MeOH) <br />
						Product: Methyl Ester (ME) <br />
						By-Product: Glycerol (GL) <br />
						Intermediates: Diglyceride(DG) and Monoglyceride (MG)
						<br />
						<br />
						•TG + 3 MeOH {'<=>'} GL + 3 ME
						<br />
						•TG + MeOH {'<=>'} DG + ME <br />
						•DG + MeOH {'<=>'} MG + ME <br />
						•MG + MeOH {'<=>'} GL + ME <br />
						<br />
						Operating Parameters <br />
						<br />
						•Pressure P = 1 atm, T = 60°C (Higher temperatures avoided to
						prevent Saponiﬁcation). <br />
						•Catalyst used: 0.5% Sodium Methoxide.•100% excess MeOH used to
						avoid reverse reactions. <br />
						•Basis: Molar Flow rate F = 100 mol/s of total inlet ﬂow.
						<br />
						•Volume of reactor V = 10 L<br />
						•Volumetric flow rate ν = 360 m3/s
						<br />
						•Area A = 10 m2
						<br />
						•Residence time τ = 3600 s <br />
						•Initial concentration of reactants: CTG =1.8, CMeOH =10.5
						<br />
						•Rate Constants: k1 =0.049, k2 =0.102, k3 = 0.218, k4 =1.28, k5
						=0.239, k6 =0.007
						<br />
						<br />
						Component Balanaces <br />
						<br />
						dxTG/dL=FτA/Vv(-k1 . xTG . xMeOH + k2 . xDG . xME) <br />
						dxDG/dL=FτA/Vv(k1 . xTG . xMeOH – k2 . xDG . xME -k3 . xDG . xMeOH
						+k4 . xMG . xME ) <br />
						dxMG/dL=FτA/Vv(k3 . xDG . xMeOH -k4 . xMG . xME -k5 . xMG . xMeOH
						+k6 . xGl . xME ) <br />
						dxME/dL=FτA/Vv(k1 . xTG . xMeOH – k2 . xDG . xME +k3 . xDG . xMeOH
						-k4 . xMG . xME +k5 . xMG . xMeOH -k6 . xGl . xME) <br />
						dxGL/dL=FτA/Vv(k5 . xMG . xMeOH -k6 . xGl . xME) <br />
						dxMeOH/dL=FτA/Vv(-k1 . xTG . xMeOH +k2 . xDG . xME -k3 . xDG . xMeOH
						+k4 . xMG . xME -k5 . xMG . xMeOH +k6 . xGl . xME)
						<br />
						<br />
						Implementation of the Controller <br />
						<br />
						Control system design is necessary to achieve a production level of
						consistency, purity, economy, and safety which cannot be achieved
						purely by human manual control. It can be seen from the dynamic
						model equations of biodiesel that all equations are highly nonlinear
						in nature which cannot be used directly to achieve the speciﬁed
						objectives. <br /> Hence, these models need to be approximated to
						the FOPDT model so that an eﬃcient controller can be designed. Then
						we tune the PI controller based on the FOPDT model and along with
						that, we tune the MPC controller based on the FOPDT model and
						finally then analyze the controller settings that best control our
						system. The control system has been implemented for all six
						components. <br />
						The FOPDT model parameters are enlisted in Table 1, the PI
						controller parameters are enlisted in Table 2, and the error values
						for comparing both the controllers (PI and MPC) are enlisted in
						Table 3. Figure 1 depicts the Response curves for comparing both the
						controllers (PI and MPC). Refer the images section for the tables
						<br />
					</div>
				),
				res: (
					<div>
						Refer the images section for the results in the form of graphs
						having the Response Curve for comparing both the Controllers (PI and
						MPC)
					</div>
				),
				con: (
					<div>
						An identification of the Biodiesel model has been done in this
						study. The PI and MPC settings are designed based on the identified
						FOPDT model and compared. The set of two settings is implemented on
						the nonlinear Biodiesel plant and evaluated the controller's
						efficiency. From the simulation studies, it is observed that the MPC
						settings produce a superior closed-loop response in terms of time
						integral errors such as ITAE, IAE, ISE, etc than that of the PI
						settings. <br /> {'   '}Future scope includes taking the outcomes
						and results of the current project as a basis, the plant will be
						simulated in Aspen plus- an industry standard software, for the
						purification of the product from the reactor.
					</div>
				),
			},
			meetLink: 'https://www.google.com/',
		},
		{
			id: 2,
			name: 'Catalyst Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Catalyst Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	charge: [
		{
			id: 1,
			name: 'Charge Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Charge Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Charge Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Charge Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 5,
			name: 'Charge Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 6,
			name: 'Charge Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	chronicle: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	clutch: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	concrete: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 5,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	create: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	credit: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name ',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 5,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 6,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 7,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	crypt: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 5,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 6,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 7,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
};
export const sigNames = [
	{ name: 'catalyst', id: 1 },
	{ name: 'charge', id: 2 },
	{ name: 'chronicle', id: 3 },
	{ name: 'clutch', id: 4 },
	{ name: 'concrete', id: 5 },
	{ name: 'create', id: 6 },
	{ name: 'credit', id: 7 },
	{ name: 'crypt', id: 8 },
];
export const offsetCoefficient = -3 / 8;
