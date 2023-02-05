// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './AMSim_Poster.png'

const project4 = {
    id: 4,
    oneline:
        "The main objective of this project is to build a simulation model of Directed Energy Deposition (DED), a well-known additive manufacturing process.",
    // copy the abstract here
    logo: logo,
    name: "Simulation of Additive Manufacturing Process", // replace the name here
    imgUrl: [],
    members: [
        "M S Raghav Ganesh",
        "Lucky",
        "Shaik Dilshad",
        "Karan",
        "Nitin",
        "Om Thakur"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                The main objective of this project is to build a simulation model of Directed Energy Deposition (DED), a well-known additive manufacturing process.
            </div>
        ),
        des: (
            <div>
                This project's purpose is to learn about and research additive manufacturing. The molten pool is created by passing wires through a nozzle and employing a laser, plasma arc, or electron beam in wire-based DED devices. The study also looks at the production process. The study's purpose is to use Finite Element Modeling to simulate a Directed Energy Deposition Addiditive Manufacturing process. The importance of this strategy in today's industrial company cannot be overstated.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1qqumnbAOij-obG3ofY-KdKwGyD2W6XZU/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project4;
