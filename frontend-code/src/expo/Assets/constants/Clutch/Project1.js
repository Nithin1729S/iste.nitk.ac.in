const project1 = {
    id: 1,
    name: "Simulation of exhaust back pressure for engine braking",
    tags: [
        "Exhaust brake",
        " engine brake",
        " exhaust",
        " brake",
        " engine",
        " bike",
        " motorcycle",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1eYTAk6JZKfgMIfWyQA9NcK5Hju0A-mGVGg&usqp=CAU",
    oneline:
        "To simulate the models of KTM SX-F and KTM 390 on Ricardo Wave, To find the critical length and critical plate angle of the exhaust brake for each engine, To to analyse the models of KTM SX-F and KTM 390 engines with the exhaust brake and measure the effect on braking power and other engine parameters",
    imgUrl: "",
    members: [
        "Rahul Ravichandar",
        "R. Aswin",
        "Varun Ramadurai",
        "Raghav Ganesh",
        "Atharva Joshi",
        "Devika Harikrishnan",
        "Amogh Manikkuwar",
    ],
    description: {
        aim: (
            <div>
                <ol>
                    <li>
                        To simulate the models of KTM SX-F and KTM 390 on
                        Ricardo Wave
                    </li>
                    <li>
                        To find the critical length and critical plate angle of
                        the exhaust brake for each engine
                    </li>
                    <li>
                        To to analyse the models of KTM SX-F and KTM 390 engines
                        with the exhaust brake and measure the effect on braking
                        power and other engine parameters
                    </li>
                </ol>
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1zjpjxi7qOK8wHW6hs5TNfmY5MPueVKoL/preview"
                        width="640"
                        height="480"
                        title="KTM SX-F with Exhaust Brake"
                    ></iframe>
                    <figcaption>KTM SX-F with Exhaust Brake</figcaption>
                </figure>
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/17RbJsmz2JkWFRbana_zBg8BOs3oohexZ/preview"
                        width="640"
                        height="480"
                        title="KTM 390 with Exhaust Brake"
                    ></iframe>
                    <figcaption>KTM 390 with Exhaust Brake</figcaption>
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
                    <li>
                        Least Positive Brake Power=0.121928 at 10.4 degrees.
                    </li>
                </ol>
                <b>Critical Plate Angle = 10.4 Degrees</b>
                <br />
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1OxXjKxXHBDd0vqpp80w0EYmJLlLAtGhc/preview"
                        width="210"
                        height="200"
                        title="Plate Angle was varied from 0-90"
                    ></iframe>
                    <iframe
                        src="https://drive.google.com/file/d/1VEcMYBIKB_TwsJRxGbUD6X23qAMbJ3LD/preview"
                        width="210"
                        height="200"
                        title="Brake Power stays just above 0, at 20 degrees"
                    ></iframe>
                    <iframe
                        src="https://drive.google.com/file/d/1tOEZSVK4eSFrBbmcbAd26iM-Z9kZs9z-/preview"
                        width="210"
                        height="200"
                        title="Now Plate Angle is varied from 10 to 20"
                    ></iframe>{" "}
                </figure>
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1aY9sUGlQgahe8Pp8onYOgwxAEMH87Bkp/preview"
                        width="210"
                        height="350"
                        title="Brake Power stays just above 0 at 11 degrees"
                    ></iframe>
                    <iframe
                        src="https://drive.google.com/file/d/1P-wRol8i6rPOnD2JcASREeChFhXJPPU5/preview"
                        width="210"
                        height="350"
                        title="Now Plate Angle is varied from 10 to 11"
                    ></iframe>
                    <iframe
                        src="https://drive.google.com/file/d/1BZLzMlMviPVAfSyE1FT75ptv3a46Yzcw/preview"
                        width="210"
                        height="350"
                        title="Brake Power stays above 0 at 10.4 degrees"
                    ></iframe>
                </figure>
                <em>Fixing Duct 9 length</em>
                <ol>
                    <li>
                        The overall (duct 9 + duct 10) length = 310mm (kept
                        constant)
                    </li>
                    <li>
                        Duct 9 length was varied from 100 - 300mm in intervals
                        of 25mm.
                    </li>
                    <li>
                        BHP = 7.11 kW @9000RPM, and BHP = 0.04 kW @12000RPM.
                    </li>
                    <li>Hence,a length of 105mm for duct 9 was fixed.</li>
                </ol>
                <b>Duct 9 Length = 105mm</b>
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1E6DEl2nn3Xklb4ez4sY2AiEsTezP9-Gq/preview"
                        width="640"
                        height="480"
                        title="BHP Values for Duct 9 Lengths 100 - 300mm for 12000 RPM"
                    ></iframe>
                    <figcaption>
                        BHP Values for Duct 9 Lengths 100 - 300mm for 12000 RPM
                    </figcaption>
                </figure>
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1kbl3hAU1bpFOzG-p7yfwcAcglOaqnEnQ/preview"
                        width="640"
                        height="480"
                        title="BHP Values for Duct 9 Lengths 100 - 300mm for 9000 RPM"
                    ></iframe>
                    <figcaption>
                        BHP Values for Duct 9 Lengths 100 - 125mm for 12000 RPM
                    </figcaption>
                </figure>
                <em>Fixing Duct 8 length</em>
                <ol>
                    <li>
                        Simulations were carried out for lengths ranging from
                        40-70mm.
                    </li>
                    <li>
                        These below distances are calculated by keeping duct 9
                        fixed.
                    </li>
                    <li>
                        BHP = 7.192 kW @9000RPM, and BHP = 0.081 kW @12000RPM.
                    </li>
                    <li>Hence,a length of 35mm for duct 8 was fixed.</li>
                </ol>
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1KBW1Xjg1Zmyw16PteKhAzWqS7zvl_2V9/preview"
                        width="640"
                        height="480"
                        title="BHP Values for Duct 8 Lengths 30 - 70mm for 12000 RPM"
                    ></iframe>
                    <figcaption>
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
                        <br />
                        <iframe
                            src="https://drive.google.com/file/d/1hnQIUF9OGnNFlOu6h8hOu9xcfbt3vI5W/preview"
                            width="640"
                            height="480"
                            title="Brake Power"
                        ></iframe>
                        <iframe
                            src="https://drive.google.com/file/d/1D94Ero9kRQfhDj2BpunkTBw_WAJ116D9/preview"
                            width="640"
                            height="480"
                            title="RPM"
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
                        <br />
                        <iframe
                            src="https://drive.google.com/file/d/1FXx-j3_qMKJcVvU0P6F8c9n8z0QD1QUH/preview"
                            width="640"
                            height="480"
                            title="Friction Heat Energy loss"
                        ></iframe>
                    </li>
                    <li>
                        Cylinder Temperatures
                        <br />
                        <iframe
                            src="https://drive.google.com/file/d/1_easbA54CJBwbpg5nY-OcRaGHYRRkRWd/preview"
                            width="640"
                            height="480"
                            title="Cylinder Temperatures"
                        ></iframe>
                    </li>
                    <li>
                        Pressure vs Crank Angle
                        <br />
                        <iframe
                            src="https://drive.google.com/file/d/1se2YyRCMCz45kqQdXy7cTC_vXIh_FzCU/preview"
                            width="640"
                            height="480"
                            title="Pressure vs Crank Angle"
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
                        % Reduction at Peak-1: 6.26 % <br />% Increase at Peak-2
                        : 11.9 %
                    </li>

                    <li>
                        Pressure vs Crank Angle <br />
                        % Reduction in Peak-1: 29.01 % <br />% Increase in
                        Peak-2 : 129 %
                    </li>
                </ol>
            </div>
        ),
        con: (
            <div>
                <ol>
                    <li>Viable potential for a secondary brake system</li>
                    <li>
                        Deeper understanding of the working and structure of an
                        IC engine
                    </li>
                    <li>
                        An understanding of 1D fluid flow modelling and software
                    </li>
                </ol>
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
export default project1;
