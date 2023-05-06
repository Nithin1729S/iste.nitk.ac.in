// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './Poiseuille_flow.png'

const project1 = {
    id: 1,
    oneline:
        "This project seeks to utilize Python programming to conduct a CFD analysis that would enable the acquisition of Poiseuille flow in a lengthy pipe.",
    // copy the abstract here
    logo: logo,
    name: "CFD analysis of Poiseuille flow using Python", // replace the name here
    imgUrl: [],
    members: [
        "Om",
        "Urvesh",
        "Sucharitha",
        "Balachandar"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                This project seeks to utilize Python programming to conduct a CFD analysis that would enable the acquisition of Poiseuille flow in a lengthy pipe.
            </div>
        ),
        des: (
            <div>
                Discretizing Governing Navier Stokes equation and iterating them until convergence to simulate the flow. Staggered Grid is used with ghost cells for boundary conditions. Pressure and velocity are to be found from simulation at various properties.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1ox_pmIQdai_PiNNkcenqI1KtmOPjdvQ6/edit" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project1;
