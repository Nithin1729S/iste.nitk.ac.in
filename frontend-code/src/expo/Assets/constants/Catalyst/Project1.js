export default {
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
    meetLink: 'https://www.google.com/',
}