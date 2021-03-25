export default {
    id: 3,
    name: "Photocatalytic Degradation of Aniline",
    oneline:
        "The objective of the project is to model a reactor for the degradation of organic pollutants, particularly methane using photocatalytic reactions on DWSIM, a chemical process simulator. Thus, obtaining suitable graphs with appropriate parameters for determining apt relations between the control variables.",
    logo: "https://iste.nitk.ac.in/api/media/sig_pictures/None_catalyst.png",
    imgUrl: [
        "https://drive.google.com/file/d/1j0MfIPVYH4nyaytgMNrx6FESYopET-qE/preview",
        "https://drive.google.com/file/d/1QKVrTsaEPw35Z2YRT8R9vadWvgVS4y-P/preview",
        "https://drive.google.com/file/d/1XrCRmAnFgK45ncp437XNoKwM-jD9cG1X/preview",
        "https://drive.google.com/file/d/1ViAwMcur4G6WxgBsJF01mMrlKfA8GAF6/preview",
        "https://drive.google.com/file/d/1DOiwXmVhEeP7o6Muu_eS4Pb3g_Y5ZrRo/preview",
        "https://drive.google.com/file/d/1stOQ_PbjiXLrAhbY7KSA_bflm_D7raW9/preview",
        "https://drive.google.com/file/d/1GfoU2X5Q_2d7Hk0dK--QzVk6C8oPN2tb/preview",
        "https://drive.google.com/file/d/1HUHBDuo0pOv6IrwF7j7nCko7Vvliunab/preview",
        "https://drive.google.com/file/d/1XGm7JxTbLwGNtZuryEnEOkAzRC5dGSYi/preview",
    ],
    members: [
        "Rishu Kumar",
        "Manash Akash",
        "R Raghavendra",
        "Ankit Stephen Thomas",
    ],
    description: {
        aim: (
            <div>
                The objective of the project is to model a reactor for the
                degradation of organic pollutants, particularly methane using
                photocatalytic reactions on DWSIM, a chemical process simulator.
                Thus, obtaining suitable graphs with appropriate parameters for
                determining apt relations between the control variables. <br />
                Several scientists, MNC’s and groups of researchers across the
                globe have faced hurdles in humanizing the treatment of organic
                pollutants. Until the late 1970s, there was no effective method
                known to man that can satisfy all the above-mentioned criteria
                required for the smooth operation of the establishment.
                Photocatalysis, an extraordinary invention by Fujishima and
                Honda paved way to a brand new avenue in the field of chemical
                engineering. Essentially, the production of hydrogen using
                photocatalysis by a process known as steam reforming of methane
                has proven to be one of the greatest assets to engineers and
                industrialists globally. Hence, studying methods and models that
                would provide a safer and a greener option for individuals to
                adopt is the next biggest challenge and encyclopaedic journey to
                witness.{" "}
            </div>
        ),
        meth: (
            <div>
                <ol>
                    <li>
                        The initial stride of utmost importance was to
                        comprehend the fundamentals of concepts like
                        photocatalysis, kinetics behind the reaction, reactor
                        models and nanoparticles as a catalyst.
                    </li>
                    <li>
                        To understand such theories, we examined several
                        literatures and materials corresponding to topics that
                        were closely aligned in the direction of the project.
                    </li>
                    <li>
                        {" "}
                        On successfully learning the foundations, we then
                        proceeded to establish a sample reactor replica with
                        Aniline as the organic pollutant using TiO2
                        nanoparticles as the essential catalyst. This was
                        crucial in recognizing the workspace and familiarize
                        ourselves with the DWSIM software.
                    </li>
                    <li>
                        On developing the pre-requisites required to achieve our
                        objective, we began to initiate the modelling on DWSIM.
                    </li>
                    <li>
                        Qualitatively, the reaction that is occurring in the
                        reactor is, Methane is reacted with Water at high
                        temperatures under the influence of nanoparticle
                        catalysts to produce Carbon dioxide and Hydrogen as the
                        products. Chemically, the reaction can be denoted as:-
                        CH4 + 2H2O CO2 + 4H2{" "}
                    </li>
                    <li>
                        The material, energy stream and the reaction kinetics
                        are fed.{" "}
                    </li>
                    <li>
                        In our project, the reactor model that is being
                        implemented is a Plug Flow Reactor (PFR). To operate the
                        reactor and carry out the reaction, an energy stream
                        (556.34973 kW) is appended along with the reactor. This
                        ensures that the modelled reactor along with the
                        reaction, functions efficiently.
                    </li>
                    <li>PFR parameters are fed.</li>
                    <li>
                        On doing so, the base model of the reactor has been
                        successfully established and can be executed to obtain
                        conversions by visualizing it from the PFR’s point of
                        view.{" "}
                    </li>
                    <li>
                        {" "}
                        next step is to obtain graphs and plots with different
                        parameters as each variable is intertwined with another,
                        based on a certain relationship and proportionality.{" "}
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
                                Catalyst Loading, Catalyst Void Fraction,
                                Catalyst Particle Diameter
                            </li>
                        </ol>
                        were made to differ in fixed multiples, to obtain varied
                        results which are then utilized to plot graphs on an
                        appropriate data visualization software, like Microsoft
                        Excel and determine relationships and dependence of
                        various parameters.{" "}
                    </li>
                </ol>
            </div>
        ),
        res: (
            <div>
                Refer the images section for the results having the Flowsheet of
                the Methane reforming (DWSIM MODEL), Input Parameters to the
                PFR, Results related to the different parameters with Conversion{" "}
            </div>
        ),
        con: (
            <div>
                On investigating the results obtained from the above graphs,
                there are a number of inferences we can draw:- <br />
                <ol>
                    <li>
                        Conversion vs Catalyst Particle Diameter: The plot
                        undoubtedly depicts how the formation of products, in
                        this case Hydrogen, is fairly independent of the
                        catalyst particle diameter.
                    </li>
                    <li>
                        Conversion vs Hydrogen Concentration: The shaping of
                        products is inversely proportional to Hydrogen
                        Concentration as a linear ratio. This is an accurate
                        observation that has been devised as according to Le
                        Chatlier’s principle, if a system experiences a
                        disturbance, the system by default adopts a direction
                        where the effects of this disturbance are nullified.
                    </li>
                    <li>
                        Conversion vs Water and Methane Concentration: Applying
                        a similar reasoning from the above observation, Le
                        Chatlier’s principle can be implemented. We can observe
                        that favourable conversions are linearly proportional to
                        Water-Methane concentrations.
                    </li>
                    <li>
                        Conversion vs Temperature: An endothermic reaction, with
                        increase in temperature will favour the forward
                        direction of the reaction. Le Chatlier’s principle can
                        be be utilized in this scenario to obtain similar
                        results. Additionally, the increase in temperature
                        facilitates the reaction rate by enhancing the
                        performance of the catalyst.{" "}
                    </li>
                </ol>{" "}
                <br />
                From the graphs, it is evident that there are distinct
                relationships among variables like conversion, temperature,
                concentrations and so on. Using this DWSIM modelling for the
                photocatalytic degradation of methane, engineers can adopt this
                method or its derivatives to estimate the conditions for maximum
                production of hydrogen, maximum degradation of methane and so
                on.
            </div>
        ),
    },
    meetLink: "This is the meet link",
};
