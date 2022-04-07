// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project3 = {
    id: 3,
    oneline:
        "This project models the transport phenomena in electrodialysis, an electrically driven process for the desalination of saline water.",
    // copy the abstract here
    // logo: logo,
    name: "Computational Modelling of Transport Phenomena in Electrodialysis", // replace the name here
    imgUrl: [],
    members: [
        "R Raghavendra"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                This project models the transport phenomena in electrodialysis, an electrically driven process for the desalination of saline water.
            </div>
        ),
        des: (
            <div>
                This project models the transport phenomena occurring in electrodialysis, an electrically driven separation process for the desalination of saline water. The model is a 2D steady state model. The momentum and species transport equations are solved using the finite difference method in MATLAB. The effects of sodium ion concentration in the diluate channel feed and the inlet velocity to the diluate channel on the concentration profile at a given potential drop were studied.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {<iframe src="https://drive.google.com/file/d/1BiH4Zt4zKwuirzEPoEI7AWCPZWppYoQX/preview" width="640" height="480" allow="autoplay"></iframe>}
            </div>
        )
    },
};
export default project3;
