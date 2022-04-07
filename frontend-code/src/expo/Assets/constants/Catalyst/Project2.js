// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project2 = {
    id: 2,
    oneline:
        "Analyzing and designing the various technologies of solar cells ",
    // copy the abstract here
    // logo: logo,
    name: "Mathematical and Design Analysis of Solar Cell Technologies", // replace the name here
    imgUrl: [],
    members: [
        "Ankit Stephen Thomas", "Rohaan Sunil"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Analyzing and designing the various technologies of solar cells 
            </div>
        ),
        des: (
            <div>
                In this project, we have designed multiple solar cell technologies from the first and second generation types using MATLAB-Simulink and GPVDM. The solar cell types used in this project are: Si-single junction solar cell, Perovskite solar cell and Triple junction solar cell. MATLAB-Simulink was used in mathematically designing solar cells using certain fundamental mathematical equations, whereas, GPVDM was used as a design software on the basis of materials, thermal and optical properties. The models are simulated using varying materials, conditions and parameters, to obtain suitable device performances which can be used for commercialization. 
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {<iframe src="https://drive.google.com/file/d/18c2CyFeapGz6a3mXQzQsdfde1ehSYXyj/preview" width="640" height="480" allow="autoplay"></iframe>}
            </div>
        )
    },
};
export default project2;
