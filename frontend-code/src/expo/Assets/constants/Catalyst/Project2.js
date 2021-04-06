export default {
    id: 2,
    tags: ["Modelling", "Simulink", "ASP", "ASM", "WWTP"],
    logo:
        "https://www.tpomag.com/uploads/inline/xcockrell_4.jpg.pagespeed.ic.NOVnhtHlC-.webp",
    name: "Modelling Of Waste Water Treatment Using ASM",
    oneline:
        "The objective of the project is to explore how industrial-scale water purification is executed through a widely implemented process known as Activated Sludge Model (ASM).",
    imgUrl: [
        "https://drive.google.com/file/d/1jgdQan0UQV9QBw3A2wtkizotPFuAN6SX/preview",
        "https://drive.google.com/file/d/1k3sc13lEOX82ABI3leaEX0hkz6w9BN-v/preview",
        "https://drive.google.com/file/d/1Y5Rx0F8aZl0bZ-zZ-W2AKfoApAlefUPf/preview",
        "https://drive.google.com/file/d/1GSsEtd76N4qLZCiyhxPMs3KkGR9cNW2Z/preview",
    ],

    members: [
        "Devendra Gayari",
        "Amogha V Somayaji",
        "Ankit Stephen Thomas",
        "Dhruv Banerjee",
        "R Raghavendra",
        "Rahul Maheshwari",
    ],
    description: {
        aim: (
            <div>
                The objective of the project is to explore how industrial-scale
                water purification is executed through a widely implemented
                process known as Activated Sludge Model (ASM). <br />
                <br /> {"     "}
                This setup is performed on MATLAB-Simulink, an engineering
                software primarily used for replicating simulations and various
                industrial processes. The obtained process conditions obtained
                are then studied by appending a controller to regulate the
                concentration of dissolved oxygen.
                <br /> ASM is a mathematical-modelling of a wastewater treatment
                process for treating sewage or industrial wastewaters using
                aeration and a biological composition consisting of bacteria and
                protozoa. Industrialists, MNCs and several establishments have
                resorted to adopt ASM as the primary method to treat wastewater
                generated from their facilities.{" "}
            </div>
        ),
        meth: (
            <div>
                Methodlogy <br />
                <ol>
                    <li>
                        Initially, to build a firm foundation with the
                        fundamentals and pre-requisites of ASM and its
                        functioning, we referred to several literatures and
                        journals to obtain adequate data. Features pertaining to
                        the optimum Chemical Oxygen Demand (COD) and Biological
                        Oxygen Demand (BOD), flow rate values were derived from
                        a diversified portfolio of resources.
                    </li>
                    <li>
                        The acquired mathematical-equations for modelling the
                        process were then inserted in MATLAB-Simulink, with
                        appropriate constant values set as a desired input.
                    </li>
                    <li>
                        A controller had to be appended to the system, to bring
                        about this installation, a mathematical function
                        (transfer function) has to be established that would
                        determine the functioning of the controller.
                    </li>
                    <li>
                        An appropriate transfer function was adopted that would
                        seamlessly suit our reaction setup.
                    </li>
                    <li>
                        Tunings models were studied so that we maximize the
                        performance of the entire setup without producing
                        excessive overshoot values or variances.
                    </li>
                    <li>
                        Varied tuner models were established and necessary error
                        analysis was conducted to determine the accuracy of our
                        entire framework.
                    </li>
                </ol>
                <br />
                Prcocedure <br />
                <ol>
                    <li>
                        A skeletal layout was initiated, where a total of 8
                        control parameters and their corresponding equations
                        were determined.
                    </li>
                    <li>
                        The underlying mathematical equations depict the various
                        processes that occur on an industrial scale whilst
                        treating the wastewater generated:- <br />
                        <ol>
                            <li>ρ1= μH (SS/(KS+ SS)) (SO/(KOH+ SO)) XBH </li>
                            <li>
                                ρ2= μH (SS/(KS+ SS))(SO/(KOH+ SO)) (SNO/(KNO+
                                SNO)) ηgXBH{" "}
                            </li>
                            <li>ρ3= (SNH/(KNH+ SNH)) (SO/(KOA+ SO)) XBA </li>
                            <li>ρ4= bHXBH </li>
                            <li>ρ5= bAXBA </li>
                            <li>ρ6= kaSNDXBH </li>
                            <li>
                                ρ7=kh(XS/XBH)/(KX+ (XS/XBH))[(SO/(KOH+
                                SO))+ηh(KOH/(KOH+ SO))(SNO/(KNO+ SNO))]XBH{" "}
                            </li>
                            <li>
                                ρ8=kh(XS/XBH)/(KX+(XS/XBH))[(SO/(KOH+
                                SO))+ηh(KOH/(KOH+ SO))(SNO/(KNO+
                                SNO))]XBH(XND/XS){" "}
                            </li>
                        </ol>
                    </li>
                    <li>
                        The previously displayed equations were then employed in
                        developing the Simulink model to design differential
                        equations to simulate the ASM process.
                    </li>
                    <li>
                        The above-derived equations are then inserted into the
                        following equations to obtain desirable results:- <br />
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
                        Essentially, on developing the rudiments of the ASM
                        process, a reactor mass balance equation can be
                        formulated for oxygen. This is because in this scenario,
                        regulation of oxygen levels is of utmost importance to
                        us. The fundamental equation for determining a mass
                        balance around a reactor is:-Accumulation within the
                        System + Consumption within the System = Input into the
                        system - Output to the System + Generation within the
                        System Implementing the above elementary equation to our
                        reactor model for determining the concentration of
                        Oxygen levels is as follows:- Reactor Mass Balance: For
                        Oxygen
                        (dS0,as,k/dt)=(1/Vas,k)(Qk-1S0,as,k-1+rZ,kVas,k+(KLa)kVas,k(S0*-S0,as,k)-QkS0,as,k)
                    </li>
                    <li>
                        As discussed earlier, the derived equations were
                        modelled in Simulink to obtain desired results.
                    </li>
                    <li>
                        The entirety of the reactor setup was based on an
                        open-loop condition (the output has no influence of
                        effect on the input).
                    </li>
                    <li>
                        The steady state values that were achieved through this
                        process were reported and recorded.
                    </li>
                    <li>
                        A controller was then installed to regulate the
                        dissolved oxygen concentration level.
                    </li>
                    <li>
                        Primarily, the PID constants were achieved by using the
                        inbuilt PID controller in Simulink.
                    </li>
                    <li>
                        Additionally, the FOPDT model was implemented using its
                        derivative methods, including Zeigler Nichols (P, PI,
                        PID), Internal Model Control (IMC) method, Equating
                        Coefficients Method (ECM). These models were operated
                        under servo and regulatory conditions.
                    </li>
                    <li>
                        To perform an error analysis, we calculated
                        fundamentally three types of errors:- ISE,IAE,ITAE
                    </li>
                </ol>
            </div>
        ),
        res: (
            <div>
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1wgKJrkucaHeQqAcPyRBjOFA6DKgnsBZG/preview"
                        width="640"
                        height="480"
                    ></iframe>
                    <figcaption>
                        Graph: Variation Of Oxygen Concentration in Regulatory
                        mode. Inference: Dissolved oxygen concentration is
                        stable and overshoot is minimal.
                    </figcaption>
                </figure>{" "}
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/18TMIzSKL1RKQcAZXfmvDPOdOle0li_wa/preview"
                        width="640"
                        height="480"
                    ></iframe>
                    <figcaption>
                        Graph: Variation Of Oxygen Concentration in Servo mode.
                        Inference: Dissolved oxygen concentration is stable and
                        overshoot is minimal.
                    </figcaption>
                </figure>{" "}
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/19qapAft4gS8M9Z2J3IcToTANdf_tdbxY/preview"
                        width="640"
                        height="480"
                    ></iframe>
                    <figcaption>
                        The ASM process developed on Simulink
                    </figcaption>
                </figure>{" "}
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1_rXr0z-z_1LQ8_PR2QSO-oqmZxzYUvDO/preview"
                        width="640"
                        height="480"
                    ></iframe>
                    <figcaption>
                        {" "}
                        The Steady State Values on executing the ASM process
                    </figcaption>
                </figure>{" "}
                <br />
                <p>
                    The open loop transfer function adopted to be implemented
                    for the functioning of the controller is:- <br />
                    G(s) = &emsp; 55.34s3 + 9071s2 + 4.956e05s + 9.022e06 <br />
                    &emsp;&emsp;&emsp;___________________________________________
                    <br />
                    &emsp;&emsp;s4 + 478.4s3 + 6.056 e04 s2 + 2.985e06
                    s+5.142e07
                </p>
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1iyXMrELdGTal9f0_L9dWiSqyseLyiWdU/preview"
                    width="640"
                    height="480"
                ></iframe>
                <br />
                Graph: Variation of Oxygen Concentration in open loop. <br />
                Inference: Dissolved oxygen concentration is almost constant
                after 0.0251 d. <br />
                For tuning the FOPDT approximations, the following estimated
                transfer function was used:- <br />
                G(s) = 0.17546e − 0.012s / 3.1447s+1 <br />
                On tuning the P and PI controllers by Zeigler Nichols method,
                the following parameters were obtained:-
                <table>
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
                <table>
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
                under 2 conditions, namely:- Regulatory Control base setup and
                Servo Control base setup. <br />
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
                Additionally we can comprehend the functionality and efficiency
                of this process, as a result we understand why the ASM process
                has been widely implemented and studied by a number of
                organizations. <br />
                Consequently, on installing a feedback controller to the system
                and performing an error analysis, we realize that the inbuilt
                controller tuning algorithm in Simulink is best suited for
                controlling the dissolved oxygen concentration in this process.{" "}
                <br />
                Primarily, as it provides the least error (ISE, IAE and ITAE) in
                comparison to the other tuning methods.{" "}
            </div>
        ),
    },
    meetLink: "This is the meet link",
};
