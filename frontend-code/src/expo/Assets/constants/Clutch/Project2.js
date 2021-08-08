const project2 = {
    id: 2,
    name: "Exhaust tuning of IC Enginez",
    tags: [
        "KTM390",
        " IC Engine",
        " Exhaust tuning",
        " Ricardo wave",
        " Scavenging",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQGLUhB27gINVnO-8Kp78q8M3FVt9QeJb3uQ&usqp=CAU",
    oneline:
        "The Aim of this project is to tune a KTM 390 engine’s performance to achieve peak torque at a low rpm by optimising the runner length.",
    imgUrl: [
        "https://drive.google.com/file/d/1Y418WOw0xp6Vc6T8INKNdm583IZWyRWy/preview",
        "https://drive.google.com/file/d/1GDjcp-uygUpAagvSjuv-hCrDjW8BFtG6/preview",
        "https://drive.google.com/file/d/13IlcEbprdPhUr52mQLs43SjoCpZ2k6Jf/preview",
        "https://drive.google.com/file/d/1DUwWrmcFBSGfsKMa9cnYQG6NIcaaELVx/preview",
        "https://drive.google.com/file/d/1piBjjf7V8a-a3Nrgiy4C53GFYCaRd-ZY/preview",
    ],
    members: ["Raahul Ravichander", "R Aswin", "BH S R Karthik Varma"],
    description: {
        aim: (
            <div>
                The Aim of this project is to tune a KTM 390 engine’s
                performance to achieve peak torque at a low rpm by optimising
                the runner length.
            </div>
        ),
        meth: (
            <div>
                WAVE is used throughout the engine design process because it is
                the ideal tool for things such as improving volumetric
                efficiency, designing complex boosting systems, improving
                transient response or extracting the maximum performance from a
                race engine. <br />
                Computer simulation has been used extensively in the development
                of intake and exhaust systems worldwide. The use of computer
                simulation does not allow the designers to overlook the
                mathematical models, which have defined engine characteristics
                based on the operating parameters. Two of the very important
                phenomena which describe the wave theory in the manifolds with
                mathematical models are: Helmholtz Resonance and Reflective Wave
                Theory. <br /> <br />
                <em>Helmholtz Resonator Theory:</em> <br />
                Helmholtz theory basically works on the theory of harmony. As
                air (or any gas) tries to ram into the resonator through its
                neck, the pressure inside the cavity increases and the air
                bounces out, but while bouncing out quickly due to inertia, it
                creates a partial vacuum near the neck of the resonator and the
                air is again sucked in. <br /> <br />
                <em>Reflected Wave Theory:</em> <br />
                The pressure wave moves down the pipe at the sum of the local
                sonic velocity plus the particle velocity of the gas flow.
                Whenever the pressure wave encounters a change in the
                cross-sectional area of the pipe, a reflected pressure wave is
                generated, which travels in the opposite direction. If the
                change in area is increasing (a step, collector, or opening to
                the atmosphere), the sense of the reflected pressure wave is
                inverted. The time taken by the wave moving at acoustic speeds
                to travel down the length of exhaust manifold and be reflected
                back to the exhaust valve is determined by the speed of the
                engine, which in-turn is defined for gaining the maximum
                performance by the Reflective Wave theory. <br /> <br />
                <em>Engine Specifications:</em> <br />
                In this project, KTM 390 which is a single cylinder spark
                ignition four valve, four stroke engine was modelled in Ricardo
                WAVE software and the model is shown in the figure below
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1nRaphs4q-RpbQevu9QKVi1nmYbERs2gT/preview"
                        width="640"
                        height="480"
                        title="Ricardo WAVE"
                    ></iframe>
                    <figcaption>Engine specifications</figcaption>
                </figure>
            </div>
        ),
        res: (
            <ol>
                <li>
                    Continuously Varying Exhaust Pipe Length: <br />
                    After modelling the KTM 390 engine the exhaust runner is
                    varied from 200mm to 1000mm with a step of 50mm and RPM of
                    the engine is varied from 2000 to 9000 with a step of 500
                    RPM.
                </li>
                <li>
                    Brake Torque: <br />
                    <iframe
                        src="https://drive.google.com/file/d/13IlcEbprdPhUr52mQLs43SjoCpZ2k6Jf/preview"
                        width="640"
                        height="480"
                        title="Brake Torque"
                    ></iframe>
                </li>
                <li>
                    Brake Power: <br />
                    <iframe
                        src="https://drive.google.com/file/d/1DUwWrmcFBSGfsKMa9cnYQG6NIcaaELVx/preview"
                        width="640"
                        height="480"
                        title="Brake Power"
                    ></iframe>
                </li>
                <li>
                    Volumetric Efficiency: <br />
                    <iframe
                        src="https://drive.google.com/file/d/1piBjjf7V8a-a3Nrgiy4C53GFYCaRd-ZY/preview"
                        width="640"
                        height="480"
                        title="Volumetric Efficiency"
                    ></iframe>
                </li>
            </ol>
        ),
        con: (
            <div>
                The pressure wave which travels back and forth inside the
                exhaust manifold, and if tuned correctly, it will return just
                before the valve closing event as a rarefaction wave and produce
                negative pressure at the valve opening, which results in a
                scavenging effect and pushes the residual exhaust gases out
                more. The progressive pressure wave tuning of the exhaust system
                has a significant effect on the engine’s power and torque
                characteristics. In this project the length of the exhaust
                runner of a KTM 390 Engine varied to tune the pressure wave.{" "}
                <br />
                <b>
                    <em>
                        It was found that the max volumetric efficiency and
                        Brake torque are obtained around 550mm.
                    </em>
                </b>{" "}
                So making the exhaust runner length to 550mm can help us achieve
                peak torque and peak volumetric efficiency. <br />
                Thus, tuning the exhaust runner length and diameter have a
                significant effect on the torque and power produced by the
                engine. In this project only tuning of exhaust runner by
                changing the length is made, but this can be extended by
                changing the area of the runner and also the same principle can
                be applied to the inlet runner. <br />
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
export default project2;
