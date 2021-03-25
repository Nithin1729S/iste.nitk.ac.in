import Voice from './Voice.png';
export const constant = {
	//Format for a project
	// {
	//     id: 2,
	//		 oneline:'',
	//     logo: '',
	//     name: '',
	//     imgUrl: ['', '', '', '', ''],
	//     members: ['', '', '', '', ''],
	//     description: {
	//         aim: (<div></div>),
	//         meth: (<div></div>),
	//         res: (<div></div>),
	//         con: (<div></div>),
	//     },
	//
	// },
	catalyst: [
		{
			id: 1,
			logo:
				'https://images-na.ssl-images-amazon.com/images/I/51D-9qGCi1L._SL1000_.jpg',
			name:
				'Simulation Model for Biodiesel Production Embedded with MPC using PFR',
			oneline:
				'The aim of this project was to model and simulate for Biodiesel Production embedded with Model Predictive Control(MPC) operating in a Plug Flow Reactor(PFR) using MATLAB-Simulink.',
			imgUrl: [],
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
						Component Balances <br />
						<br />
						<iframe
							src="https://drive.google.com/file/d/1rOZ867XD3nWmo6qL1Gc51flVYKnX69J4/preview"
							width="640"
							height="280"
						></iframe>
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
						controllers (PI and MPC).
						<br />
						<br />
						<div style={{ marginLeft: '30%' }}>
							<div style={{ marginLeft: '10%' }}>
								Table 1: FOPTD Model Parameters
							</div>
							<iframe
								style={{ border: '1px black solid' }}
								src="https://drive.google.com/file/d/1ZvzEfamyz5W8j4535VdYprXoW5FwGLCG/preview"
								width="400"
								height="300"
							></iframe>
						</div>
						<br />
						<br />
						<div style={{ marginLeft: '30%' }}>
							<div style={{ marginLeft: '10%' }}>
								Table 2: PI Controller Parameters
							</div>
							<iframe
								style={{ border: '1px black solid' }}
								src="https://drive.google.com/file/d/1gOvHwUuOLX-1jYF18ZcL8Y4PXsDvhJ66/preview"
								width="400"
								height="300"
							></iframe>
						</div>
						<br />
						<br />
						<div style={{ marginLeft: '30%' }}>
							<div style={{ marginLeft: '12%' }}>Table 3: Error Tabulation</div>
							<iframe
								style={{ border: '1px black solid' }}
								src="https://drive.google.com/file/d/1XDxl0XRBq2cWAKbtO4UL-XUUzTOPfLv_/preview"
								width="400"
								height="300"
							></iframe>
						</div>
						<br />
						<br />
					</div>
				),
				res: (
					<div>
						<br />
						<br />
						<div style={{ marginLeft: '12%' }}>
							<div style={{ marginLeft: '13%', paddingBottom: '1%' }}>
								Figure 1: Response Curve for comparing both the Controllers (PI
								and MPC)
							</div>
							<div style={{ paddingBottom: '2%' }}>
								<iframe
									style={{ border: '1px black solid' }}
									src="https://drive.google.com/file/d/1bLmzz-8kU6v2r5vpn776LzYIydoH1a0A/preview"
									width="400"
									height="300"
								></iframe>
								<iframe
									style={{ border: '1px black solid', marginLeft: '5%' }}
									src="https://drive.google.com/file/d/1Eef3s9OksThOX-sPtZv1-K64Wj6AZfXE/preview"
									width="400"
									height="300"
								></iframe>
							</div>
							<div style={{ paddingBottom: '2%' }}>
								<iframe
									style={{ border: '1px black solid' }}
									src="https://drive.google.com/file/d/1zkYaRpX_keU7ORWrKbrwl0uRFFVUp8d9/preview"
									width="400"
									height="300"
								></iframe>
								<iframe
									style={{ border: '1px black solid', marginLeft: '5%' }}
									src="https://drive.google.com/file/d/1WvkMe3uZbjLrTnC9IkoEPOybA21Zbp4w/preview"
									width="400"
									height="300"
								></iframe>
							</div>
							<div style={{ paddingBottom: '2%' }}>
								<iframe
									style={{ border: '1px black solid' }}
									src="https://drive.google.com/file/d/11asPiZf1nYQQZ97YfsRJ3XObTpqByk8j/preview"
									width="400"
									height="300"
								></iframe>
								<iframe
									style={{ border: '1px black solid', marginLeft: '5%' }}
									src="https://drive.google.com/file/d/12yAx8jLCuW47iotrSCueujaixAtfYJvs/preview"
									width="400"
									height="300"
								></iframe>
							</div>
						</div>
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
			//meetLink: 'https://www.google.com/',
		},
		{
			id: 2,
			logo:
				'https://www.tpomag.com/uploads/inline/xcockrell_4.jpg.pagespeed.ic.NOVnhtHlC-.webp',
			name: 'Modelling Of Waste Water Treatment Using ASM',
			oneline:
				'The objective of the project is to explore how industrial-scale water purification is executed through a widely implemented process known as Activated Sludge Model (ASM).',
			imgUrl: [
				'https://drive.google.com/file/d/1jgdQan0UQV9QBw3A2wtkizotPFuAN6SX/preview',
				'https://drive.google.com/file/d/1k3sc13lEOX82ABI3leaEX0hkz6w9BN-v/preview',
				'https://drive.google.com/file/d/19qapAft4gS8M9Z2J3IcToTANdf_tdbxY/preview',
				'https://drive.google.com/file/d/1iyXMrELdGTal9f0_L9dWiSqyseLyiWdU/preview',
				'https://drive.google.com/file/d/1wgKJrkucaHeQqAcPyRBjOFA6DKgnsBZG/preview',
				'https://drive.google.com/file/d/18TMIzSKL1RKQcAZXfmvDPOdOle0li_wa/preview',
				'https://drive.google.com/file/d/1Y5Rx0F8aZl0bZ-zZ-W2AKfoApAlefUPf/preview',
				'https://drive.google.com/file/d/1GSsEtd76N4qLZCiyhxPMs3KkGR9cNW2Z/preview',
			],
			members: [
				'Devendra Gayari',
				'Amogha V Somayaji',
				'Ankit Stephen Thomas',
				'Dhruv Banerjee',
				'R Raghavendra',
				'Rahul Maheshwari',
			],
			description: {
				aim: (
					<div>
						The objective of the project is to explore how industrial-scale
						water purification is executed through a widely implemented process
						known as Activated Sludge Model (ASM). <br />
						<br /> {'     '}
						This setup is performed on MATLAB-Simulink, an engineering software
						primarily used for replicating simulations and various industrial
						processes. The obtained process conditions obtained are then studied
						by appending a controller to regulate the concentration of dissolved
						oxygen.
						<br /> ASM is a mathematical-modelling of a wastewater treatment
						process for treating sewage or industrial wastewaters using aeration
						and a biological composition consisting of bacteria and protozoa.
						Industrialists, MNCs and several establishments have resorted to
						adopt ASM as the primary method to treat wastewater generated from
						their facilities.{' '}
					</div>
				),
				meth: (
					<div>
						Methodlogy <br />
						<ol>
							<li>
								Initially, to build a firm foundation with the fundamentals and
								pre-requisites of ASM and its functioning, we referred to
								several literatures and journals to obtain adequate data.
								Features pertaining to the optimum Chemical Oxygen Demand (COD)
								and Biological Oxygen Demand (BOD), flow rate values were
								derived from a diversified portfolio of resources.
							</li>
							<li>
								The acquired mathematical-equations for modelling the process
								were then inserted in MATLAB-Simulink, with appropriate constant
								values set as a desired input.
							</li>
							<li>
								A controller had to be appended to the system, to bring about
								this installation, a mathematical function (transfer function)
								has to be established that would determine the functioning of
								the controller.
							</li>
							<li>
								An appropriate transfer function was adopted that would
								seamlessly suit our reaction setup.
							</li>
							<li>
								Tunings models were studied so that we maximize the performance
								of the entire setup without producing excessive overshoot values
								or variances.
							</li>
							<li>
								Varied tuner models were established and necessary error
								analysis was conducted to determine the accuracy of our entire
								framework.
							</li>
						</ol>
						<br />
						Prcocedure <br />
						<ol>
							<li>
								A skeletal layout was initiated, where a total of 8 control
								parameters and their corresponding equations were determined.
							</li>
							<li>
								The underlying mathematical equations depict the various
								processes that occur on an industrial scale whilst treating the
								wastewater generated:- <br />
								<ol>
									<li>ρ1= μH (SS/(KS+ SS)) (SO/(KOH+ SO)) XBH </li>
									<li>
										ρ2= μH (SS/(KS+ SS))(SO/(KOH+ SO)) (SNO/(KNO+ SNO)) ηgXBH{' '}
									</li>
									<li>ρ3= (SNH/(KNH+ SNH)) (SO/(KOA+ SO)) XBA </li>
									<li>ρ4= bHXBH </li>
									<li>ρ5= bAXBA </li>
									<li>ρ6= kaSNDXBH </li>
									<li>
										ρ7=kh(XS/XBH)/(KX+ (XS/XBH))[(SO/(KOH+ SO))+ηh(KOH/(KOH+
										SO))(SNO/(KNO+ SNO))]XBH{' '}
									</li>
									<li>
										ρ8=kh(XS/XBH)/(KX+(XS/XBH))[(SO/(KOH+ SO))+ηh(KOH/(KOH+
										SO))(SNO/(KNO+ SNO))]XBH(XND/XS){' '}
									</li>
								</ol>
							</li>
							<li>
								The previously displayed equations were then employed in
								developing the Simulink model to design differential equations
								to simulate the ASM process.
							</li>
							<li>
								The above-derived equations are then inserted into the following
								equations to obtain desirable results:- <br />
								<ol>
									<li>dXBH/dt= ρ1+ ρ2− ρ4</li>
									<li>dXBA/dt= ρ3− ρ5</li>
									<li>dSS/dt= ρ7− (ρ1+ ρ2)</li>
									<li>dXS/dt= (1−fP)(ρ4+ ρ5)− ρ7</li>
									<li>dXP/dt= fP(ρ4+ ρ5)</li>
									<li>dXND/dt= (iXB− fPiXP)(ρ4+ ρ5)− ρ7</li>
									<li>dSND/dt= ρ7− ρ6</li>
									<li>dSNH/dt= −iXB (ρ1+ ρ2) +ρ6− (iXB+1/YA) ρ3</li>
									<li>dSNO/dt= (1/YA)ρ3−((1−YH)/2.86YH) ρ2</li>
									<li>dSO/dt= − ((1−YH)/YH)ρ1−((4.57−YA)/YA) ρ3</li>
									<li>
										dSALK/dt=−(iXB/14)ρ1+((1−YH)/14.286YH−(iXB/14))ρ2−((2/14)YA+iXB/14)ρ3+(1/14)
									</li>
								</ol>
							</li>
							<li>
								Essentially, on developing the rudiments of the ASM process, a
								reactor mass balance equation can be formulated for oxygen. This
								is because in this scenario, regulation of oxygen levels is of
								utmost importance to us. The fundamental equation for
								determining a mass balance around a reactor is:-Accumulation
								within the System + Consumption within the System = Input into
								the system - Output to the System + Generation within the System
								Implementing the above elementary equation to our reactor model
								for determining the concentration of Oxygen levels is as
								follows:- Reactor Mass Balance: For Oxygen
								(dS0,as,k/dt)=(1/Vas,k)(Qk-1S0,as,k-1+rZ,kVas,k+(KLa)kVas,k(S0*-S0,as,k)-QkS0,as,k)
							</li>
							<li>
								As discussed earlier, the derived equations were modelled in
								Simulink to obtain desired results.
							</li>
							<li>
								The entirety of the reactor setup was based on an open-loop
								condition (the output has no influence of effect on the input).
							</li>
							<li>
								The steady state values that were achieved through this process
								were reported and recorded.
							</li>
							<li>
								A controller was then installed to regulate the dissolved oxygen
								concentration level.
							</li>
							<li>
								Primarily, the PID constants were achieved by using the inbuilt
								PID controller in Simulink.
							</li>
							<li>
								Additionally, the FOPDT model was implemented using its
								derivative methods, including Zeigler Nichols (P, PI, PID),
								Internal Model Control (IMC) method, Equating Coefficients
								Method (ECM). These models were operated under servo and
								regulatory conditions.
							</li>
							<li>
								To perform an error analysis, we calculated fundamentally three
								types of errors:- ISE,IAE,ITAE
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						<figure>
							<iframe
								src="https://drive.google.com/file/d/19qapAft4gS8M9Z2J3IcToTANdf_tdbxY/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								The ASM process developed on Simulink
							</figcaption>
						</figure>{' '}
						<br />
						<br />
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1_rXr0z-z_1LQ8_PR2QSO-oqmZxzYUvDO/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								{' '}
								The Steady State Values on executing the ASM process
							</figcaption>
						</figure>{' '}
						<br />
						The open loop transfer function adopted to be implemented for the
						functioning of the controller is:- G(s) = 55.34s3 + 9071s2 +
						4.956e05s + 9.022e06 / s4 + 478.4s3 + 6.056 e04 s2 + 2.985e06
						s+5.142e07
						<iframe
							src="https://drive.google.com/file/d/1iyXMrELdGTal9f0_L9dWiSqyseLyiWdU/preview"
							width="640"
							height="480"
						></iframe>
						<br />
						Graph: Variation of Oxygen Concentration in open loop. <br />
						Inference: Dissolved oxygen concentration is almost constant after
						0.0251 d. <br />
						For tuning the FOPDT approximations, the following estimated
						transfer function was used:- <br />
						G(s) = 0.17546e − 0.012s / 3.1447s+1 <br />
						On tuning the P and PI controllers by Zeigler Nichols method, the
						following parameters were obtained:-
						<table style={{ width: '100%', border: '1' }}>
							<tr>
								<th>Parameters</th>
								<th>P</th>
								<th>I</th>
							</tr>
							<tr>
								<td>P Controller</td>
								<td>1493.55029</td>
								<td>NA</td>
							</tr>
							<tr>
								<td>PI Controller</td>
								<td>1344.19526</td>
								<td>37338.76</td>
							</tr>
						</table>
						<br />
						The parameters corresponding to the inbuilt PID controller by
						various tuning methods are as follows:- <br />
						<table style={{ width: '100%', border: '1' }}>
							<tr>
								<th>Method of Tuning</th>
								<th>P</th>
								<th>I</th>
								<th>D</th>
							</tr>
							<tr>
								<td>Ziegler-Nichols</td>
								<td>1792.26034</td>
								<td>74677.51</td>
								<td>10.75356</td>
							</tr>
							<tr>
								<td>IMC</td>
								<td>1135.36</td>
								<td>360.601744</td>
								<td>6.798536</td>
							</tr>
							<tr>
								<td>ECM</td>
								<td>1496.3999</td>
								<td>474.942045</td>
								<td>8.963435</td>
							</tr>
							<tr>
								<td>Inbuilt PID tuning algorithm in Simulink</td>
								<td>10.2153</td>
								<td>4009.5722</td>
								<td>0.00228</td>
							</tr>
						</table>
						The error analysis for each of the tuner methods were performed
						under 2 conditions, namely:- Regulatory Control base setup and Servo
						Control base setup. <br />
						<iframe
							src="https://drive.google.com/file/d/1mZtN97fwNzfaLDiOI_waAC89yNWe4y9l/preview"
							width="640"
							height="480"
						></iframe>
					</div>
				),
				con: (
					<div>
						Through this project we can draw practical conclusions on the
						essence of ASM wastewater treatment process. <br />
						Additionally we can comprehend the functionality and efficiency of
						this process, as a result we understand why the ASM process has been
						widely implemented and studied by a number of organizations. <br />
						Consequently, on installing a feedback controller to the system and
						performing an error analysis, we realize that the inbuilt controller
						tuning algorithm in Simulink is best suited for controlling the
						dissolved oxygen concentration in this process. <br />
						Primarily, as it provides the least error (ISE, IAE and ITAE) in
						comparison to the other tuning methods.{' '}
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Photocatalytic Degradation of Aniline',
			oneline:
				'The objective of the project is to model a reactor for the degradation of organic pollutants, particularly methane using photocatalytic reactions on DWSIM, a chemical process simulator. Thus, obtaining suitable graphs with appropriate parameters for determining apt relations between the control variables.',
			logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_catalyst.png',
			imgUrl: [
				'https://drive.google.com/file/d/1j0MfIPVYH4nyaytgMNrx6FESYopET-qE/preview',
				'https://drive.google.com/file/d/1QKVrTsaEPw35Z2YRT8R9vadWvgVS4y-P/preview',
				'https://drive.google.com/file/d/1XrCRmAnFgK45ncp437XNoKwM-jD9cG1X/preview',
				'https://drive.google.com/file/d/1ViAwMcur4G6WxgBsJF01mMrlKfA8GAF6/preview',
				'https://drive.google.com/file/d/1DOiwXmVhEeP7o6Muu_eS4Pb3g_Y5ZrRo/preview',
				'https://drive.google.com/file/d/1stOQ_PbjiXLrAhbY7KSA_bflm_D7raW9/preview',
				'https://drive.google.com/file/d/1GfoU2X5Q_2d7Hk0dK--QzVk6C8oPN2tb/preview',
				'https://drive.google.com/file/d/1HUHBDuo0pOv6IrwF7j7nCko7Vvliunab/preview',
				'https://drive.google.com/file/d/1XGm7JxTbLwGNtZuryEnEOkAzRC5dGSYi/preview',
			],
			members: [
				'Rishu Kumar',
				'Manash Akash',
				'R Raghavendra',
				'Ankit Stephen Thomas',
			],
			description: {
				aim: (
					<div>
						The objective of the project is to model a reactor for the
						degradation of organic pollutants, particularly methane using
						photocatalytic reactions on DWSIM, a chemical process simulator.
						Thus, obtaining suitable graphs with appropriate parameters for
						determining apt relations between the control variables. <br />
						Several scientists, MNC’s and groups of researchers across the globe
						have faced hurdles in humanizing the treatment of organic
						pollutants. Until the late 1970s, there was no effective method
						known to man that can satisfy all the above-mentioned criteria
						required for the smooth operation of the establishment.
						Photocatalysis, an extraordinary invention by Fujishima and Honda
						paved way to a brand new avenue in the field of chemical
						engineering. Essentially, the production of hydrogen using
						photocatalysis by a process known as steam reforming of methane has
						proven to be one of the greatest assets to engineers and
						industrialists globally. Hence, studying methods and models that
						would provide a safer and a greener option for individuals to adopt
						is the next biggest challenge and encyclopaedic journey to witness.{' '}
					</div>
				),
				meth: (
					<div>
						<ol>
							<li>
								The initial stride of utmost importance was to comprehend the
								fundamentals of concepts like photocatalysis, kinetics behind
								the reaction, reactor models and nanoparticles as a catalyst.
							</li>
							<li>
								To understand such theories, we examined several literatures and
								materials corresponding to topics that were closely aligned in
								the direction of the project.
							</li>
							<li>
								{' '}
								On successfully learning the foundations, we then proceeded to
								establish a sample reactor replica with Aniline as the organic
								pollutant using TiO2 nanoparticles as the essential catalyst.
								This was crucial in recognizing the workspace and familiarize
								ourselves with the DWSIM software.
							</li>
							<li>
								On developing the pre-requisites required to achieve our
								objective, we began to initiate the modelling on DWSIM.
							</li>
							<li>
								Qualitatively, the reaction that is occurring in the reactor is,
								Methane is reacted with Water at high temperatures under the
								influence of nanoparticle catalysts to produce Carbon dioxide
								and Hydrogen as the products. Chemically, the reaction can be
								denoted as:- CH4 + 2H2O CO2 + 4H2{' '}
							</li>
							<li>
								The material, energy stream and the reaction kinetics are fed.{' '}
							</li>
							<li>
								In our project, the reactor model that is being implemented is a
								Plug Flow Reactor (PFR). To operate the reactor and carry out
								the reaction, an energy stream (556.34973 kW) is appended along
								with the reactor. This ensures that the modelled reactor along
								with the reaction, functions efficiently.
							</li>
							<li>PFR parameters are fed.</li>
							<li>
								On doing so, the base model of the reactor has been successfully
								established and can be executed to obtain conversions by
								visualizing it from the PFR’s point of view.{' '}
							</li>
							<li>
								{' '}
								next step is to obtain graphs and plots with different
								parameters as each variable is intertwined with another, based
								on a certain relationship and proportionality.{' '}
							</li>
							<li>
								To vary the results the following parameters:-
								<ol>
									<li>Temperature</li>
									<li>Pressure</li>
									<li> Mole Fractions/ Concentrations of species</li>
									<li> Energy Stream</li>
									<li>Reactor Volume and Length</li>
									<li>
										Catalyst Loading, Catalyst Void Fraction, Catalyst Particle
										Diameter
									</li>
								</ol>
								were made to differ in fixed multiples, to obtain varied results
								which are then utilized to plot graphs on an appropriate data
								visualization software, like Microsoft Excel and determine
								relationships and dependence of various parameters.{' '}
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						Refer the images section for the results having the Flowsheet of the
						Methane reforming (DWSIM MODEL), Input Parameters to the PFR,
						Results related to the different parameters with Conversion{' '}
					</div>
				),
				con: (
					<div>
						On investigating the results obtained from the above graphs, there
						are a number of inferences we can draw:- <br />
						<ol>
							<li>
								Conversion vs Catalyst Particle Diameter: The plot undoubtedly
								depicts how the formation of products, in this case Hydrogen, is
								fairly independent of the catalyst particle diameter.
							</li>
							<li>
								Conversion vs Hydrogen Concentration: The shaping of products is
								inversely proportional to Hydrogen Concentration as a linear
								ratio. This is an accurate observation that has been devised as
								according to Le Chatlier’s principle, if a system experiences a
								disturbance, the system by default adopts a direction where the
								effects of this disturbance are nullified.
							</li>
							<li>
								Conversion vs Water and Methane Concentration: Applying a
								similar reasoning from the above observation, Le Chatlier’s
								principle can be implemented. We can observe that favourable
								conversions are linearly proportional to Water-Methane
								concentrations.
							</li>
							<li>
								Conversion vs Temperature: An endothermic reaction, with
								increase in temperature will favour the forward direction of the
								reaction. Le Chatlier’s principle can be be utilized in this
								scenario to obtain similar results. Additionally, the increase
								in temperature facilitates the reaction rate by enhancing the
								performance of the catalyst.{' '}
							</li>
						</ol>{' '}
						<br />
						From the graphs, it is evident that there are distinct relationships
						among variables like conversion, temperature, concentrations and so
						on. Using this DWSIM modelling for the photocatalytic degradation of
						methane, engineers can adopt this method or its derivatives to
						estimate the conditions for maximum production of hydrogen, maximum
						degradation of methane and so on.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
	],
	charge: [
		{
			id: 1,
			oneline:
				'This project aims to design and implement a hardware accelerator to accelerate the inference of convolutional neural networks on FPGA.',
			name: 'Implemention of CNNs on FPGA',
			logo: 'https://cdn.nanalyze.com/uploads/2017/05/FPGAs-AI-Chip-Teaser.jpg',
			imgUrl: [
				'https://drive.google.com/file/d/1JLSypedzzRMLKSLiKPhvZ_s_g5oql0w7/preview',
				'https://drive.google.com/file/d/12q1rlRxJcDNjtbQWVCLsd0EyGDhbaOw3/preview',
				'https://drive.google.com/file/d/150XAozifeE-vOHN_JnyWe1pyQ7TT8jvb/preview',
				'https://drive.google.com/file/d/1WGlhyB4a-rssMQmE1SPDDvDeXv1N0Ft-/preview',
				'https://drive.google.com/file/d/1A6z_lMYcm4svDTd_QDLSVqa93DVk-qme/preview',
			],
			members: [
				'Aaron Sequeira',
				'Aditya Manjunath',
				'Pranav Srinath',
				'Surya Prakash Reddy',
				'Lakshmisha SN',
				'Divesh Sakhuja',
				'BalajiNaidu V',
				'Roopam Dhaneria',
				'Ayush Agarwal',
			],
			description: {
				aim: (
					<div>
						This project aims to design and implement a hardware accelerator to
						accelerate the inference of convolutional neural networks on FPGA.
					</div>
				),
				meth: (
					<div>
						Designing a good architecture for the hardware accelerator is one of
						the main parts of the project. Systolic array is the heart of our
						architecture. Systolic arrays are hardware structures built for fast
						and efficient operation of regular algorithms that perform the same
						task with different data at different time instants. In our model
						systolic array is used to perform matrix multiplications. Since
						memory can be operated at higher speeds a fifo is designed to store
						the elements in the buffer to overcome cross domain clocking
						problems. Many small BRAM blocks are used to reduce waiting time in
						the buffer before writing the processed data into memory. <br />
						The designed architecture is implemented in verilog HDL using Xilinx
						Vivado design suite. All the required modules in the datapath are
						implemented in verilog. The datapath elements are then connected
						together in a top module. Control modules are developed to control
						the flow of data between the datapath modules. Master control module
						is designed to send control signals to all the control modules and
						the datapath modules based on the current instruction and previous
						instructions executed. <br />
						Datapath Diagram :-
						<iframe
							src="https://drive.google.com/file/d/12q1rlRxJcDNjtbQWVCLsd0EyGDhbaOw3/preview"
							width="640"
							height="480"
						></iframe>{' '}
						<br />
						Control path :-
						<iframe
							src="https://drive.google.com/file/d/1JLSypedzzRMLKSLiKPhvZ_s_g5oql0w7/preview"
							width="640"
							height="480"
						></iframe>
						<br />
						There is currently support for these seven high level instructions
						in our architecture:- <br />
						<ol>
							<li>Weight fill</li>
							<li>Fifo clear</li>
							<li>Fifo fill</li>
							<li>Fifo refill</li>
							<li>Conv</li>
							<li>Maxpool</li>
							<li>Add matrices</li>
						</ol>
						We are using fixed point calculations in our architecture.
						Tensorflow has a good post training quantisation technique which
						quantises the 64 bit floating point weights into 8 bit integers. We
						can extract those weights and biases and computation graph from the
						model. The extracted weights and biases can be used for our
						accelerator. The extracted model can be converted into a set of
						instructions which can be used to run on our accelerator.
					</div>
				),
				res: (
					<div>
						<em>Synthesis results</em>
						<iframe
							src="https://drive.google.com/file/d/1WGlhyB4a-rssMQmE1SPDDvDeXv1N0Ft-/preview"
							width="640"
							height="480"
						></iframe>
						Simulation results:- <br />
						Instructions Executed:- <br />
						Weight_fill 0 3 9 <br />
						Fifo_clear <br />
						Fifo_fill 0 5 5 0 <br />
						Conv 1 9 0 <br />
						Maxpool_fill 0 4 0 <br />
						weight _fill 0 3 9 <br />
						Fifo_clear <br />
						Fifo_refill 0 2 2 1 9 <br />
						Conv 1 9 0 <br />
						<iframe
							src="https://drive.google.com/file/d/1A6z_lMYcm4svDTd_QDLSVqa93DVk-qme/preview"
							width="640"
							height="480"
						></iframe>
						<br />
						Sample extracted and quantised weights and biases:-
						<iframe
							src="https://drive.google.com/file/d/150XAozifeE-vOHN_JnyWe1pyQ7TT8jvb/preview"
							width="640"
							height="480"
						></iframe>
					</div>
				),
				con: (
					<div>
						The designed hardware accelerator is implemented in Verilog HDL. The
						simulation results of the verilog model are verified. Synthesis of
						the verilog model shows decent utilisation of resources. Post
						synthesis and post implementation functional simulation is done and
						verified. Github repo:-{' '}
						<a href="https://github.com/putlurusurya/CNNOnFPGA" target="_blank">
							https://github.com/putlurusurya/CNNOnFPGA
						</a>
						<br />
						Future scope of this project:-
						<ol>
							<li>
								Improve the architecture with software optimisations in
								consideration
							</li>
							<li>Add DDR3 memory or other external memory support</li>
							<li>SD card support for live camera detection</li>
							<li>
								Improve the matrix multiplication model with a better
								architecture{' '}
							</li>
							<li>Improve timing constraints</li>
						</ol>
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Eye Tracking Wheelchair',
			oneline:
				"To design an eye-tracking software that acquires a video stream of eye movements using a camera and then, based on the eye movement, analyse the user's intent. It is aimed to design and simulate the wheelchair model on ROS and Gazebo.",
			logo:
				'https://b7.pngbarn.com/png/395/903/disability-wheelchair-shopping-cartoon-png-clip-art-thumbnail.png',
			imgUrl: [
				'https://drive.google.com/file/d/1c6Rau3hygJMGJEB2ywS9cqwn428KjdRH/preview',
				'https://drive.google.com/file/d/1awh6ZowTHToM6hNTm4TWbVEXT5HJIJCw/preview',
				'https://drive.google.com/file/d/1p7AAyc4bjaQoVB1cH7CSjsZ11ZlfSJxs/preview',
			],
			members: [
				'Anmol Verma',
				'Aaron Sequira',
				'Fatwir Sheikh Mohammed',
				'Nihal V Palankar',
				'Anuja Goyal',
				'Fouzan Tinwala',
				'Harshavardhan D',
				'Kumar Vitthal',
				'Sahana Praveen Bhandari',
			],
			description: {
				aim: (
					<div>
						To design an eye-tracking software that acquires a video stream of
						eye movements using a camera and then, based on the eye movement,
						analyse the user's intent. It is aimed to design and simulate the
						wheelchair model on ROS and Gazebo.
					</div>
				),
				meth: (
					<div>
						The project consists of two aspects: - <br />
						<ol>
							<li>
								Design of an appropriate algorithm that outputs instructions to
								the wheelchair based on eye movements of the user
							</li>
							<li>ROS and Gazebo simulation of the wheelchair</li>
						</ol>
						<br />
						<em>Eye-tracking using the DLib Library</em>
						<ol>
							<li>Get the facial landmarks using DLib Library</li>
							<li>Extract the eye locations using these facial landmarks</li>
							<li>
								Perform blink detection
								<ol>
									<li>
										{' '}
										Detected by calculating the average of the ratios of
										vertical line length to horizontal line length for each eye
									</li>
									<li>
										{' '}
										Time.time() function to measure the time between successive
										blinks
									</li>
								</ol>
							</li>
							<li>
								Perform gaze detection
								<ol>
									<li> Create a mask</li>
									<li> Convert to grayscale and threshold</li>
								</ol>
							</li>
							<li>
								Make the decision
								<ol>
									<li>
										{' '}
										Start (operating) or stop (idle) the system if blinking is
										detected twice within a span of 750 ms
									</li>
									<li>
										{' '}
										Signal to move forward/turn right/turn left depending on the
										eye gaze of the user
									</li>
								</ol>
							</li>
						</ol>
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1awh6ZowTHToM6hNTm4TWbVEXT5HJIJCw/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								System Process Diagram
							</figcaption>
						</figure>
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1c6Rau3hygJMGJEB2ywS9cqwn428KjdRH/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								Algorithm Flowchart
							</figcaption>
						</figure>
						<em>ROS and Gazebo implementation of the model</em>
						<ol>
							<li>
								The ROS middleware facilities used :
								<ol>
									<li> Publish/subscribe anonymous message passing</li>
									<li> Recording and playback of messages</li>
									<li>; Request/response remote procedure calls</li>
								</ol>
							</li>
							<li>
								The key ROS nodes used for monitoring, interpretation and
								communication are :
								<ol>
									<li>
										<em>ETW.py</em> : <br />
										This node handles the image processing part of the program
										from initializing the camera, starting video streaming,
										converting the incoming stream to grayscale, running HOG
										frontal face detector using the DLib library, extracting the
										location of the eye, blink detection, gaze detection and
										finally to decision making ie to publish (send) command to
										the ros_topic “my_command” via the ros_message “command.msg”
									</li>
									<li>
										<em>move.py</em> : <br />
										This ROS node acts as both a subscriber and a publisher node
										simultaneously but to 2 different topics namely “my_command”
										and “cmd_vel” respectively. It takes input (subscribes) from
										the ros_topic “my_command” via the ros_message “command.msg”
										and publishes a suitable message to the ros_topic “cmd_vel”.
									</li>
									<li>
										<em>wheelchair.launch</em> : <br />
										This is a ros_launch file written in the robot description
										language(XML format) that can launch multiple
										ros_nodes/files including the ros_master(by default) at once
										to avoid launching each individual node separately on
										different terminals. This file contains the locations of all
										the files required to launch the simulation of the
										wheelchair in gazebo with all the required
										ros_gazebo_plugins necessary to move the robot in accordance
										with eye movements of the user.
									</li>
								</ol>
							</li>
							<li>
								The below rqt_graph provides the flow of data during the run
								time of the simulation program.
							</li>
							<iframe
								src="https://drive.google.com/file/d/1F4CH7bcz1IkYe3Eu2gDkuifamHXM8OAR/preview"
								width="640"
								height="480"
							></iframe>
						</ol>
						<em>CNN design of the eye-tracking software</em> <br />
						In addition to the above, a CNN model was designed to detect eye
						gaze <br />
						<ol>
							<li>
								The dataset that is used to train the CNN model contains 7049
								facial images and up to 15 key points are marked on them (6
								required for our model).
							</li>
							<li>
								The architecture used for the same is:
								<iframe
									src="https://drive.google.com/file/d/1Kq6IS51eEoesxL1wYoqeEQARfh5gFGrk/preview"
									width="640"
									height="480"
								></iframe>
							</li>
							<li>
								The following are the layers of the model :
								<ol>
									<li> Convolutional Layers = 13</li>
									<li> Pooling Layers = 5</li>
									<li> Dense Layers = 3</li>
								</ol>
							</li>
							<li>
								MSE Loss function was the metric used for calculating loss
								during training. Adam’s Moment Estimation was used to train the
								model since the learning rates are adjusted automatically and
								hence manual tuning becomes less important.
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						<ol>
							<li>
								Eye-tracking was implemented with an average execution time of
								around 40 milliseconds when tested on an Intel Core i7-7500U
								processor operating at 2.70 GHz.
							</li>
							<li>
								If the blinks are consecutive within 750 milliseconds, then the
								system is turned on/off.
							</li>
							<li>
								ROS and Gazebo simulation of the wheelchair was successfully
								implemented.
							</li>
							<li>
								For the CNN model, K Fold Cross Validation gave a training Loss
								of 0.0979 and Validation Loss of 0.0107.
							</li>
						</ol>
					</div>
				),
				conc: (
					<div>
						Improving the accuracy of the convolutional neural network used and
						hardware implementation of the model using microcontrollers.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Speech to Text Converter',
			oneline:
				'This project on Speech Recognition converts speech (limited) to text with a fairly decent accuracy of about 93% with a processing speed of only 1.5 seconds approximately for an audio clip 2 seconds long on a trained model.',
			logo:
				'https://d1sr9z1pdl3mb7.cloudfront.net/wp-content/uploads/2018/01/09162857/voice-biometrics-large2.jpg',
			imgUrl: [
				'https://drive.google.com/file/d/1bPnu9ec-Q1WzDyGeW81eM4lFqKiGjUfk/preview',
				'https://drive.google.com/file/d/1ULC46VWpLCFEy4FtilZDyTIYmRR3DZsu/preview',
			],
			members: [
				'Anshuman Sinha',
				'Anshuman Sinha',
				'Kaveen S',
				'Ria Mishra',
				'Roopam Dhaneria',
				'Vishal Prakash',
			],
			description: {
				aim: (
					<div>
						Speech Recognition technology has become an increasingly popular
						concept in recent years. From organizations to individuals, the
						technology is widely used for various utilities it caters to. We can
						already see its applications in Google Assistant, Siri, Alexa, et
						cetera which have a very high accuracy rate of 95-97%. <br />
						This project on Speech Recognition converts speech (limited) to text
						with a fairly decent accuracy of about 93% with a processing speed
						of only 1.5 seconds approximately for an audio clip 2 seconds long
						on a trained model.
					</div>
				),
				meth: (
					<div>
						Primitive algorithms of speech processing like Hidden Markov Models
						and Mel-frequency cepstral coefficients (MFCCs) were explored
						theoretically and computationally. A dataset of 30 English words,
						amassing 2.21 GB of 64,728 sound recordings in total was chosen.
						MFCC matrices of each recording were generated and stored to ease
						the computational process involved in the 2nd part. <br />
						1D Convolutional Neural Network was deployed on the previously
						processed MFCCs to generate and train the model on the training
						dataset. Remarkable results rendering accuracies as high as 93% were
						recorded against the pre-trained model of accuracy 89.24% on the
						same dataset. <br />
						<iframe
							src="https://drive.google.com/file/d/1NaYBbmmz6IPs-8Hjn2qqKTt2zyUuxaXO/preview"
							width="640"
							height="480"
						></iframe>
						<br />
						An inbuilt set of functions was used to accept the input audio file
						and split it into different files according to the word occurrences
						in the audio segment, that uses the duration of pause in between
						words and the sound of noise in decibels to be treated as zero, as
						the 2 hyperparameters. <br />
					</div>
				),
				res: (
					<div>
						This project on Speech Recognition converts speech (limited) to text
						with a fairly decent accuracy of about 93% with a processing speed
						of only 1.5 seconds approximately for an audio clip 2 seconds long
						on a trained model. <br />
						<iframe
							src="https://drive.google.com/file/d/1ULC46VWpLCFEy4FtilZDyTIYmRR3DZsu/preview"
							width="640"
							height="480"
						></iframe>
						<br />
					</div>
				),
				con: <div>The Result is also the Conclusion.</div>,
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Wireless Solar charger',
			oneline:
				'To build a 10W portable, wireless solar lithium-ion battery charger. To harness maximum solar energy output, achieve MPPT(Max Power Point Tracking) and charge 8.4V lithium ion cells.',
			logo:
				'https://w0.pngwave.com/png/414/632/solar-panels-solar-power-voltaic-system-solar-energy-voltaics-solar-inverter-png-clip-art-thumbnail.png',
			imgUrl: [
				'https://drive.google.com/file/d/1Ktt7061k5CtmltDpJkWEu9pXEPpT785V/preview',
				'https://drive.google.com/file/d/1kbAaInOYkjIlmnZRbArNxZnYoAexDxFt/preview',
				'https://drive.google.com/file/d/1vDUZ3cCXG8aTbqZwjpEpzi3fw6t1OquT/preview',
				'https://drive.google.com/file/d/1kweJQLZeS9kHct7mFl8me0ABJlG0FlOk/preview',
				'https://drive.google.com/file/d/1TgT_hsuqerjQWJnRmnwasET-lA6pYpvd/preview',
				'https://drive.google.com/file/d/1ojs_-6t9h1ITFE4IkEd8ZNJZV8qWbs5p/preview',
				'https://drive.google.com/file/d/1W7ai43hMkHnzHiqNFjdJSbFKDpEeCAG4/preview',
				'https://drive.google.com/file/d/1nUIQPSwmJTC-pQR_eihdd1r9pvG2YKbh/preview',
				'https://drive.google.com/file/d/1Pl2Lj1mfnXlfHFuQK8CG2guwEHD9Z-Pa/preview',
				'https://drive.google.com/file/d/1sPf5RjFcSPWK5TYFgX1edA-RxBj5pIQ8/preview',
				'https://drive.google.com/file/d/1SE8dyfrmwOy3pYRh75iCZ8ToSuSbC35f/preview',
			],
			members: [
				'Prabhansh Pandey',
				'Majji Soma Varun',
				'Nihal',
				'Fouzan tinwala',
				'Amogh Manikkuwar',
				'Nisarg',
				'Keesara Vennela',
				'Fidha Palamthalakkal',
			],
			description: {
				aim: (
					<div>
						To build a 10W portable, wireless solar lithium-ion battery charger.
						To harness maximum solar energy output, achieve MPPT(Max Power Point
						Tracking) and charge 8.4V lithium ion cells.
					</div>
				),
				meth: (
					<div>
						The project was divided into various blocks -
						<ol>
							<li>Solar Panel</li>
							<li>MPPT tracker and Controller Block</li>
							<li>Transmitter block and Inverter</li>
							<li>Reciever block and Rectifier</li>
							<li>
								CCCV (Constant Current Constant Voltage) Battery Charger Block
							</li>
						</ol>
						<em>
							The Main Aim of this project was to build a 10 Watt Portable,
							Solar, Wireless Lithium Ion Charger.
						</em>{' '}
						<br />
						To achieve this, we took the following steps:-
						<ol>
							<li>Achieve Maximum Power Point Tracking</li>
							<li>Implement Wireless Transmitter and Receiver</li>
							<li>
								Implement CCCV (Constant Current - Constant Voltage) Battery
								Charging
							</li>
						</ol>{' '}
						<br />
						The project was divided into various blocks - solar panel, mpp
						tracker and controller block, transmitter block, reciever block and
						finally the CCCV (Constant Current Constant Voltage) battery charger
						block. A 10W Solar panel of short circuit current of 0.6A and open
						circuit voltage of 22V was chosen. The mppt tracker was using a buck
						converter. The microcontroller - ATMEGA328P was used to provide
						control signals to the MPP tracker and own signals for the
						transmitter. <br />
						The DC was converted to AC using an inverter and tansmission of
						power was achieved using a series RLC circuit. The receiver block
						consisted of a coil for receiving power and a rectifier in the next
						stage. The battery controller circuit ensures a constant charging
						current of 1A till the li-ion battery voltage reaches 8.4V and
						thereafter the battery is charged while maintaining a constant
						voltage of 8.4V across it. <br />
						Solar Panel : We are using a 10 Watt solar panel with mppt current
						of 0.7amp and 20 voltage.
					</div>
				),
				res: (
					<div>
						We performed a full Wireless solar charger model simulation in
						Simulink.
						<iframe
							src="https://drive.google.com/file/d/1TgT_hsuqerjQWJnRmnwasET-lA6pYpvd/preview"
							width="640"
							height="480"
						></iframe>
						<br />
						Here Yellow colour line represents the input power which slowly get
						saturated to 10 watt and blue colour line represents output power
						which saturates to 8.5 watt.
						<iframe
							src="https://drive.google.com/file/d/1ojs_-6t9h1ITFE4IkEd8ZNJZV8qWbs5p/preview"
							width="640"
							height="480"
						></iframe>
						<br />
						In the below figure yellow plot represents the output voltage
						received at receiver side which is oscillating at a frequency of
						20kHz due to inverter in transmitter side.Blue line represents the
						output voltage of batter which is 8.4 Volt.
						<iframe
							src="https://drive.google.com/file/d/1W7ai43hMkHnzHiqNFjdJSbFKDpEeCAG4/preview"
							width="640"
							height="480"
						></iframe>
						<br />
					</div>
				),

				con: <div>The Result is also the Conclusion.</div>,
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 5,
			name: 'Hardware Assisted SSL',
			logo:
				'https://res.cloudinary.com/dogygnvzl/image/upload/v1597416892/WhatsApp_Image_2020-08-12_at_8.10.31_PM_fidcuq.jpg',
			oneline:
				'Build a novel architecture for AES-128 cryptographic algorithm and implement on FPGA from scratch for improved speed performance.',
			imgUrl: [
				'https://drive.google.com/file/d/1bzG7xY9jAvip2WlCCxkaGiFtN61fncTE/preview',
				'https://drive.google.com/file/d/1NgX_R7gkVxzcJOWWmaFF788Dr5y8rwxo/preview',
				'https://drive.google.com/file/d/1UH_pU2WjG4QvBL5inkhn9cdJPEhbJ_uZ/preview',
				'https://drive.google.com/file/d/1iC7yKouuXrfk-RAln_ThpuK6NcfNlr7H/preview',
				'https://drive.google.com/file/d/1M2gdEHiixJ6k4NIHcjOzCdTM3UBr4asB/preview',
				'https://drive.google.com/file/d/1rhYZZBZxH4Gx1AT4y_SL3dwc-4JqmYbp/preview',
				'https://drive.google.com/file/d/1UAWxKadNVsZeLiVGzPYWSf2arCmAt4GV/preview',
				'https://drive.google.com/file/d/1hgoESKZmBr-bCajcUc5D9HbCpuhkz_4b/preview',
				'https://drive.google.com/file/d/1V8GbpPBBVENnTGnCXafkbKTbSGFFUkhQ/preview',
			],
			members: [
				'Aaron Sequeira',
				'Aditya Manjunath',
				'P. Priyankaa',
				'Divesh Sakhuja',
				'Ayush Agarwal',
				'Shridevi Kumar',
			],
			description: {
				aim: (
					<div>
						Build a novel architecture for AES-128 cryptographic algorithm and
						implement on FPGA from scratch for improved speed performance.
					</div>
				),
				meth: (
					<div>
						Github:{' '}
						<a href="https://github.com/PriyankaPeri/AES_FPGA-">
							https://github.com/PriyankaPeri/AES_FPGA-
						</a>{' '}
						<br />
						AES-128 is a symmetric key encryption algorithm that acts on 128
						bits of data. The message is encrypted in 10 rounds. AES implemented
						on a FPGA dedicates special resources hence speeding up the process.{' '}
						<br />
						The implementation of AES is done using pipelining to increase
						throughput. All blocks with the exception of SubBytes consist of
						only combinational logic as opposed to a look up table, reducing the
						delay. The architecture is as shown above. It includes blocks that
						execute the various stages which are substitution box, shift rows,
						mix columns and add round key. The keys for the next round are
						processed alongside the blocks while the messages are being
						encrypted, and hence there is no need to have a reserved resource to
						perform key expansion process. <br />
						The data is read 128 bits at a time from the memory. Data that
						precedes a null (or data with only zeroes) is interpreted as the key
						and the data that follows the key are interpreted as the message
						until the next null is encountered. <br />
						The project is coded in Verilog, a widely used Hardware Description
						Language. The link on the top contains the repository to the source
						code along with a README giving a short description of each of the
						sub-blocks.
					</div>
				),
				res: (
					<div>
						The simulation results for the various sub-block is given. The
						original and encrypted messages are shown in the console log.
						Architecture of the complete design is also given.
					</div>
				),
				con: (
					<div>
						We successfully managed to implement the function of AES-128 on
						Verilog and the simulations were verified and design was
						synthesised. The results can be easily extended to AES-192 and AES-
						256. Due to the Covid-19 pandemic and lack of access to hardware
						components, the block wasn’t implemented on a FPGA board. Future
						scope for the project includes implementing on VLSI, and integrating
						it with the other encryption methods for a unified SSL/TLS on chip.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 6,
			name: 'Medical Image Segmentation',
			logo:
				'https://upload.wikimedia.org/wikipedia/commons/6/6b/MI_with_contraction_bands_very_high_mag.jpg',
			oneline:
				'To segment nuclei from histopathology images for effective diagnosis and treatment of cancer.',
			imgUrl: [
				'https://drive.google.com/file/d/1bUuCLucFijQZ-E2oLmWIxD9bHmdKr-eq/preview',
				'https://drive.google.com/file/d/1LdtLceU7ZvafR2neamQImmA3sOsScT2b/preview',
				'https://drive.google.com/file/d/1nTBQTyWclm88-63e1IkdgNJ8K_NZFxDI/preview',
				'https://drive.google.com/file/d/1YUzuflHQttK6fMqFk_9wv6C_EfR04G97/preview',
				'https://drive.google.com/file/d/1p-bfoufwdkFnmf-EH0KWGARXAbhdGFde/preview',
			],
			members: [
				'Rohith Yatgiri',
				'Aditya Manjunath',
				'Shrutha D',
				'Sai Rohit P',
			],
			description: {
				aim: (
					<div>
						To segment nuclei from histopathology images for effective diagnosis
						and treatment of cancer.
					</div>
				),
				meth: (
					<div>
						<ol>
							<li>
								Preprocessing stage includes data augmentation to avoid over
								fitting.
							</li>
							<li>
								Building standard mobile architectures as reference models.
							</li>
							<li>These include UNET,Segnet,DANet.</li>
							<li>Training and testing on above mentioned architectures.</li>
							<li>
								Build other segmentation algorithm like deeplabv3,
								encoder-decoder etc
							</li>
							<li>
								Compare the results obtained from above algorithm with above
								architectures.{' '}
							</li>
							<li>
								Post Processing stage used to separate the boundaries of
								adjacent cells.
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						The following results have been obtained from various architectures.{' '}
						<br />
						The table shown below is a comparison between the train and test
						accuracies of different models. <br />
						<iframe
							src="https://drive.google.com/file/d/1p-bfoufwdkFnmf-EH0KWGARXAbhdGFde/preview"
							width="640"
							height="480"
						></iframe>
						<br />
						It can be seen that UNET yielded the highest results in both test
						and train sets. Following is a set of images which include Original
						Images(from the dataset), Ground Truth (Expected outcome which is
						also available in the dataset) and outputs from different
						architectures.
						<iframe
							src="https://drive.google.com/file/d/1YUzuflHQttK6fMqFk_9wv6C_EfR04G97/preview"
							width="640"
							height="480"
						></iframe>
					</div>
				),
				con: (
					<div>
						This work addresses some of the typical segmentation algorithms for
						medical images. Segmentation plays a vital role in telemedicine
						applications for the analysis of the region of interest. The
						algorithms are grouped into three generations, and the rank is
						assigned based on the comparative analysis of their features. The
						algorithms are tested on real-time data sets, and this work will be
						a guidance for the researchers in medical image segmentation. The
						hybrid segmentation algorithms are gaining much importance, as they
						produce superior results by overwhelming the limitations of
						conventional algorithms. A segmentation technique will not yield
						efficient result for all medical imaging modalities; based on the
						image modality and region of interest, appropriate algorithm has to
						be chosen. The outcome of this work will be an aid for the
						identification of diseases like cyst and tumor in medical images.
						Our future work will be a detailed analysis of hybrid segmentation
						models for the delineation of anatomical organs and anomalies.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
	],
	chronicle: [
		{
			id: 1,
			name: 'The Way you Make me Feel : Background Score Analysis',
			oneline:
				'To understand the purpose of background scores, to see how people react to different background scores and to understand the relation between different film genre and the various parameters like range, pace, pitch etc.',
			logo:
				'https://pocket-syndicated-images.s3.amazonaws.com/5d23458634dde.jpg',
			imgUrl: '',
			members: [
				'Keerthana Kanapuram',
				'Dwija Bagwe',
				'Joshitha Reddy Dongala',
				'Nitya Kuchimanchi',
				'Pratik Kumar Shivnani',
				'Sahana Praveen Bhandari',
				'Kumar Vitthal',
			],
			description: {
				aim: (
					<div>
						<ol>
							<li>To understand the purpose of background scores.</li>
							<li>To see how people react to different background scores</li>
							<li>
								To understand the relation between different film genre and the
								various parameters like range, pace, pitch etc.
							</li>
						</ol>
					</div>
				),
				meth: (
					<div>
						<ol>
							<li>Research on background scores and parameters. </li>
							<li>
								Parameters decided like range, pace, pitch etc. for the research
								and interviews.
							</li>
							<li>
								Conducting interviews to collect data on the audience reactions:
								<ol>
									<li>
										Referred to the research and decided on the questions.
									</li>
									<li>
										Picking background scores from TV shows and movies across
										various genres.
									</li>
									<li>Data collected through interviews.</li>
									<li>
										Based on the data collected, graphs and results were
										inferred.
									</li>
								</ol>
							</li>
							<li>
								A report was written based on the research, independent from the
								interviews.
								<ol>
									<li>
										A few movies/shows were selected and the background scores
										in these were analysed.
									</li>
									<li>
										The research done in the beginning helped in understanding
										how to go about the analysis.
									</li>
									<li>
										The data collected through the interviews were analysed to
										find patterns and anomalies.
									</li>
								</ol>
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						<ol>
							<li>
								We found the effect pace and range have on people’s perception
								of the scene.
							</li>
							<li>
								We found what helps people remember tunes and scenes better.{' '}
							</li>
							<li>Purpose of background scores for different movies/shows.</li>
						</ol>
					</div>
				),
				con: <div>The Result is also the Conclusion.</div>,
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Podcast',
			logo:
				'https://i.ytimg.com/vi/ghncaMrKq6w/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAAqzdow9jh60w4fFl_FzlzNOQNQw',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			//meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Short Film',
			logo:
				'https://www.legalzoom.com/sites/legalzoom.com/files/uploaded/articles/film.jpg',
			oneline:
				'The aim of the project is to create a short film from scratch and understand the creative process behind it.',
			imgUrl: '',
			members: [
				'Amodh Shenoy',
				'Ashwin R',
				'Nikhil Nair',
				'Amith Vijayan',
				'Shubhang Bhandarkar',
				'Bhajan Burman',
				'Chinmayi Ramakrishna',
				'Ankush Chandrashekhar',
				'Tarun M',
				'Anuja Goyal',
				'Adithya Santhosh',
				'Sri Nitya K',
				'Susmita Saha',
				'Roopam Dhaneria',
				'Kaveen Srikanth',
				'Pavan M',
				'Mohit Gupta',
				'Piyush Swami',
				'Anushrutha Tripathi',
			],
			description: {
				aim: (
					<div>
						The aim of the project is to create a short film from scratch and
						understand the creative process behind it.
					</div>
				),
				meth: (
					<div>
						<ol>
							<li>
								Discussing Ideas and brainstorming <br />
								Multiple ideas for the plot were discussed during several
								meetings with Chronicle and Create SIG members. Votes were taken
								and one final script was selected.
							</li>
							<li>
								Finalizing the idea and writing the script <br />
								Chronicle team members worked on the finalized idea and produced
								a script.{' '}
							</li>
							<li>
								Casting and figuring out the shooting requirements <br />
								Volunteers for the movie casting were auditioned and casted
								according to the character need{' '}
							</li>
							<li>
								Shooting the required scenes <br />
								Create members directed the movie and helped the cast shoot the
								videos. Due to the limitations such as time
								difference,quarantine restrictions and other limitations, the
								cast, apart from acting, also had to shoot the videos.
								Communication between Create members and the cast was done
								through video calls and all the directions about the camera
								settings were given online.{' '}
							</li>
							<li>
								Editing it all together <br />
								<iframe
									src="https://drive.google.com/file/d/1VzlWKIIsaIhMHis1_CkqZ56idL94H7vS/preview"
									width="640"
									height="480"
								></iframe>
								Using the modern softwares (adobe premiere pro and adobe after
								effects), the footage shot by the cast was edited by Create
								members and was processed to produce the full movie. <br />
								The initial draft was run through the project mentors and during
								reviews,we made some tweaks and changes to better suit the film.{' '}
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						<iframe
							src="https://drive.google.com/file/d/1FA0yLbIItpwJTzk9V7vdPzQ4k8miTp18/preview"
							width="640"
							height="480"
						></iframe>
						<iframe
							src="https://drive.google.com/file/d/1zoYMH5KaS_LY_wa3Y9rlJQaM4iQgHuEQ/preview"
							width="640"
							height="480"
						></iframe>
						<br />
						After some colour grading and adding a tinge of cinematic effect to
						the video we came up with the final results.
						<iframe
							src="https://drive.google.com/file/d/1-IA-FG1adOeJ0OlsLFKGhi5leeO_HQ1v/preview"
							width="640"
							height="480"
						></iframe>
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
	],
	clutch: [
		{
			id: 1,
			name: 'Simulation of exhaust back pressure for engine braking',
			logo:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1eYTAk6JZKfgMIfWyQA9NcK5Hju0A-mGVGg&usqp=CAU',
			oneline:
				'To simulate the models of KTM SX-F and KTM 390 on Ricardo Wave, To find the critical length and critical plate angle of the exhaust brake for each engine, To to analyse the models of KTM SX-F and KTM 390 engines with the exhaust brake and measure the effect on braking power and other engine parameters',
			imgUrl: '',
			members: [
				'Rahul Ravichandar',
				'R. Aswin',
				'Varun Ramadurai',
				'Raghav Ganesh',
				'Atharva Joshi',
				'Devika Harikrishnan',
				'Amogh Manikkuwar',
			],
			description: {
				aim: (
					<div>
						<ol>
							<li>
								To simulate the models of KTM SX-F and KTM 390 on Ricardo Wave
							</li>
							<li>
								To find the critical length and critical plate angle of the
								exhaust brake for each engine
							</li>
							<li>
								To to analyse the models of KTM SX-F and KTM 390 engines with
								the exhaust brake and measure the effect on braking power and
								other engine parameters
							</li>
						</ol>
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1zjpjxi7qOK8wHW6hs5TNfmY5MPueVKoL/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								KTM SX-F with Exhaust Brake
							</figcaption>
						</figure>
						<figure>
							<iframe
								src="https://drive.google.com/file/d/17RbJsmz2JkWFRbana_zBg8BOs3oohexZ/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								KTM 390 with Exhaust Brake
							</figcaption>
						</figure>
					</div>
				),
				meth: (
					<div>
						<em>Fixing Critical Plate Angle</em>
						<ol>
							<li>Plate Angle was varied from 0-90</li>
							<li>Brake Power stays just above 0, at 20 degrees</li>
							<li>Now Plate Angle is varied from 10 to 20</li>
							<li>Brake Power stays just above 0 at 11 degrees</li>
							<li>Now Plate Angle is varied from 10 to 11</li>
							<li>Brake Power stays above 0 at 10.4 degrees</li>
							<li>Least Positive Brake Power=0.121928 at 10.4 degrees.</li>
						</ol>
						<b>Critical Plate Angle = 10.4 Degrees</b>
						<br />
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1OxXjKxXHBDd0vqpp80w0EYmJLlLAtGhc/preview"
								width="210"
								height="200"
							></iframe>
							<iframe
								src="https://drive.google.com/file/d/1VEcMYBIKB_TwsJRxGbUD6X23qAMbJ3LD/preview"
								width="210"
								height="200"
							></iframe>
							<iframe
								src="https://drive.google.com/file/d/1tOEZSVK4eSFrBbmcbAd26iM-Z9kZs9z-/preview"
								width="210"
								height="200"
							></iframe>{' '}
						</figure>
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1aY9sUGlQgahe8Pp8onYOgwxAEMH87Bkp/preview"
								width="210"
								height="350"
							></iframe>
							<iframe
								src="https://drive.google.com/file/d/1P-wRol8i6rPOnD2JcASREeChFhXJPPU5/preview"
								width="210"
								height="350"
							></iframe>
							<iframe
								src="https://drive.google.com/file/d/1BZLzMlMviPVAfSyE1FT75ptv3a46Yzcw/preview"
								width="210"
								height="350"
							></iframe>
						</figure>
						<em>Fixing Duct 9 length</em>
						<ol>
							<li>
								The overall (duct 9 + duct 10) length = 310mm (kept constant)
							</li>
							<li>
								Duct 9 length was varied from 100 - 300mm in intervals of 25mm.
							</li>
							<li>BHP = 7.11 kW @9000RPM, and BHP = 0.04 kW @12000RPM.</li>
							<li>Hence,a length of 105mm for duct 9 was fixed.</li>
						</ol>
						<b>Duct 9 Length = 105mm</b>
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1E6DEl2nn3Xklb4ez4sY2AiEsTezP9-Gq/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								BHP Values for Duct 9 Lengths 100 - 300mm for 12000 RPM
							</figcaption>
						</figure>
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1kbl3hAU1bpFOzG-p7yfwcAcglOaqnEnQ/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								BHP Values for Duct 9 Lengths 100 - 125mm for 12000 RPM
							</figcaption>
						</figure>
						<em>Fixing Duct 8 length</em>
						<ol>
							<li>
								Simulations were carried out for lengths ranging from 40-70mm.
							</li>
							<li>
								These below distances are calculated by keeping duct 9 fixed.
							</li>
							<li>BHP = 7.192 kW @9000RPM, and BHP = 0.081 kW @12000RPM.</li>
							<li>Hence,a length of 35mm for duct 8 was fixed.</li>
						</ol>
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1KBW1Xjg1Zmyw16PteKhAzWqS7zvl_2V9/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								BHP Values for Duct 8 Lengths 30 - 70mm for 12000 RPM
							</figcaption>
						</figure>
						Following similar Methodology, We recorded the following
						observations for the KTM 390 engine.
						<ol>
							<li>Critical Plate Angle: 11.3 deg</li>
							<li>Critical Duct Length 18: 195 mm</li>
							<li>Critical Duct Length 19: 305 mm</li>
						</ol>
					</div>
				),
				res: (
					<div>
						The following parameters compared with the model with no exhaust
						braking:
						<ol>
							<li>
								Brake Power vs RPM
								<iframe
									src="https://drive.google.com/file/d/1hnQIUF9OGnNFlOu6h8hOu9xcfbt3vI5W/preview"
									width="640"
									height="480"
								></iframe>
								<iframe
									src="https://drive.google.com/file/d/1D94Ero9kRQfhDj2BpunkTBw_WAJ116D9/preview"
									width="640"
									height="480"
								></iframe>
							</li>
							<li>
								Brake Torque vs RPM <br />
								Same percentage reduction observed
							</li>
							<li>
								Brake Mean Effective Pressure vs RPM <br />
								Same percentage reduction observed
							</li>
							<li>
								Friction Heat Energy loss
								<iframe
									src="https://drive.google.com/file/d/1FXx-j3_qMKJcVvU0P6F8c9n8z0QD1QUH/preview"
									width="640"
									height="480"
								></iframe>
							</li>
							<li>
								Cylinder Temperatures
								<iframe
									src="https://drive.google.com/file/d/1_easbA54CJBwbpg5nY-OcRaGHYRRkRWd/preview"
									width="640"
									height="480"
								></iframe>
							</li>
							<li>
								Pressure vs Crank Angle
								<iframe
									src="https://drive.google.com/file/d/1se2YyRCMCz45kqQdXy7cTC_vXIh_FzCU/preview"
									width="640"
									height="480"
								></iframe>
							</li>
						</ol>
						The same parameters were analysed for the KTM 390 engine and the
						observations were recorded as follows
						<ol>
							<li>
								Brake Power vs RPM <br />
								Maximum percentage decrease = 99.94% @12000 rpm
							</li>

							<li>
								Brake Torque vs RPM <br />
								Maximum percentage decrease = 99.94% @12000 rpm
							</li>

							<li>
								Brake Mean Effective Pressure vs RPM <br />
								Maximum percentage decrease = 99.94% @12000 rpm
							</li>

							<li>
								Friction Heat Energy Loss <br />
								Maximum percentage increase = 70.18% @10000 rpm
							</li>

							<li>
								Temperature of Cylinder <br />
								% Reduction at Peak-1: 6.26 % <br />% Increase at Peak-2 : 11.9
								%
							</li>

							<li>
								Pressure vs Crank Angle <br />
								% Reduction in Peak-1: 29.01 % <br />% Increase in Peak-2 : 129
								%
							</li>
						</ol>
					</div>
				),
				con: (
					<div>
						<ol>
							<li>Viable potential for a secondary brake system</li>
							<li>
								Deeper understanding of the working and structure of an IC
								engine
							</li>
							<li>An understanding of 1D fluid flow modelling and software</li>
						</ol>
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Exhaust tuning of IC Enginez',
			logo:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQGLUhB27gINVnO-8Kp78q8M3FVt9QeJb3uQ&usqp=CAU',
			oneline:
				'The Aim of this project is to tune a KTM 390 engine’s performance to achieve peak torque at a low rpm by optimising the runner length.',
			imgUrl: [
				'https://drive.google.com/file/d/1Y418WOw0xp6Vc6T8INKNdm583IZWyRWy/preview',
				'https://drive.google.com/file/d/1GDjcp-uygUpAagvSjuv-hCrDjW8BFtG6/preview',
				'https://drive.google.com/file/d/13IlcEbprdPhUr52mQLs43SjoCpZ2k6Jf/preview',
				'https://drive.google.com/file/d/1DUwWrmcFBSGfsKMa9cnYQG6NIcaaELVx/preview',
				'https://drive.google.com/file/d/1piBjjf7V8a-a3Nrgiy4C53GFYCaRd-ZY/preview',
			],
			members: ['Raahul Ravichander', 'R Aswin', 'BH S R Karthik Varma'],
			description: {
				aim: (
					<div>
						The Aim of this project is to tune a KTM 390 engine’s performance to
						achieve peak torque at a low rpm by optimising the runner length.
					</div>
				),
				meth: (
					<div>
						WAVE is used throughout the engine design process because it is the
						ideal tool for things such as improving volumetric efficiency,
						designing complex boosting systems, improving transient response or
						extracting the maximum performance from a race engine. <br />
						Computer simulation has been used extensively in the development of
						intake and exhaust systems worldwide. The use of computer simulation
						does not allow the designers to overlook the mathematical models,
						which have defined engine characteristics based on the operating
						parameters. Two of the very important phenomena which describe the
						wave theory in the manifolds with mathematical models are: Helmholtz
						Resonance and Reflective Wave Theory. <br /> <br />
						<em>Helmholtz Resonator Theory:</em> <br />
						Helmholtz theory basically works on the theory of harmony. As air
						(or any gas) tries to ram into the resonator through its neck, the
						pressure inside the cavity increases and the air bounces out, but
						while bouncing out quickly due to inertia, it creates a partial
						vacuum near the neck of the resonator and the air is again sucked
						in. <br /> <br />
						<em>Reflected Wave Theory:</em> <br />
						The pressure wave moves down the pipe at the sum of the local sonic
						velocity plus the particle velocity of the gas flow. Whenever the
						pressure wave encounters a change in the cross-sectional area of the
						pipe, a reflected pressure wave is generated, which travels in the
						opposite direction. If the change in area is increasing (a step,
						collector, or opening to the atmosphere), the sense of the reflected
						pressure wave is inverted. The time taken by the wave moving at
						acoustic speeds to travel down the length of exhaust manifold and be
						reflected back to the exhaust valve is determined by the speed of
						the engine, which in-turn is defined for gaining the maximum
						performance by the Reflective Wave theory. <br /> <br />
						<em>Engine Specifications:</em> <br />
						In this project, KTM 390 which is a single cylinder spark ignition
						four valve, four stroke engine was modelled in Ricardo WAVE software
						and the model is shown in the figure below
						<figure>
							<iframe
								src="https://drive.google.com/file/d/1nRaphs4q-RpbQevu9QKVi1nmYbERs2gT/preview"
								width="640"
								height="480"
							></iframe>
							<figcaption style={{ 'text-align': 'center' }}>
								Engine specifications
							</figcaption>
						</figure>
					</div>
				),
				res: (
					<ol>
						<li>
							Continuously Varying Exhaust Pipe Length: <br />
							After modelling the KTM 390 engine the exhaust runner is varied
							from 200mm to 1000mm with a step of 50mm and RPM of the engine is
							varied from 2000 to 9000 with a step of 500 RPM.
						</li>
						<li>
							Brake Torque: <br />
							<iframe
								src="https://drive.google.com/file/d/13IlcEbprdPhUr52mQLs43SjoCpZ2k6Jf/preview"
								width="640"
								height="480"
							></iframe>
						</li>
						<li>
							Brake Power: <br />
							<iframe
								src="https://drive.google.com/file/d/1DUwWrmcFBSGfsKMa9cnYQG6NIcaaELVx/preview"
								width="640"
								height="480"
							></iframe>
						</li>
						<li>
							Volumetric Efficiency: <br />
							<iframe
								src="https://drive.google.com/file/d/1piBjjf7V8a-a3Nrgiy4C53GFYCaRd-ZY/preview"
								width="640"
								height="480"
							></iframe>
						</li>
					</ol>
				),
				con: (
					<div>
						The pressure wave which travels back and forth inside the exhaust
						manifold, and if tuned correctly, it will return just before the
						valve closing event as a rarefaction wave and produce negative
						pressure at the valve opening, which results in a scavenging effect
						and pushes the residual exhaust gases out more. The progressive
						pressure wave tuning of the exhaust system has a significant effect
						on the engine’s power and torque characteristics. In this project
						the length of the exhaust runner of a KTM 390 Engine varied to tune
						the pressure wave. <br />
						<b>
							<em>
								It was found that the max volumetric efficiency and Brake torque
								are obtained around 550mm.
							</em>
						</b>{' '}
						So making the exhaust runner length to 550mm can help us achieve
						peak torque and peak volumetric efficiency. <br />
						Thus, tuning the exhaust runner length and diameter have a
						significant effect on the torque and power produced by the engine.
						In this project only tuning of exhaust runner by changing the length
						is made, but this can be extended by changing the area of the runner
						and also the same principle can be applied to the inlet runner.{' '}
						<br />
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Energy efficient glider for delivery',
			logo:
				'https://www.fai.org/sites/default/files/styles/article_detail_xxlarge/public/mini-lak-4.jpg?itok=_1im8SxT',
			oneline:
				'The aim of this project is to design an aerodynamic glider and analyse its aerodynamic aspects.',
			imgUrl: [
				'https://drive.google.com/file/d/12O7JhDF61kPVLTuVMHLubFf9elywOg3U/preview',
				'https://drive.google.com/file/d/1vDwVf8FflYbVgQC8Px_YwskrMPwcrrSP/preview',
				'https://drive.google.com/file/d/1eln5zKSaXWWhpYq_kUDzzCUmj9eVUdE6/preview',
				'https://drive.google.com/file/d/1c9DayC8jAELeKLQ0IzuBroaw5df50Udh/preview',
				'https://drive.google.com/file/d/1Jd4tgCZz0HwYHVyT9EDpoSSrHw8gKa0b/preview',
				'https://drive.google.com/file/d/1nja8RYJ1n2O1ierAYSFZ_3gh6uVGwpBj/preview',
				'https://drive.google.com/file/d/1kOjvue9JwlNd8LjE_GeVBo_n6dMo12Qv/preview',
				'https://drive.google.com/file/d/1RoG_6iVUY0jeJtZ6XqK0vG1kj7zITMyR/preview',
				'https://drive.google.com/file/d/1NJv8ORBc8iM0IlKvkG1kym7Qx8lN5aPB/preview',
				'https://drive.google.com/file/d/1icDm6o5VEwQMIgPQC59PuTVHXoes_hn9/preview',
				'https://drive.google.com/file/d/1Npsg-eiVOe2HOKlIQ2MQzcCfiCeYppqz/preview',
			],
			members: [
				'Nikhil Varghese',
				'Bikram Sarkar',
				'BH SR Karthik Varma',
				'Abhishek Choudary',
				'Hassan Kausar',
				'Ananta Shanbhag',
				'Cyriac Talus',
				'Devika Harikrishnan',
				'Raghav Ganesh',
				'Shivraj Lingaraj Dharwad',
			],
			description: {
				aim: (
					<div>
						The aim of this project is to design an aerodynamic glider and
						analyse its aerodynamic aspects.
					</div>
				),
				meth: (
					<div>
						<ol>
							<li>
								Selection of Airfoils <br />
								Generally the gliders fly in the Reynolds no range of 100,000 to
								500,000. A set of high performance low Reynolds airfoils were
								analysed using XFLR to find the airfoils for our glider plane.
								Among them SG6043 and NACA 0016 are selected for wing and
								stabilizers respectively. <br />
								The comparison and results can be found in the following link :{' '}
								<a href="https://docs.google.com/spreadsheets/d/1KfQGzFHSGMFy9OxDq0pG3A9auGWP8gV9XLGePMB-B-w/edit#gid=0">
									Airfoil Data
								</a>
							</li>
							<li>
								Finding the 3d parameters of the glider <br />
								<ol>
									<li>
										Selection of type of wing: <br />
										To make the contructable design of the glider the span of
										the wing has been chosen to be 1.2m and the root chord is
										chosen as 120mm. <br />
										The following types of wings are analysed :
										<ol>
											<li>Rectangle wing</li>
											<li>Taper at front wing</li>
											<li>Taper at back wing </li>
											<li>Swept back wing</li>
										</ol>
										Among these wings Taper at front has been chosen as it has
										more coefficient of lift and drag
										<iframe
											src="https://drive.google.com/file/d/12O7JhDF61kPVLTuVMHLubFf9elywOg3U/preview"
											width="640"
											height="480"
										></iframe>
										<figcaption style={{ 'text-align': 'center' }}>
											Comparison of different types of wings
										</figcaption>
										Similar type of analysis has been done to select Taper
										Ratio. It is observed that the coefficient of lift and drag
										increases with decrease in TR(but the increase is not that
										significant) when dimensionalized, the wing with higher TR
										will be having higher lift and drag force. So an Taper ratio
										of 0.75 have been chosen.
										<iframe
											src="https://drive.google.com/file/d/1vDwVf8FflYbVgQC8Px_YwskrMPwcrrSP/preview"
											width="640"
											height="480"
										></iframe>
										<figcaption style={{ 'text-align': 'center' }}>
											Comparison of wing with different Taper ratios
										</figcaption>
									</li>
									<li>
										To find the dimensions of glider
										<iframe
											src="https://drive.google.com/file/d/1eln5zKSaXWWhpYq_kUDzzCUmj9eVUdE6/preview"
											width="640"
											height="480"
										></iframe>
										<figcaption style={{ 'text-align': 'center' }}>
											Parameters of the glider
										</figcaption>
										To find the above parameters analysis have been done with
										different values of x,y,z
										<figure>
											<iframe
												src="https://drive.google.com/file/d/1c9DayC8jAELeKLQ0IzuBroaw5df50Udh/preview"
												width="185"
												height="200"
											></iframe>
											<iframe
												src="https://drive.google.com/file/d/1Jd4tgCZz0HwYHVyT9EDpoSSrHw8gKa0b/preview"
												width="185"
												height="200"
											></iframe>
											<iframe
												src="https://drive.google.com/file/d/1nja8RYJ1n2O1ierAYSFZ_3gh6uVGwpBj/preview"
												width="185"
												height="200"
											></iframe>
											<figcaption style={{ 'text-align': 'center' }}>
												Variation of x,y,z
											</figcaption>
										</figure>
										By comparing with the results the parameters which were
										chosen are <br />
										x= 192mm
										<br />
										y= 900mm
										<br />
										z= 10mm
									</li>
								</ol>
								<li>
									Fuselage Design <br />
									To design a fuselage, first we have designed a 2d shape of the
									fuselage. To design 2d shape we have started with a 900mm x
									90mm rectangle and changed the leading edge and found that the
									elliptical leading edge has least drag.
									<table style={{ width: '100%', border: '1' }}>
										<tr>
											<th>Shape</th>
											<th>Drag</th>
										</tr>
										<tr>
											<td>Perpendicular leading edge</td>
											<td>6.0163421</td>
										</tr>
										<tr>
											<td>Circular leading edge</td>
											<td>2.4027675</td>
										</tr>
										<tr>
											<td>double angled leading edge</td>
											<td>2.2755217</td>
										</tr>
										<tr>
											<td>angled leading edge</td>
											<td>3.864284</td>
										</tr>
										<tr>
											<td>semi circular leading edge</td>
											<td>3.7124726</td>
										</tr>
										<tr>
											<td>semi elliptical leading edge</td>
											<td>3.4823547</td>
										</tr>
										<tr>
											<td>elliptical leading edge</td>
											<td>2.2602286</td>
										</tr>
									</table>
									<br />
									Using an elliptic leading edge a fuselage shape is generated
									in the solidworks, then it is divided into sections and by
									changing the dimensions at these sections different shapes
									have been generated and these shapes were analysed using
									ansys.
									<figure>
										<iframe
											src="https://drive.google.com/file/d/1kOjvue9JwlNd8LjE_GeVBo_n6dMo12Qv/preview"
											width="290"
											height="200"
										></iframe>
										<iframe
											src="https://drive.google.com/file/d/1RoG_6iVUY0jeJtZ6XqK0vG1kj7zITMyR/preview"
											width="290"
											height="200"
										></iframe>
										<iframe
											src="https://drive.google.com/file/d/1NJv8ORBc8iM0IlKvkG1kym7Qx8lN5aPB/preview"
											width="290"
											height="200"
										></iframe>
										<iframe
											src="https://drive.google.com/file/d/1icDm6o5VEwQMIgPQC59PuTVHXoes_hn9/preview"
											width="290"
											height="200"
										></iframe>
										<figcaption style={{ 'text-align': 'center' }}>
											Shape 1,2,3,4
										</figcaption>
									</figure>
									<table style={{ width: '100%', border: '1' }}>
										<tr>
											<th>Shape</th>
											<th>Drag</th>
										</tr>
										<tr>
											<td>1</td>
											<td>1.2134583</td>
										</tr>
										<tr>
											<td>2</td>
											<td>1.2304162</td>
										</tr>
										<tr>
											<td>3</td>
											<td>1.1836572</td>
										</tr>
										<tr>
											<td>4</td>
											<td>1.2528237</td>
										</tr>
									</table>
									After selecting a 2d shape, 3d shapes have been generated with
									different ellipses and analysed using ansys and it was found
									that the higher the ratio of horizontal radius to vertical
									ratio higher is the drag so the ratio of 1.1 is selected.
								</li>
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						<ol>
							<li>
								Glider Assembly <br />
								The assembly of the glider is made in Solidworks.
								<iframe
									src="https://drive.google.com/file/d/1w2wTP2V2ayid5YtlcGOXJIw2lLNKtTPg/preview"
									width="640"
									height="480"
								></iframe>
							</li>
							<li>
								Stability Analysis <br />
								For the plane to be stable the prerequisites are
								<ol>
									<li>The slope of Cm vs AoA should be negative</li>
									<li>
										It should have a positive coefficient of lift at zero Cm
									</li>
									<li>Should have a positive AoA at zero Cm.</li>
								</ol>
								To make the fly stable, the components have been distributed in
								such a way that the COG lies at (243.8, 0, 2.780).
								<iframe
									src="https://drive.google.com/file/d/1Npsg-eiVOe2HOKlIQ2MQzcCfiCeYppqz/preview"
									width="640"
									height="480"
								></iframe>
								It can be observed that the curve cuts the x-axis at around
								2degree AoA, which means that the plane flies stability at
								around 2degree AoA which implies that the plane will have
								positive lift at stable flight. <br />
								Similarly stability analysis has been and the results are been
								recorded in the video In stability analysis there will a
								disturbance given to the plane will check in how much time it
								will reach stability. <br />
								<iframe
									src="https://drive.google.com/file/d/13Ws-07K6IWYVAUmEAe3s1BwakuCK8MM-/preview"
									width="640"
									height="480"
								></iframe>
							</li>
						</ol>
					</div>
				),
				con: (
					<div>
						In this project we have made a simulink model of a plane which can
						be controlled using joystick and can be simulated in flight gear and
						simulink 3D.
						<iframe
							src="https://drive.google.com/file/d/15FbySynfCj0IJD1c3q4vWXaf8Vt8y3fh/preview"
							width="715"
							height="480"
						></iframe>
						<figcaption style={{ 'text-align': 'center' }}>
							Simulink model of plane
						</figcaption>
						But the problem with this model is that it uses parameters of the
						RCAM model, and to make it work for our model the equations of
						forces and moments should be changed but it is not possible with
						simulations and require wind tunnel testing of a physical model.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Alloy Recommender System',
			logo:
				'https://s3.amazonaws.com/prod-www-blackline-com/blog/wp-content/uploads/2019/01/29163118/A-Conversation-With-BlackLines-Machine-Learning-Experts-720x405.jpg',
			oneline:
				'Build an alloy recommender system that gives theoretical composition of a hypothetical alloy with required mechanical property',
			imgUrl: [
				'https://drive.google.com/file/d/12tsstjYKeqfrwU5BaLCwRBmmRHln_swf/preview',
				'https://drive.google.com/file/d/1_QCo-3faIQWdhqF0YcgjX_qA_GwwadXS/preview',
				'https://drive.google.com/file/d/1Ek9GOAJMP2VKnjyEqc79Q9tdOV2CBeT4/preview',
				'https://drive.google.com/file/d/1GjuvLhBriTQxIfmm6yaqyaHv9kc-fV8o/preview',
				'https://drive.google.com/file/d/1Iqczub3OZl4WVBZLsPJnQT6Wwjiuf8TX/preview',
				'https://drive.google.com/file/d/1XMM3SfOqFKdYZ-80Ya3Sqt_84JIxMSes/preview',
				'https://drive.google.com/file/d/1r1p6LnlsxIzQuDEUn6WzQFQD0_x5J5xX/preview',
				'https://drive.google.com/file/d/1FqHc0FK8kDCXPWkQuA_XvTlJechB5KHV/preview',
				'https://drive.google.com/file/d/1y3nr6dfS6u-xx9Iy14PkTZ_8_XjcZuZP/preview',
			],
			members: [
				'Mrutyunjay',
				'Rakesh',
				'Shreyas',
				'Prakruti',
				'Pavan C',
				'Ayush',
				'Sakshi',
			],
			description: {
				aim: (
					<div>
						Build an alloy recommender system that gives theoretical composition
						of a hypothetical alloy with required mechanical property.
					</div>
				),
				meth: (
					<div>
						<iframe
							src="https://drive.google.com/file/d/1GjuvLhBriTQxIfmm6yaqyaHv9kc-fV8o/preview"
							width="640"
							height="480"
						></iframe>
						<ol>
							<li>
								Web Scraping the alloy properties from the web:
								<ol>
									<li>
										Used python’s requests and Beautiful Soup libraries to
										scrape and parse the HTML code from various online sources.
									</li>
									<li>
										Then built a python script for preprocessing collected raw
										data using Pandas library.
									</li>
								</ol>
							</li>
							<li>
								Building an Artificial Neural Network Model: <br />
								Keras and Scikit-learn python libraries were used for building a
								multi- layer perceptron Neural Network model.
								<ol>
									<li>
										Loading Dataset:
										<ol>
											<li>
												Using Pandas we loaded the dataset into the memory.
											</li>
											<li>
												Split the columns of the dataset into input and output
												variables.
											</li>
											<li>
												Used train_test_split from scikit_learn package to split
												the dataset into a training and testing set.
											</li>
											<li>Normalize them using minmax_scale function</li>
										</ol>
									</li>
									<li>
										Define and compile Keras NN model: <br />
										<ol>
											<li>Created a MLP using Sequential API from Keras</li>
											<li>
												Layers used:Input to define the input layer and Dense
												module for hidden and the output layer.
											</li>
											<li>
												Activations: Relu for hidden layers and linear for
												output layer
											</li>
											<li>Loss:Mean Squared Error(mse)</li>
										</ol>
									</li>
									<li>
										Training and Performance Evaluation: <br />
										<ol>
											<li>
												Trained model on our training data by calling the fit()
												function.
											</li>
											<li>
												Using predict() function we predict the values of
												mechanical properties for the testing set. Evaluate the
												model based on mean squared error and R2 score.
											</li>
										</ol>
									</li>
								</ol>
							</li>
							<li>
								Improve model’s accuracy:
								<ol>
									<li>
										Hyper parameter tuning : Using GridSearchCV function from
										sklearn,we optimised the number of neurons in the hidden
										layers ,thus getting the best architecture.
									</li>
									<li>
										Employed 5-Fold Cross Validation for increasing reliability
										of tuned parameters
									</li>
									<li>Introduced Dropout layer to overcome overfitting.</li>
								</ol>
							</li>
							<li>
								Genetic Algorithm
								<iframe
									src="https://drive.google.com/file/d/1Iqczub3OZl4WVBZLsPJnQT6Wwjiuf8TX/preview"
									width="640"
									height="480"
								></iframe>
								<ol>
									<li>
										Takes as Input a desired Mechanical Property and tries to
										find the theoretical composition by playing a “guessing
										game” with trained Neural Network
									</li>
									<li>
										Each solution/guess has associated “fitness” associated that
										helps pick out good guesses from bad ones
									</li>
									<li>
										Eventually GA is able to converge to desired mechanical
										property.
									</li>
									<li>Library used:PyGAD</li>
								</ol>
							</li>
							<li>
								GUI
								<ol>
									<li>
										After building the genetic algorithm model we have created a
										Graphical User Interface (GUI) to interact with the model.
									</li>
									<li>Libraries used:tkinter,PIL</li>
								</ol>
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						Prediction plots for Shear Modulus, Density and Specific Heat
						Capacity for Iron alloys
						<iframe
							src="https://drive.google.com/file/d/1r1p6LnlsxIzQuDEUn6WzQFQD0_x5J5xX/preview"
							width="235"
							height="200"
						></iframe>
						<iframe
							src="https://drive.google.com/file/d/1_QCo-3faIQWdhqF0YcgjX_qA_GwwadXS/preview"
							width="235"
							height="200"
						></iframe>
						<iframe
							src="https://drive.google.com/file/d/1XMM3SfOqFKdYZ-80Ya3Sqt_84JIxMSes/preview"
							width="235"
							height="200"
						></iframe>
						Prediction plot for Tensile Strength(TS),Yield Strength(YS) and
						Elongation Limit(EL) for Steels
						<iframe
							src="https://drive.google.com/file/d/1FqHc0FK8kDCXPWkQuA_XvTlJechB5KHV/preview"
							width="235"
							height="200"
						></iframe>
						<iframe
							src="https://drive.google.com/file/d/1y3nr6dfS6u-xx9Iy14PkTZ_8_XjcZuZP/preview"
							width="235"
							height="200"
						></iframe>
						<iframe
							src="https://drive.google.com/file/d/1Ek9GOAJMP2VKnjyEqc79Q9tdOV2CBeT4/preview"
							width="235"
							height="200"
						></iframe>
						Since the graphs of predicted property v/s actual property closely
						resemble the y=x line;we conclude that our Neural Network is able to
						map the inputs to mechanical properties to an acceptable accuracy{' '}
						<br />
						Our genetic algorithm is able to estimate alloy composition given
						target property to an acceptable tolerance.
					</div>
				),
				con: <div>The Result is also the Conclusion.</div>,
			},
			//meetLink: 'This is the meet link',
		},
	],
	concrete: [
		{
			id: 1,
			oneline:
				'Design and Analysis of a Green Commercial Complex equipped with a Food Court in an Eco-Friendly and Sustainable manner within the NITK Campus in Revit using Building Information Modelling (BIM).',
			logo:
				'https://www.elevatorimagazine.com/wp-content/uploads/2018/01/corsi-di-autocad-disegni-dwg-a-trieste.jpg',
			name: 'Design of a Green Commercial Complex in NITK using BIM',
			imgUrl: [
				'https://drive.google.com/file/d/1vX-hKt3NfdqysLZVyYkfTxJ_7Ojz452T/preview',
				'https://drive.google.com/file/d/14b4y2JctYZ4tLqcjah4-yECto_AlZKaf/preview',
				'https://drive.google.com/file/d/1nZxkWxQWoGoOfplfDJBpuds9-GfQMd4c/preview',
				'https://drive.google.com/file/d/1mgsRb9ADoNL9toEhWa6CIZqER8S_-6kT/preview',
				'https://drive.google.com/file/d/1aHAb-qesLqMQnN2_eyVuJET8Qc6TFSgE/preview',
				'https://drive.google.com/file/d/1zvLvbRK-jPdogkfpLTYXrQ9IAGioH_bK/preview',
				'https://drive.google.com/file/d/123nCz-GmF2h7KFHnNr2GwuJaodUab54w/preview',
				'https://drive.google.com/file/d/1nCsUZIHvjC1jTJKfKO55VGjx_AAjNG6J/preview',
				'https://drive.google.com/file/d/1uxs7zllxuyVBFTSNf9zeXpJa7_vUbbs3/preview',
				'https://drive.google.com/file/d/1A-ebcQRYmsMV01mBt-eweyxv8HKN7JVD/preview',
			],
			members: [
				'Niveditha',
				'Vineet Pujari',
				'Drishti Rawat',
				'Suraj Kumar L',
				'Imtiaz Abdul Gafur',
				'Keval Vaghamshi',
				'Ranjeet Sonawane',
			],
			description: {
				aim: (
					<div>
						Design and Analysis of a Green Commercial Complex equipped with a
						Food Court in an Eco-Friendly and Sustainable manner within the NITK
						Campus in Revit using Building Information Modelling (BIM).
					</div>
				),
				meth: (
					<div>
						<ol style={{ listStyleType: 'disc' }}>
							<li>
								Getting familiar with BIM Concepts and Green Building
								Requirements
							</li>
							<li>Learning Revit Software</li>
							<li>
								Learn From Case Studies
								<br />
								<ol style={{ listStyleType: 'circle' }}>
									<li>
										Sustainable Buildings: Sustainable Behaviour? - John Lester
										Clark
									</li>
									<li>Suzlon One Earth , Pune - Kavita D Jain</li>
									<li>
										The Smart Use Of Glass In Sustainable Buildings - Glass for
										Europe
									</li>
									<li>
										GreenBuilding Information Modelling - Phillip G. Bernstein
									</li>
									<li>
										{' '}
										(BIM) and Energy Analysis Tools With Green Building
										Certification System To Conceptually Design Sustainable
										Building - Farzad Jalaei and Ahmad Jrade
									</li>
									<li>
										Griha Manual - Ministry of New and Renewable Energy,
										Government of India
									</li>
									<li>
										Sustainable Design and Building Information Modelling -
										Boris Ceranic, Derek Latham, Angela Dean
									</li>
								</ol>
							</li>
							<li>Choosing Location</li>
							<li>Modelling the Green Commercial Complex</li>
							<li>
								Find and Use Eco-friendly and Sustainable Materials
								<br />
								<ol style={{ listStyleType: 'circle', fontWeight: 'lighter' }}>
									<li>Steel (crs/epoxy coated)</li>
									<li>Lightweight Concrete Blocks ( First Floor )</li>
									<li>Cement Sheets ( Roof; Low Cost )</li>
									<li>Glazed/Double wall Glass ( insulation )</li>
									<li>Kota Stone ( Corridors; local )</li>
									<li>Tin Dioxide Coated Windows ( Low e windows)</li>
									<li>Bamboo</li>
									<li>Wooled Bricks</li>
									<li>Reclaimed Wood ( From Ships )</li>
									<li>Simple Tiles ( Flooring )</li>
								</ol>
							</li>
							<li>
								Implement Green Designs
								<ol style={{ listStyleType: 'circle', fontWeight: 'lighter' }}>
									<li>Green Roof</li>
									<li>Solar Panels</li>
									<li>Door Frames (recycled materials)</li>
									<li>Flyash for RCC</li>
									<li>Self Induced Passage Cooling</li>
									<li>Access for all</li>
									<li>Thermal Storage Cooling System</li>
									<li>Double Glazed Windows</li>
									<li>Light Colored Materials</li>
									<li>Louvers</li>
									<li>Bamboo Shadings</li>
									<li>Waste to Energy Strategies on Site</li>
								</ol>
							</li>
							<li>Complete Revit Design</li>
						</ol>
					</div>
				),
				res: (
					<div>
						Location
						<br />
						<ol style={{ listStyleType: 'disc' }}>
							<li>South Facing</li>
							<li>Road Side</li>
							<li>Daylight Exposure</li>
							<li>Convenience</li>
							<li>Perimeter of ~ 131 m</li>
							<li>Area of ~ 1069 m2</li>
						</ol>
						<br />
						<iframe
							src="https://drive.google.com/file/d/1oZxAci8p2gvN1gEUHQucVlFTlHzggpPk/preview"
							width="640"
							height="300"
						></iframe>
						<br />
						<br />
						<iframe
							src="https://drive.google.com/file/d/1bsbvWeLjtrdGZj5IKnFBpeHW9TR4POmK/preview"
							width="640"
							height="300"
						></iframe>
						<br />
						<br />
						First Floor plan <br />
						<iframe
							src="https://drive.google.com/file/d/1nCsUZIHvjC1jTJKfKO55VGjx_AAjNG6J/preview"
							width="500"
							height="480"
						></iframe>
						<br />
						<br />
						Groud Floor plan <br />
						<iframe
							src="https://drive.google.com/file/d/1mgsRb9ADoNL9toEhWa6CIZqER8S_-6kT/preview"
							width="500"
							height="480"
						></iframe>
						<br />
						<br />
						Top and Frontal View <br />
						<iframe
							src="https://drive.google.com/file/d/1A-ebcQRYmsMV01mBt-eweyxv8HKN7JVD/preview"
							width="500"
							height="480"
						></iframe>
						<br />
						<br />
						Top View <br />
						<iframe
							src="https://drive.google.com/file/d/123nCz-GmF2h7KFHnNr2GwuJaodUab54w/preview"
							width="500"
							height="480"
						></iframe>
						<br />
						<br />
						Final Design <br />
						<iframe
							src="https://drive.google.com/file/d/1aHAb-qesLqMQnN2_eyVuJET8Qc6TFSgE/preview"
							width="640"
							height="480"
						></iframe>{' '}
						<br />
					</div>
				),
				con: (
					<div>
						<ol style={{ listStyleType: 'disc' }}>
							<li>
								The aim of this project was to understand, plan and design a
								Commercial Green Building in NITK that has been achieved by
								studying different green technologies for buildings and by
								planning and designing layout , development of plan ,elevations,
								sections etc.
							</li>
							<li>
								Various Green technologies and materials proposed with their
								feasibility study and cost comparison is being rigorously
								conducted on this project.
							</li>
							<li>
								The structure of the building is designed using REVIT software
								and finally a self assessment is also done by considering IS
								Codes for Buildings.
							</li>
							<li>
								The green technology advances that occur in the next 5-10 years
								will steer the future course of green building. The focus must
								be on making real changes in how we design and construct
								buildings for the future .
							</li>
							<li>
								Advances such as air cleansing materials will make our indoor
								and outdoor environments healthier.
							</li>
							<li>
								Microgrids,net zero buildings and Solar roofs will help reduce
								our dependence on coal and other greenhouse gas emitting energy
								sources.
							</li>
							<li>
								Hence Green Buildings is very likely to play a lead role in
								environmental protection efforts in future.
							</li>
						</ol>
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 2,
			oneline:
				'To obtain an efficient bridge girder design with optimised materials by analysing shear force and bending moment of different self designed bridge girders using STAAD PRO.',
			logo:
				'https://erkrishneelram.files.wordpress.com/2015/01/il-appr-span-21-23-003.jpg',
			name: 'Design of Bridge Girders-Using Euro and AASHTO codes',
			imgUrl: [],
			members: ['Rashmi Raj', 'Shreehari M', 'Saurabh Tiwari', 'Prathap Y'],
			description: {
				aim: (
					<div>
						To obtain an efficient bridge girder design with optimised materials
						by analysing shear force and bending moment of different self
						designed bridge girders using STAAD PRO.
					</div>
				),
				meth: (
					<div>
						● Description of Bridge SuperStructure
						<br />
						The bridge structure considered in this case study has a length of
						25 m simply supported over the piers or abutments of the bridge
						substructure. The thickness of the deck slab is 250 mm in all
						respects. Sizes of longitudinal girders and cross girders are
						considered as 2000x500 mm and 1500x250 mm respectively.
						<br />
						<br />● Design Analysis
						<br />
						The design of bridge girders has been performed for dead and live
						loads. Dead load of the slab is assumed as 7.5 KN/m² where as dead
						load of members are considered in STAAD Pro. For live loads IRC
						codes, Euro codes and AASHTO Specifications have been preferred and
						models has been created in STAAD Pro.
						<br />
						<br />● Result Analysis
						<br />
						I. Live Load- Bending moments, shear forces and deflections due to
						live load of vehicle loading of all codes i.e. IRC Codes, Euro codes
						and AASHTO Specifications are calculated and presented graphically.
						<br />
						Ii. Area of Steel- Design of bridge girders is conducted in STAAD
						Pro using different vehicle loadings of IRC Codes, AASHTO
						Specifications and Euro Codes. Maximum value of steel area required
						is considered in longitudinal girder as well as cross girder.
					</div>
				),
				res: (
					<div>
						From the design analysis it can be concluded that the I section
						steel Girder is most efficient as it has high flexural strength. The
						girder was designed for expressway bridges and corresponding loads
						were considered and the I-section girder is designed using AASHTO
						and euro codes. After designing the section we tried to implement
						the girder on a warren type steel bridge and a normal highway
						bridge. <br />
						<br />
						The graphs and stimulation videos are in the below drive link.
						<br />
						<a
							style={{ color: 'blue', textDecoration: 'underline' }}
							href="https://drive.google.com/drive/folders/1SreIJNW9Zvp1V4z8Ll7yGXdCAX_UBcrh?usp=sharing"
						>
							https://drive.google.com/drive/folders/1SreIJNW9Zvp1V4z8Ll7yGXdCAX_UBcrh?usp=sharing
						</a>
						<br />
						<a
							style={{ color: 'blue', textDecoration: 'underline' }}
							href="https://drive.google.com/drive/folders/1tW0i2VsDkjwIX_Cth4FgzLevUPqUt2Nj?usp=sharing"
						>
							https://drive.google.com/drive/folders/1tW0i2VsDkjwIX_Cth4FgzLevUPqUt2Nj?usp=sharing
						</a>
					</div>
				),
				con: (
					<div>
						In the I-section the material is present where it should be and in
						the right quantities. This makes the beam more economical and
						lighter and in turn again making it even more economical.A beam
						primarily resists bending, shear and torsion. The height of the
						section is a determinant of stress due to bending in the order of
						the square of itself. The farther the flanges are from each other,
						the better it is. <br />
						Shear is resisted by the web and you just put in enough thickness of
						web that the shear is taken care of. Regardless, the consideration
						from point of view of bending is the most important one. <br />
						<br />
						Looking at the future scope, this design can be used for 20m span
						girders in bridges but it will not be much economical as steel is
						costlier than concrete. But the same section can be used with
						concrete girders with sufficient prestressing.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 3,
			oneline:
				'To detect pothole in an image using trained weights and give output of the number of potholes.',
			logo:
				'https://www.autopilotreview.com/wp-content/uploads/2020/02/tesla-autopilot-pothole-detection-image-696x417.jpg',
			name: 'Pothole Detector',
			imgUrl: [
				'https://drive.google.com/file/d/12d6ywemaTY74wZ9VuEEJD6Wn4NUuE5W4/preview',
				'https://drive.google.com/file/d/1x81B8JTCe_MLqWy-zScG4gnkD5BbR44e/preview',
				'https://drive.google.com/file/d/1nNbJ13T7S4LV-rvCbxtuOdqUNTSQR6NP/preview',
				'https://drive.google.com/file/d/1yY5lnUYvX7GdBGibyWjUAn62_-T5VUys/preview',
				'https://drive.google.com/file/d/1p2G3xQ_f_5FpsQlEj2jXckuNucTeby-J/preview',
			],
			members: [
				'Avikal Sagar',
				'Saathvika B. Mahesh',
				'Suraj',
				'Prathap Y',
				'Nikhil',
			],
			description: {
				aim: (
					<div>
						To detect pothole in an image using trained weights and give output
						of the number of potholes.
					</div>
				),
				meth: (
					<div>
						We have used CNN to solve this problem statement. We have
						implemented following CNNs in this project- <br />
						Squeeze Net, Mobile Nets, Inception-v3, VGG 16 and ResNet50. <br />
						<br />
						Bounding box and Intersection over union are some common image
						detection which we have used in this project.
						<br />
						<br />
						ALGORITHM <br />
						Part(A)
						<br /> (i)Connect to backend.py <br /> Steps : <br /> 1. Import the
						necessary libraries <br /> 2. Provide Yolo backend path
						<br /> 3. Base Feature Extractor <br /> 4. Full Yolo Feature <br />{' '}
						(a) Implement the organisation layer(22 layers using Convo2D, and
						Leaky Relu for function) <br /> 5. Tiny Yolo Feature (a) Implement
						the neural network layers(8 layers using Convo2D, and Leaky Relu
						again) <br /> 6. Implement mobile net feature <br /> 7. Implement
						squeeze net feature <br /> 8. Implement inception 3 feature <br />{' '}
						9. Implement VG16 feature <br /> 10.Implement resnet 15 feature
						<br />
						(ii)Connect to utils.py <br /> Steps : <br /> 1. Import the
						necessary libraries <br /> 2. Define and implement the classes bound
						box, weight reader <br /> 3. Decode output by the network <br /> 4.
						Suppress non maximal boxes
						<br /> 5. Remove boxes that are less likely than object threshold
						<br /> 6. Compute overlap, ap etc <br /> (iii) Connect to
						frontend.py <br /> Steps : <br /> 1. Import necessary libraries{' '}
						<br /> 2. Implement the yolo features - make the extractor layers -
						make the object detection layer - initialise the weights of layers -
						print summary of the whole model <br /> 3. Define custom loss -
						Adjust prediction - Adjust ground truth - Determine the masks - Warm
						up training - Finalize the losses
						<br /> 4. Make train and validation generators <br /> 5. Compile the
						model <br /> 6. Make a few callbacks <br /> 7. Start the training
						process <br /> 8. Compute mAP on validation set
						<br /> 9. Gather all detections and annotations
						<br /> 10. Make the boxes and labels
						<br /> 11. Sort the boxes and labels according to the scores <br />{' '}
						12. Copy detections to all detections <br /> 13. Repeat step 8 on
						all detections(not validation)
						<br /> 14. Sort by score, compute false/true positives <br /> 15.
						Compute recall and precision <br /> 16. Compute average precision
						<br />
						Part(B):
						<br /> (i) Frozen graph(freeze tensorflow model) <br /> (ii) Convert
						frozen graphs to tensor rt graph <br /> (iii) Load tensor rt fp16
						graph <br /> (iv) Make predictions of fp16 graph <br /> ----MODEL
						READY FOR EXECUTION----
					</div>
				),
				res: (
					<div>
						Depending on the number of potholes present in the image the output
						is given. Please refer the Images, Screenshots ad Videos section to
						see more.{' '}
					</div>
				),
				con: (
					<div>
						1)App can be developed to detect pothole which will help people who
						has problems in vision or old aged people
						<br /> 2)Can be used in automated cars for better approximation to
						avoid potholes <br />
						3)Can help in categorizing roads if maintenance is required
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 4,
			oneline:
				'In this project, we aim at analysing a structure in a seismic zone and design an earthquake resistant structure. Designing the building using StaadPro and performing a seismic analysis is the primary objective of this project.',
			logo:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuMLRo-seHPGygbqRRnPCId-ao08TU6OvK4g&amp;usqp=CAU',
			name: 'Design and seismic analysis of a building',
			imgUrl: [
				'https://drive.google.com/file/d/1Rc8nfBp1BMktcD5dxBNbEVUZsL3iMFZR/preview',
				'https://drive.google.com/file/d/1GUkKxmiIgZgAUXAGT-HYrZagiavIbIaf/preview',
				'https://drive.google.com/file/d/1yWUc7F2w_e2IA0kjsd0MESchFxwEYiQU/preview',
			],
			members: [
				'Rashmi Raj',
				'Kunal Motwani ',
				'Sai Shruti Prakhya',
				'Krishna Prasad Kuddannaya',
			],
			description: {
				aim: (
					<div>
						In this project, we aim at analysing a structure in a seismic zone
						and design an earthquake resistant structure. Designing the building
						using StaadPro and performing a seismic analysis is the primary
						objective of this project. Studying various retrofitting measures
						and finding the suitable technique for the zone is done by
						considering various factors. Finally, a bridge design on Staad-Pro
						was also performed.{' '}
					</div>
				),
				meth: (
					<div>
						<ol>
							<li>
								Designed a G+6 residential building. This included dimensioning,
								assigning cross sections to members and providing support. It
								was done on a software, STAADPro
							</li>
							<li>
								Manual Calculation of loads: Referred to the existing Indian
								Standard(IS) on Criteria of Earthquake Resistant Design of
								Structures- IS1893(Part 1)-2016, Code of Practice for Design
								Loads- IS 875(Part 2)-1983 to calculate the dead load, live load
								and seismic load.
							</li>
							<li>
								Manually calculating the design base shear(Vb) and time period.
								This was also done by referring to the above mentioned IS Code.
								Design base shear is an estimate of the maximum expected lateral
								force on the building due to seismic activity and is calculated
								using the earthquake zone and soil type, among other parameters.
							</li>
							<li>
								STAADPro Analysis: The seismic parameters were defined under
								‘load page-definitons’ for the building designed in 1. Load case
								details i.e x and z direction for lateral displacement of the
								building were also specific under ‘load page-load case details’.
								The analysis was then performed and the results gave us the
								design base shear, time period and seismic load value.
							</li>
							<li>Manual and STAAD Calculations were compared.</li>
							<li>
								A theoretical study of various retrofitting measures were done
								and a suitable option was proposed for India.
							</li>
							<li>
								A bridge was designed on STAADPro. The aim was to perform
								seismic load analysis on the bridge as well but due to lack of
								resources on the same, it was not possible.
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						The below images show the G+6 storey building that was designed on
						STAAD-Pro. The building is represented in 3 views; namely, top view,
						front view and isometric view respectively.
						<br />
						<br />
						Material Used- Reinforced Cement Concrete <br />
						<br />
						Structural Members:
						<br />
						<ol>
							<li>
								Columns: <br />
								Length- 2.75m <br />
								Type 1- 24/floor - 0.6mx0.6m <br />
								Type 2- 12/floor- 0.55mx0.55m
							</li>
							<li>
								Beams: <br />
								Cross Section- 0.35mx0.4m <br />
								Type 1- 30/floor- 4m length <br />
								Type 2- 30/floor - 5m length
							</li>
							<li>
								Slabs: <br /> Thickness- 0.165m
							</li>
							<li>
								Walls: <br /> Thickness- 0.23m
							</li>
						</ol>
						Top View of the building
						<br />
						<iframe
							src="https://drive.google.com/file/d/1BjW2E6x4n6p79mVnJYD1MxRPNKEHyWK1/preview"
							width="640"
							height="400"
						></iframe>
						<br />
						<br />
						Front view of building
						<br />
						<iframe
							src="https://drive.google.com/file/d/1wCkrjE4bWVTqVkT7c3iCX5ESoywh9V-V/preview"
							width="640"
							height="400"
						></iframe>
						<br />
						<br />
						Isometric view of building
						<br />
						<iframe
							src="https://drive.google.com/file/d/1lro1NCvoTwB5av9lKOFG4UDP3Sz0_mWp/preview"
							width="640"
							height="400"
						></iframe>
						<br />
						<br />
						Dead Load= 3007.5kN/floor <br />
						Live Load= 375kN/floor
						<br />
						<br />
						Manual calculations of loads: <br />
						Seismic Load= 49524.588kN <br />
						Design Acceleration Coefficient(Sa/g) = 2.0268 <br />
						Time Period= 0.67173sec <br />
						Design Base Shear= 1745.389kN
						<br />
						<br />
						STAAD-Pro calculations of loads: <br />
						Seismic Load= 50827.07 <br />
						Design Acceleration Coefficient(Sa/g) = 2.027 <br />
						Time Period= 1.26sec
						<br /> Design Base Shear= 1648.26kN
						<br />
						<br />
						It is observed that all values approximately match except that of
						the time period. There is a slight variation in the values for
						seismic load and design base shear due to the fact that manual
						calculations were done as per IS1893-Part 1(2016) while STAAD-Pro
						calculations were done as per IS 1893-Part1(2002).
						<br /> <br />
						Retrofitting:
						<br />A comprehensive study was performed of different retrofitting
						methods used on existing structures. The most suitable method that
						can be used for the building designed in zone III region of India
						are:
						<ol>
							<li>
								FRP Wrapping: It is the latest technique used for seismic
								retrofitting. This technique is cost-effective and can be
								implemented for RC and masonry structures. These are stronger
								than steel and weigh less than steel. Another advantage of this
								is the fact that it has high corrosion resistant properties.
							</li>
							<li>
								Adding Steel Braces: These are added to an existing structure.
								They do not add more load to the existing structure and at the
								same time, they have the ability to withstand the load. This
								modification will also make more space for natural light in a
								structure.
							</li>
						</ol>
						Bridge Design:
						<br />
						Dimension of Bridge: 80mx20m
						<br /> Material Used- Reinforced Cement Concrete <br />
						Cross Sections of Structural Members: <br />
						(a)Column- 1.2m diameter <br />
						(b)Beam- 0.6m x 0.6m
						<br /> Slab Thickness- 0.3m <br />
						Appropriate vehicle load was applied for load analysis <br />
						The below image represents the bridge designed on STAAD-Pro
						<br />
						<iframe
							src="https://drive.google.com/file/d/1d_hrPztWCnUo4Z2ndqNHuKJ-rihBl0fk/preview"
							width="640"
							height="400"
						></iframe>
						<br />
						<br />
						Variation of bending moment in the bridge
						<br />
						<iframe
							src="https://drive.google.com/file/d/1J8Ia4UwdyYmHEUNEw9PFPYnFKZAr2TQC/preview"
							width="640"
							height="400"
						></iframe>
						<br />
						<br />
						Variation of shear force across Y direction in the bridge <br />
						<iframe
							src="https://drive.google.com/file/d/12VhMWWQFgxAFIzkDdtiJQDz35g3XVaoC/preview"
							width="640"
							height="400"
						></iframe>
						<br />
						<br />
					</div>
				),
				con: (
					<div>
						Communication and administration in any country relies on its road
						network. Bridge is one such structure which has extreme capability
						in connecting two parts on either side. Studying the impact of
						seismic waves on these structure is an extended scope and using
						appropriate retrofitting measure to these gigantic structures.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 5,
			oneline: '',
			logo: '',
			name: '',
			imgUrl: ['', '', '', '', ''],
			members: ['', '', '', '', ''],
			description: {
				aim: <div></div>,
				meth: <div></div>,
				res: <div></div>,
				con: <div></div>,
			},
			//meetLink: 'This is the meet link',
		},
	],
	create: [
		{
			id: 1,
			oneline:
				'Creating original cinematographic compositions of the Milky Way Galaxy as seen at different places throughout the year using Long Exposure Photography technique.',
			logo:
				'https://res.cloudinary.com/dogygnvzl/image/upload/v1595787585/WhatsApp_Image_2020-07-26_at_11.48.43_PM_o2d5sd.jpg',
			name: 'Long Exposure Photography',
			imgUrl: [],
			members: [
				'Nikhil Nair',
				'Mihir BL',
				'Ananta Shanbhag',
				'Amogh Manikkuwar',
			],
			description: {
				aim: (
					<div>
						Creating original cinematographic compositions of the Milky Way
						Galaxy as seen at different places throughout the year using Long
						Exposure Photography technique.
					</div>
				),
				meth: (
					<div>
						● Capture a set of images say 15-20 shots for one composition at one
						place
						<br /> ● Stack all the images and do stacking through median mode in
						Photoshop
						<br /> ● Edit the final stacked image to make the image look in the
						best way possible
						<br /> ● Do some intense color grading to give it a cinematographic
						feel.
					</div>
				),
				res: <div>Please check the Images, Screenshots and Videos section</div>,
				con: (
					<div>
						We used a DSLR, a beginner's camera that had a resolution of 20-24
						MP. The lens we used was the 18-55 mm short range lens. Although, it
						does the job very well we could've taken better shots of we had a
						higher aperture ( less than the f/3.5 we were able to use )<br />
						We could've also taken more clear shots if we could've travelled to
						a place with lower light pollution. This would've enabled us to use
						a slightly higher ISO and shutter speed to capture the details in
						high clarity.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Short Film',
			logo:
				'https://www.legalzoom.com/sites/legalzoom.com/files/uploaded/articles/film.jpg',
			oneline:
				'The aim of the project is to create a short film from scratch and understand the creative process behind it.',
			imgUrl: '',
			members: [
				'Amodh Shenoy',
				'Ashwin R',
				'Nikhil Nair',
				'Amith Vijayan',
				'Shubhang Bhandarkar',
				'Bhajan Burman',
				'Chinmayi Ramakrishna',
				'Ankush Chandrashekhar',
				'Tarun M',
				'Anuja Goyal',
				'Adithya Santhosh',
				'Sri Nitya K',
				'Susmita Saha',
				'Roopam Dhaneria',
				'Kaveen Srikanth',
				'Pavan M',
				'Mohit Gupta',
				'Piyush Swami',
				'Anushrutha Tripathi',
			],
			description: {
				aim: (
					<div>
						The aim of the project is to create a short film from scratch and
						understand the creative process behind it.
					</div>
				),
				meth: (
					<div>
						<ol>
							<li>
								Discussing Ideas and brainstorming <br />
								Multiple ideas for the plot were discussed during several
								meetings with Chronicle and Create SIG members. Votes were taken
								and one final script was selected.
							</li>
							<li>
								Finalizing the idea and writing the script <br />
								Chronicle team members worked on the finalized idea and produced
								a script.{' '}
							</li>
							<li>
								Casting and figuring out the shooting requirements <br />
								Volunteers for the movie casting were auditioned and casted
								according to the character need{' '}
							</li>
							<li>
								Shooting the required scenes <br />
								Create members directed the movie and helped the cast shoot the
								videos. Due to the limitations such as time
								difference,quarantine restrictions and other limitations, the
								cast, apart from acting, also had to shoot the videos.
								Communication between Create members and the cast was done
								through video calls and all the directions about the camera
								settings were given online.{' '}
							</li>
							<li>
								Editing it all together <br />
								<iframe
									src="https://drive.google.com/file/d/1VzlWKIIsaIhMHis1_CkqZ56idL94H7vS/preview"
									width="640"
									height="480"
								></iframe>
								Using the modern softwares (adobe premiere pro and adobe after
								effects), the footage shot by the cast was edited by Create
								members and was processed to produce the full movie. <br />
								The initial draft was run through the project mentors and during
								reviews,we made some tweaks and changes to better suit the film.{' '}
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						<iframe
							src="https://drive.google.com/file/d/1FA0yLbIItpwJTzk9V7vdPzQ4k8miTp18/preview"
							width="640"
							height="480"
						></iframe>
						<iframe
							src="https://drive.google.com/file/d/1zoYMH5KaS_LY_wa3Y9rlJQaM4iQgHuEQ/preview"
							width="640"
							height="480"
						></iframe>
						<br />
						After some colour grading and adding a tinge of cinematic effect to
						the video we came up with the final results.
						<iframe
							src="https://drive.google.com/file/d/1-IA-FG1adOeJ0OlsLFKGhi5leeO_HQ1v/preview"
							width="640"
							height="480"
						></iframe>
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
	],
	credit: [
		{
			id: 1,
			oneline: '',
			logo: '',
			name: '',
			imgUrl: ['', '', '', '', ''],
			members: ['', '', '', '', ''],
			description: {
				aim: <div></div>,
				meth: <div></div>,
				res: <div></div>,
				con: <div></div>,
			},
		},
		{
			id: 2,
			oneline: '',
			logo: '',
			name: '',
			imgUrl: ['', '', '', '', ''],
			members: ['', '', '', '', ''],
			description: {
				aim: <div></div>,
				meth: <div></div>,
				res: <div></div>,
				con: <div></div>,
			},
		},
		{
			id: 3,
			oneline: '',
			logo: '',
			name: '',
			imgUrl: ['', '', '', '', ''],
			members: ['', '', '', '', ''],
			description: {
				aim: <div></div>,
				meth: <div></div>,
				res: <div></div>,
				con: <div></div>,
			},
		},
		{
			id: 4,
			oneline: '',
			logo: '',
			name: '',
			imgUrl: ['', '', '', '', ''],
			members: ['', '', '', '', ''],
			description: {
				aim: <div></div>,
				meth: <div></div>,
				res: <div></div>,
				con: <div></div>,
			},
		},
		{
			id: 5,
			oneline: '',
			logo: '',
			name: '',
			imgUrl: ['', '', '', '', ''],
			members: ['', '', '', '', ''],
			description: {
				aim: <div></div>,
				meth: <div></div>,
				res: <div></div>,
				con: <div></div>,
			},
		},
		{
			id: 6,
			oneline: '',
			logo: '',
			name: '',
			imgUrl: ['', '', '', '', ''],
			members: ['', '', '', '', ''],
			description: {
				aim: <div></div>,
				meth: <div></div>,
				res: <div></div>,
				con: <div></div>,
			},
		},
		{
			id: 7,
			oneline: '',
			logo: '',
			name: '',
			imgUrl: ['', '', '', '', ''],
			members: ['', '', '', '', ''],
			description: {
				aim: <div></div>,
				meth: <div></div>,
				res: <div></div>,
				con: <div></div>,
			},
		},
	],
	crypt: [
		{
			id: 1,
			oneline:
				'The primary goal of this project was to design a proof of concept of a social media aggregation website, such as reddit, using the new internet architecture known as Named Data Networking(NDN). The project focuses on using the resources provided by the open source NDN framework to build APIs that allow us to mimic the functioning of social media aggregation sites.',
			logo: 'https://avatars0.githubusercontent.com/u/3679349?s=280&v=4',
			name: 'NDN Reddit',
			imgUrl: [],
			members: [
				'Aditya Rastogi',
				'Aniruddh Sujish',
				'Arjun A.',
				'Mansi Saxena',
				'Bhaskar Kataria',
				'Nihar K.G Rai',
			],
			description: {
				aim: (
					<div>
						The primary goal of this project was to design a proof of concept of
						a social media aggregation website, such as reddit, using the new
						internet architecture known as Named Data Networking(NDN). The
						project focuses on using the resources provided by the open source
						NDN framework to build APIs that allow us to mimic the functioning
						of social media aggregation sites. This project demonstrates how
						this new architecture can implement such a social media aggregation
						site similar to what we observe in TCP/IP.
					</div>
				),
				meth: (
					<div>
						The first step in realising this project was identifying an
						appropriate platform to build this project on and the NDNJS library
						seemed like an ideal library to utilise to set up our server API.
						During the initial stages of downloading and testing the simple
						examples provided in the library we identified an issue with the
						NDNJS library as it was not compatible with the most recent version
						of the NFD testbed and hence required a slight modification in the
						NDNJS library in order to allow compatibility.
						<br />
						<ol>
							<li>
								Login/Register API-
								<br />
								<ol
									style={{
										listStyleType: 'lower-alpha',
										fontWeight: 'lighter',
									}}
								>
									<li>
										This is the basic API required for users to access their
										profile
									</li>
									<li>
										It involves a client to server communication through ndn
										data packets
									</li>
									<li>The data was stored and fetched from a mongo server</li>
									<li>
										One core issue caused by the nature of the NDNJS library was
										an issue involving session management wherein it was
										difficult to use typical inbuilt modules for session
										management like Passport JS.
									</li>
									<li>
										This issue was resolved by using cookies to store
										information such as the username.
									</li>
								</ol>
							</li>
							<li>
								Post Upload/Fetch API-
								<ol
									style={{
										listStyleType: 'lower-alpha',
										fontWeight: 'lighter',
									}}
								>
									<li>
										This API Handles The posting and retrieval of posts to and
										from the mongodb server it is the core of any social media
										aggregation website and was the API that consumed a majority
										of the development period.
									</li>
									<li>
										The Posts represented in this format (post
										title,description,image) was saved into and fetched from the
										mongo server.
									</li>
									<li>
										In order to transfer images we converted the images to a
										base64 encoding.
									</li>
									<li>
										Which is then saved into a JSON object and sent using a blob
										type using NDN data packets.
									</li>
									<li>
										The key issue faced during the development of thisAPI was
										the encoding string was too large for the data packet
									</li>
									<li>
										The solution was to manually segment and send the encoded
										string and then stitch them abc together on the html side
										once the data was received.
									</li>
								</ol>
								<div style={{ marginLeft: '-3%' }}>
									The above API acted as a template for all the following API
								</div>
							</li>
							<li>
								Like API -
								<ol
									style={{
										listStyleType: 'lower-alpha',
										fontWeight: 'lighter',
									}}
								>
									<li>
										When the user likes a post, this information is sent to the
										server which then updates this in the backend mongo server.
									</li>
								</ol>
							</li>
							<li>
								Profile API -
								<ol
									style={{
										listStyleType: 'lower-alpha',
										fontWeight: 'lighter',
									}}
								>
									<li>
										API was created to fetch user details, profile pictures and
										posts of a particular user from the server to display in the
										profile page.
									</li>
									<li>
										The data and images are again sent as JSON data to and from
										the server
									</li>
								</ol>
							</li>
							<li>
								Profile Picture Upload API -
								<ol
									style={{
										listStyleType: 'lower-alpha',
										fontWeight: 'lighter',
									}}
								>
									<li>
										Similar to the post upload api, used for user to change
										their profile picture
									</li>
								</ol>
							</li>
							<li>
								User List API -
								<ol
									style={{
										listStyleType: 'lower-alpha',
										fontWeight: 'lighter',
									}}
								>
									Returns a list of all users on the server, to enable
									autocomplete features while searching for a user.
								</ol>
							</li>
						</ol>
						The final phase of the implementation was to build a frontend using
						html and CSS to act as a user interface for the users of the site.
						The login and register pages were designed in a fashion very similar
						to reddit to take in username and password as a form input and the
						data is sent to the server to verify authenticity. If the
						authentication is successful the user is logged in and redirected to
						their homepage.
						<br /> <br />
						The homepage displays all the posts stored on the mongodb backend
						and allows the user to search for posts by specific users. The
						homepage also has the tabs to post new posts and like other posts.
						The homepage also allows navigation to the user’s profile. <br />
						In the profile users are able change their profile image and check
						all their own posts. The profiles of other users can also be viewed
						in a similar manner.
					</div>
				),
				res: (
					<div>
						The following screenshots show the working website pages. Refer the
						caption to see which page it is. <br />
						<br />
						<div style={{ marginLeft: '12%', width: '100%' }}>
							<div style={{ width: '35%', float: 'left', paddingLeft: '11%' }}>
								User Login Page
							</div>{' '}
							<div style={{ width: '35%', float: 'right', marginRight: '12%' }}>
								User Sign-in Page
							</div>
							<div style={{ paddingBottom: '2%' }}>
								<iframe
									style={{ border: '1px black solid' }}
									src="https://drive.google.com/file/d/19eYOi7dQOQTAnerRL8zKXl5wglBH62-q/preview"
									width="400"
									height="300"
								></iframe>
								<iframe
									style={{ border: '1px black solid', marginLeft: '5%' }}
									src="https://drive.google.com/file/d/1ksduY-cptKFXZ9bsOjFrcgl-JD0KhOdE/preview"
									width="400"
									height="300"
								></iframe>
							</div>
							<div style={{ width: '35%', float: 'left', paddingLeft: '11%' }}>
								Home Page
							</div>{' '}
							<div style={{ width: '35%', float: 'right', marginRight: '12%' }}>
								Post Creation Page
							</div>
							<div style={{ paddingBottom: '2%' }}>
								<iframe
									style={{ border: '1px black solid' }}
									src="https://drive.google.com/file/d/1GKjfvI8ju2umjSomlyBWjlEvuypf-rOZ/preview"
									width="400"
									height="300"
								></iframe>
								<iframe
									style={{ border: '1px black solid', marginLeft: '5%' }}
									src="https://drive.google.com/file/d/1rG5peYFxck_IrMwzk65Ove-IAhQ5sC8i/preview"
									width="400"
									height="300"
								></iframe>
							</div>
							<div style={{ width: '35%', paddingLeft: '11%' }}>
								Profile Page
							</div>{' '}
							<div style={{ paddingBottom: '2%' }}>
								<iframe
									style={{ border: '1px black solid' }}
									src="https://drive.google.com/file/d/1fwm8TkNzcwWH7ElbzFascYH98fTrWLbM/preview"
									width="400"
									height="300"
								></iframe>
							</div>
						</div>
					</div>
				),
				con: (
					<div>
						Conclusion
						<br />
						<br /> The project has clearly proven the possibility of building a
						social media aggregation site using the current available resources.
						This can be used as a clean base that can then be built upon to
						generate such media aggregation sites.This project furthers the
						validity of the NDN framework as a possible future replacement for
						the current tcp/ip framework we use currently. Another useful output
						of this project is the process of splitting data between packets and
						then sending segments of the data in order to send larger
						uncompressed images and data. This can be of great assistance for
						any other projects in the future, as we had not observed any prior
						literature of the same. <br />
						<br />
						Future Scope <br />
						<br />
						As of now the project is still in its infancy and lacks several key
						features such as comments and the subreddit or post grouping
						feature. These are possible future scopes are concepts that can be
						built to further legitimize the website. Using the same concept of
						splitting of the encoded data to allow the posting o videos as well.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 2,
			oneline:
				'The aim of this project is to automate the software development process. This process includes building the code, running tests on it and safely deploying the successful version of the code. CI stands for Continuous Integration. Continuous Integration continuously builds new versions of the code if there are no errors. CD expands to Continuous Deployment. Continuous Deployment deploys a finished code to the environment. ',
			logo: 'https://miro.medium.com/max/2800/0*TH1nBsXNDB5Njynk.PNG',
			name: 'CI/CD pipeline using K8',
			imgUrl: [
				'https://drive.google.com/file/d/1tI00UvFcBjgXxrTZyq00PaabrlI6lCmn/preview',
			],
			members: [
				'Animesh Kumar',
				'Chinmayi Ramakrishna',
				'Annette Manoj Elsa',
				'Neha Pai',
				'K Keerthana',
				'Ayush Dineshbhai Mangukia',
				'Balajinaidu V',
				'Nikhil Sahu',
			],
			description: {
				aim: (
					<div>
						The aim of this project is to automate the software development
						process. This process includes building the code, running tests on
						it and safely deploying the successful version of the code. CI
						stands for Continuous Integration. Continuous Integration
						continuously builds new versions of the code if there are no errors.
						CD expands to Continuous Deployment. Continuous Deployment deploys a
						finished code to the environment. The continuous integration part
						makes sure that there are no errors before deploying to the
						production environment. <br />
						<br />
						Additionally, the project also ensures that a particular application
						runs in any environment. It automatically provides the libraries or
						dependencies required to run a particular application. This is
						achieved in the form of docker images. The images are updated on
						docker Hub as new commits are made to GitHub repository.
					</div>
				),
				meth: (
					<div>
						Technologies Used <br />
						<ol style={{ fontWeight: 'lighter' }}>
							<li>Docker has been used to containerize the applications.</li>
							<li>Kubernetes services have been used for pod creation. </li>
							<li>
								Kubelet service used for communication between the master and
								worker nodes.
							</li>
							<li>
								Kubectl provides a command line tool for interaction within the
								cluster.
							</li>
							<li>
								Kubeadm has been used to set up a working kubernetes cluster.
							</li>
						</ol>
						Set up a local cluster using Docker and Kubernetes.
						<br />
						<div style={{ fontWeight: 'lighter' }}>
							Our local cluster consists of a master node and two worker nodes.
							After successfully setting up the docker and kubernetes
							environment in all the three nodes, the worker nodes can be
							connected to the master node.This acts as the base of the whole
							project.
						</div>
						<br />
						Create docker images of the applications and push to docker hub.
						<br />
						<div style={{ fontWeight: 'lighter' }}>
							Docker images are created using the Dockerfile. Running a docker
							image creates a container that further contains the application
							along with the libraries. The updated, error-free docker image
							continuously gets built in Docker Hub. At any instance, this
							docker image can be pulled from the respective repository.
						</div>
						<br />
						Create deployment and service files for facilitating continuous
						deployment.
						<div style={{ fontWeight: 'lighter' }}>
							and service part of pod creation is wrapped into a single yaml
							file named web-app. The deployment part of the file consists of
							the template of the pod. This includes the name of the container,
							image to be used and its port number. The service part of the file
							manages the networking of the pods.{' '}
						</div>
						<br />
						Use of a bash script as an API to enable continuous integration and
						continuous deployment of the application.
						<div style={{ fontWeight: 'lighter' }}>
							Finally a simple build command along with git commit command can
							be used to automate the whole development process. In case of any
							errors, the process will not complete. This means the whole
							process will be started only after the code is error-free.{' '}
						</div>
						<br />
						Set up a platform in the form of a website to view details of
						Continuous Integration and Continuous Deployment.
						<div style={{ fontWeight: 'lighter' }}>
							A CI/CDPipeline dashboard consists of the pod details, list of
							pods, list of nodes and list of deployments.
						</div>
					</div>
				),
				res: (
					<div>
						<iframe
							src="https://drive.google.com/file/d/1PlZggYorOSqvFWUEDhbPm0A_9qj5Ptm_/preview"
							width="600"
							height="300"
						></iframe>
						<iframe
							src="https://drive.google.com/file/d/1MP9uT40jOp6Kap8mIYV0YPbY4YRFX7Wn/preview"
							width="600"
							height="300"
						></iframe>
						<iframe
							src="https://drive.google.com/file/d/1w1ejcamo3DPj0MXb4kSmBM1FKr-9vlWy/preview"
							width="600"
							height="200"
						></iframe>
						<br />
						Fig 1. Command to automate the process <br />
						<br />
						<div style={{ fontStyle: 'italic' }}>
							./build git commit -m “Some message”
						</div>{' '}
						<br />
						The above command does the following things:
						<br />
						<div style={{ textDecoration: 'underline' }}>
							Continuous Integration:
						</div>
						<div style={{ fontWeight: 'lighter' }}>
							If there are no errors, pushes changed code to GitHub repository A
							docker build command is initiated that consists of 7 steps.
						</div>
						<div style={{ textDecoration: 'underline' }}>
							Continuous Deployment:
						</div>
						<div style={{ fontWeight: 'lighter' }}>
							It then deploys the application to the server. In this project,
							the master node acts as the server.
						</div>
						<br />
						<iframe
							src="https://drive.google.com/file/d/1KQdBvJy5wxUUOWtlA0xwjEpOiux5qmlg/preview"
							width="600"
							height="300"
						></iframe>
						<br />
						Fig 2. CI/CD Pipeline Dashboard
						<br />
						<br />
						<div style={{ fontWeight: 'lighter' }}>
							The dashboard will load the pod details under pod logs. Pod
							details include pod id, timestamp, dockerId, status of the pod
							etc. <br />
							Also, the list of active nodes, pods and deployments are displayed
							in the dashboard.
						</div>
						<br />
						<iframe
							src="https://drive.google.com/file/d/1W7fIYeyUmSVaTnb6P5wAbPCVr9vwfaAS/preview"
							width="600"
							height="300"
						></iframe>
						<br />
						Fig 3. Docker Hub success build <br />
						<br />
						<div style={{ fontWeight: 'lighter' }}>
							The above repository contains the image of the application.
						</div>
					</div>
				),
				con: (
					<div>
						This pipeline was customised for a simple html page. Html pages do
						not give much scope for error handling. This project built a go
						application of the web page. So any possible errors would be in the
						go app building phase. In the future, the pipeline can be customised
						to support other languages and thus test files. The project was done
						on a local machine due to lack of credentials. The project can be
						extended to achieve greater features by obtaining Azure/Aws/Google
						cloud services. These cloud services will help set up a server and
						thus mimic a production environment. This will give a more real life
						experience of the pipeline.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 3,
			oneline:
				'Assist the visually impaired by capturing images and recognising objects in their surroundings.',
			logo:
				'https://www.ravepubs.com/wp-content/uploads/2018/04/Voice_Control-800x418.png',
			name: 'Voice Navigator',
			imgUrl: [
				'https://drive.google.com/file/d/1qiHjEuBHjScyfWN6tbwqY16k6MZiEiNF/preview',
			],
			members: [
				'Ishan Nedumkunnel',
				'Anshuman Sinha',
				'Ankush C',
				'Shankar Suresh',
				'Neha Pai',
				'Aadil Khalifa',
				'Anuja Goyal',
				'Joshitha Reddy',
				'Keesara Vennela',
				'Mansi Singh',
				'Pranav Surendran',
			],
			description: {
				aim: (
					<div>
						<ol style={{ listStyleType: 'disc' }}>
							<li>
								Assist the visually impaired by capturing images and recognising
								objects in their surroundings.
							</li>
							<li>
								Estimate the proximity of each of these objects getting a better
								understanding of the environment.
							</li>
							<li>
								Give an audio output for the visually impaired user to help the
								user navigate his/her surroundings.
							</li>
						</ol>
					</div>
				),
				meth: (
					<div>
						<ol>
							<li>
								Implementation of the YOLO - Object detection algorithm used for
								real-time object detection
							</li>
							<li>
								Next step involves the Depth Map - Used to determine the
								relative distances of objects from a viewpoint
							</li>
							<li>
								Integration - Getting the final result after integrating results
								from the YOLO model and depth map
							</li>
							<li>
								App - Used the Flask Framework to present the Voice Navigator
								Model
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						<img
							style={{ paddingLeft: '20%' }}
							src={Voice}
							width="75%"
							height="auto"
						></img>
						<br />
						Desired Result - <br />
						<div style={{ fontWeight: 'lighter' }}>
							A string containing a list of all objects in front of the user.{' '}
							<br /> Objects in the string appear in increasing order of their
							depths from the user. <br />
						</div>
					</div>
				),
				con: (
					<div>
						We achieved the set objectives and were successfully able to present
						a Voice Navigator website. This project can find further application
						in the domain with extra added features.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 4,
			oneline:
				'To Generate relevant meme caption given a meme template using Neural Networks based on ‘ Dank Learning’ Paper',
			logo:
				'https://d3i71xaburhd42.cloudfront.net/47ec091ba9d916e391c2f4e8ec36edcb59d104d6/2-Figure1-1.png',
			name: 'Dank Learning',
			imgUrl: [],
			members: [
				'Manan',
				'Hrithik Bhat',
				'Gayatri Nisha',
				'Prateek Kumar',
				'Akshay Bistagond',
				'Shivraj Dharwad',
			],
			description: {
				aim: (
					<div>
						To Generate relevant meme caption given a meme template using Neural
						Networks based on ‘ Dank Learning’ Paper
					</div>
				),
				meth: (
					<div>
						The project is divided into 4 main steps. <br />
						Dataset : ImgFlip575k memes dataset
						<br />
						<ol style={{ listStyleType: 'disc', fontWeight: 'lighter' }}>
							<li>
								Image ( Meme Template ) Processing : Extract Image features
								using A Convolutional Neural Network ( CNN )
							</li>
							<li>
								Caption Processing : Process the dataset by cleaning captions,
								standard text processing techniques and converting words to
								GLoVE word embeddings
							</li>
							<li>
								Model Building and Training : Compile an LSTM model for
								continuous text generation and train the model on the dataset
							</li>
							<li>
								Text Generation : Generate captions by inputting a meme template
								and use Temperature- Random Sampling to generate captions
							</li>
						</ol>
					</div>
				),
				res: (
					<div>
						Model is able to generate coherent and relevant captions in 2 out of
						10 cases
					</div>
				),
				con: (
					<div>
						LSTMs are very powerful at text generation tasks and can be combined
						with a CNN in an encoder decoder architecture to caption Images.
						Neural Networks are not completely able to capture the human concept
						of ‘humor’ properly.
						<br />
						<br /> Further work needs to be done in order to improve model
						performance. More semantic features need to be extracted from text
						in order to capture ‘humor’. Models with Transformer Architecture
						can trained for better performance
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 5,
			oneline:
				'Understand and document the codebase of SNARE and TANNER.Try to fix the issues present in the application. Optimisation of TANNER',
			logo:
				'https://cyberhoot.com/wp-content/uploads/2020/02/Honeypot-Structure.png',
			name: 'Python web application honey pot',
			imgUrl: [
				'https://drive.google.com/file/d/1_31qRIpjcY4QMpz-SWamw_fYg6PWJxB2/preview',
			],
			members: [
				'Aditya Jain',
				'Aniruddh Sujish',
				'Bhaskar Kataria',
				'Mohammed Rushad',
				'Nihar K G Rai',
				'Balajinaidu V',
				'M S Raghav Ganesh',
				'Rahul Maheshwari',
				'R Raghavendra',
				'Reshma Tresa Antony',
				'Shriroop Roychoudhury',
			],
			description: {
				aim: (
					<div>
						● Understand and document the codebase of SNARE and TANNER
						<br /> ● Try to fix the issues present in the application
						<br /> ● Optimisation of TANNER
					</div>
				),
				meth: (
					<div>
						Honeypots are sacrificial systems that we use to trap intruders.
						They were invented in the early 90s to study attackers in the real
						world. Dummy, unsecured systems were secretly placed on the web, and
						attackers were not stopped from breaking in. Once attackers broke
						in, however, their activity was monitored closely. That gave us a
						wealth of information about black hats during the last decade.
						<br />
						<br />
						This is exactly what is achieved using the SNARE (Super Next
						generation Advanced Reactive honEypot : it is a web application
						honeypot which has the ability to convert existing web pages into
						attack surfaces with TANNER) and TANNER (A remote data analysis and
						classification service, to evaluate HTTP requests and composing the
						response then served by SNARE).
						<br />
						<br />
						So, we began by setting up the environment for the project, that is
						downloading the necessary applications in either WSL/Dual booted
						system, by following a few steps available on the SNARE and TANNER
						github page. Next step was to learn the codebase to understand the
						control flow of the application, so that, for example, we could
						identify the reason for a particular issue. Then we documented all
						our newly gained knowledge about the code.
						<br />
						<br />
						Then it was all about recreating and identifying issues in the
						application and coming up with patches to resolve those issues.
						<br />
					</div>
				),
				res: (
					<div>
						We came across 3 issues and understanding the codebase is what
						allowed us to try and rectify those issues.
						<br />
						<ol>
							<li>
								Keyboard interrupt in SNARE : While trying to exit SNARE, it
								wouldn’t happen gracefully. A keyboard interrupt error message
								would be displayed. But, we observed that when the auto-update
								parameter was mentioned, with the value being True/False, while
								starting up SNARE, the issue is solved.
							</li>
							<li>
								Unidentified SQLI attacks : After running quite a lot of test
								cases, we observed that when SQLI attacks, except for union
								ones, TannerAPI wouldn’t identify the attack type as SQLI unlike
								the logs.
							</li>
							<li>
								Inconsistency in sess_uuid : We observed that in the logs, the
								sess_uuid field was stored with dashes in between, but in
								TannerAPI and TannerWeb it was stored without dashes. In the
								URL, sess_uuid can’t have any dashes in between, so we are
								forced to assume that in the logs, it isn’t so for better
								readability.
							</li>
						</ol>
					</div>
				),
				con: (
					<div>
						Honeypots are great for intrusion detection. They can be deployed on
						unused IP addresses in production networks. Since the honeypot has
						no legitimate purpose, any traffic to the honeypot is suspicious and
						signals the presence of an attacker. An intruder who triggers the
						honeypot can be tracked closely. Unlike traditional detection
						systems that had to spot attacks from the flood of normal traffic,
						all traffic honeypots receive are illegitimate.
						<br />
						<br />
						As this is an open source project, we aim to keep working on it; to
						continue recording and resolving issues that come along the way.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 6,
			oneline:
				'This project aims to achieve colorization of black and white images using Generative Adversarial Networks(GAN) and improve performance by experimenting with different models of the same.',
			logo:
				'https://s23527.pcdn.co/wp-content/uploads/2017/05/Screenshot-2017-05-19-17.57.37.png',
			name: 'B&W Image Colorization Using GANs',
			imgUrl: [
				'https://drive.google.com/file/d/1LvJmLUdpxVEaFHBFlfOttO625vjXbBf4/preview',
				'https://drive.google.com/file/d/1kgX0DjckWj4qvjQSqqaNGM40BsLnMz1D/preview',
				'https://drive.google.com/file/d/1mszgnxcyM2jdAdngBTLyAArGkQ2DWbLd/preview',
				'https://drive.google.com/file/d/1CsyX6YTpMaXpzSgofVpaaOkFxyykq8vB/preview',
			],
			members: [
				'Prateek',
				'Arjun A.',
				'Mansi',
				'Rohit ',
				'Shreyas',
				'Aditya',
				'Fidha',
				'Nitesh',
				'Pranav',
				'Rahul Kumar',
				'Sarthak',
			],
			description: {
				aim: (
					<div>
						This project aims to achieve colorization of black and white images
						using Generative Adversarial Networks(GAN) and improve performance
						by experimenting with different models of the same.
					</div>
				),
				meth: (
					<div>
						A subset of places365 dataset was chosen for training, which was
						further converted to tfrecords format.
						<br />
						<br />
						We started by implementing a UNET GAN based coloriser derived from
						this paper, which took us 15 hours to train, and fetched us decent
						results.
						<br />
						<br />
						We attempted to then enhance these results by implementing an
						Evolutionary Generative Adversarial Network(EGAN) as shown in this
						paper, but due to insufficient computing resources the model did not
						train as effectively as we hoped.
						<br />
						<br />
						We also attempted to mimic the results of DeOldify with our own
						adaptation of the code,but again was not able to achieve the results
						we wanted due to insufficient computer resources. Moreover, we
						adapted the initial UNet implementation to train on TPUs, and
						achieved better results compared to the initial model with 6 hours
						of training.
						<br />
						<br />
						All implementation was done in Tensorflow 2.4 on google colab.
					</div>
				),
				res: (
					<div>
						The vanilla UNET GAN gave some impressive however mostly
						inconsistent results. E-GANs and DeOldify models did not give the
						theoretically impressive results that were expected because of
						training limitations due to lack of hardware resources.
						<br />
						<br />
						The TPU implementation of the vanilla UNET GAN, despite showing some
						tendencies of overfitting, gave significantly improved results over
						the GPU execution of the same.
					</div>
				),
				con: (
					<div>
						Theoretical expectations of image colorization using the modified
						GANs, E-GANs and DeOldify model, which were expected, were not met
						due to lack of availability of hardware resources for training these
						models. However, improved results of the UNET GAN colorization were
						achieved by making use of TPU for training as compared to the
						results achieved using a GPU. Future scope of the project extends to
						employing powerful hardware to achieve more accurate colorization by
						training the bulkier models of E-GAN and DeOldify.{' '}
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
		{
			id: 7,
			oneline:
				'This project aims to generate hand-drawn sketches of various animals and objects by using deep learning architectures like Generative Recurrent Neural Networks and Auto-encoders. Our goal is to train machines to draw and generalize simple drawings from a simple sequence of motor actions, in a manner similar to humans.',
			logo:
				'https://4.bp.blogspot.com/-oAPlGiBet6s/WO6VOPRPzkI/AAAAAAAABt4/vXkP4Yy8-0guIDU6AhKfP0VdnAJBx5ssgCLcB/s1600/image11.png',
			name: 'SketchGen',
			imgUrl: [
				'https://drive.google.com/file/d/1KXIVJCuATWYqJAe0L-sPB3sY_aA9sa5v/preview',
				'https://drive.google.com/file/d/1X1bSLng-JEL7qvcBk_lS8j72bcKQeLun/preview',
				'https://drive.google.com/file/d/1hW-dB0nsdrycs2tv8e3Innu2OCdNeJYT/preview',
				'https://drive.google.com/file/d/107E0qNksW3IxuFt2pfz_b-7z58d1ofM3/preview',
				'https://drive.google.com/file/d/1BxvHiz053ZYGtn_ypJaupRTPwZJ99v5H/preview',
				'https://drive.google.com/file/d/1R_yRYKxwG4I-neZTg_ZEjptpyoUwuwJE/preview',
				'https://drive.google.com/file/d/10jPvGXgNfpCCCYOrzGgjKn4FGLYU1TnY/preview',
				'https://drive.google.com/file/d/1tedJmDsiyhdoCs3hAq4H7UjSHvb1-4VW/preview',
				'https://drive.google.com/file/d/1FcZGMeL1hcIE_7_Xt2CsoWtIFIhL_925/preview',
				'https://drive.google.com/file/d/1KKP9mB3IoLcZWOCYBVgXcMojxRfSvRNN/preview',
				'https://drive.google.com/file/d/1T54ivkyRu1nwt2IFK3gWcnQlfe8BX9pG/preview',
			],
			members: [
				'Amodh Shenoy',
				'K V Sumanth Reddy',
				'Amey Shimpi',
				'Jagdish B C',
				'Ritvika R B',
				'Dwija Bagwe',
				'Pratik Kumar S',
				'Aakarshee Jain',
				'Mansi Singh',
				'Joshitha Reddy D',
			],
			description: {
				aim: (
					<div>
						This project aims to generate hand-drawn sketches of various animals
						and objects by using deep learning architectures like Generative
						Recurrent Neural Networks and Auto-encoders. Our goal is to train
						machines to draw and generalize simple drawings from a simple
						sequence of motor actions, in a manner similar to humans.
					</div>
				),
				meth: (
					<div>
						SketchGen presents a Recurrent Neural Network capable of producing
						sketches of common objects, with the goal of training a machine to
						draw and generalize abstract concepts in a manner similar to humans.
						It uses an encoder-decoder model, in which each pen stroke is sent
						into the model in consecutive order. The model learns these strokes
						and produces consecutive strokes. The final image is similar to the
						one which we input, just like - how we see some drawing and try to
						redraw it on paper.
						<br />
						<br />
						The dataset is consecutive vectors of 5 characters. A sketch is a
						list of points, and each point is a vector consisting of 5 elements:
						(∆x, ∆y, p1, p2, p3). The first two elements are the offset distance
						in the x and y directions of the pen from the previous point. P1
						indicates that the pen is currently touching the paper or not. The
						second pen state, P2, indicates that the pen will be lifted from the
						paper after the current point and that no line will be drawn next.
						The final pen state, p3, indicates that the drawing has ended.
						<br />
						<br />A vector stroke image (let’s call it S), is first uploaded
						into an encoder. The encoder reads the input stroke by stroke and
						creates a latent vector Z for the training set. (Once trained, the
						encoder will give a feature vector for input that can be used by a
						decoder to construct the input with the features that matter the
						most to make the reconstructed input recognizable as the actual
						input. This vector holds the information, the features, that
						represents the input.) Under this encoding scheme, the latent vector
						z is a random vector conditioned on the input sketch. This latent
						vector Z is not the same for every iteration and keeps producing
						different latent vectors Z for every training iteration. The weights
						or the values of the hidden layers are saved via checkpoints. The
						decoder uses the latent vector Z which was conditioned on the input,
						to produce a set of consecutive strokes to produce an array of
						strokes, which is then converted into an image using the SVGwrite
						library. It is important to emphasize that the reconstructed
						sketches are not copies of the input sketches, but are instead new
						sketches with similar characteristics as the inputs. <br />
						<br />
						<div style={{ backgroundColor: 'lightblue', color: 'darkblue' }}>
							Sketch {'->'} Encoder(S) {'->'} Latent Vector Z {'->'} decoder(Z){' '}
							{'->'} New Sketch
						</div>
					</div>
				),
				res: (
					<div>
						Our results are the decoded images/gifs from the model and a demo
						video. Please refer the Images, Screenshots and Videos section.{' '}
						<br />
						<br />
						This is a sample output:
						<br />
						<iframe
							src="https://drive.google.com/file/d/1SsAF6_8PQsXYhVHG1ahUy2-UzSvkaVC1/preview"
							width="600"
							height="300"
							style={{ border: '1px black solid', marginLeft: '20%' }}
						></iframe>
						<br />
						<br />
						As you can see, the model knows that a cat has eyes and hence drew
						them, even tho we gave a input drawing with no eyes
					</div>
				),
				con: (
					<div>
						In this work, we develop a methodology to model sketch drawings
						using recurrent neural networks. SketchGen is able to generate
						possible ways to finish an existing, but unfinished sketch drawing.
						Our model can encode existing sketches into a latent vector, and
						generate similar-looking sketches. We demonstrate what it means to
						interpolate between two different sketches by interpolating between
						its latent space, and also show that we can manipulate attributes of
						a sketch by augmenting the latent space.
						<br />
						<br />
						SketchGen has many creative applications. The decoder can be useful
						to provide different images when trained once. And if trained on a
						higher level sketch, then maybe we can get new and creative outputs.
						A model trained on higher-quality sketches may find its way into
						educational applications that can help teach students and artists
						how to draw. The current idea has good potential and can be
						developed to a good extent.
					</div>
				),
			},
			//meetLink: 'This is the meet link',
		},
	],
};

export const sigNames = [
	{
		name: 'catalyst',
		id: 1,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_catalyst.png',
	},
	{
		name: 'charge',
		id: 2,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_Charge.png',
	},
	{
		name: 'chronicle',
		id: 3,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_chronicle.png',
	},
	{
		name: 'clutch',
		id: 4,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_Clutch.png',
	},
	{
		name: 'concrete',
		id: 5,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_concrete.png',
	},
	{
		name: 'create',
		id: 6,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_Create.png',
	},
	{
		name: 'credit',
		id: 7,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_Credit.png',
	},
	{
		name: 'crypt',
		id: 8,
		logo:
			'https://iste.nitk.ac.in/api/media/sig_pictures/None_crypt_PMPCp2W.png',
	},
];
export const offsetCoefficient = -4 / 8;
