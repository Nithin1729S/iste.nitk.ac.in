// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './Traffic_Sim.png'

const project6 = {
    id: 6,
    oneline:
        "Simulation and redesign of an intersection using PTV VISSIM software.",
    // copy the abstract here
    logo: logo,
    name: "Traffic Simulation Using VISSIM", // replace the name here
    imgUrl: [],
    members: [
        "Anna Kuriakose"," Bismi Assis",
        "Alfaiz Shaikh"," Hari Sharan"," Vibhanshu Vishal"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Simulation and redesign of an intersection using PTV VISSIM software.
            </div>
        ),
        des: (
            <div>
                The objective of the project was to study the basic traffic parameters and to simulate traffic at Surathkal intersection using PTV VISSIM software.
                The intersection was redesigned by introducing a central island in the software.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1kVjT-hxFcdoVB2TeB-xUQzPgQCgbUlLR/edit" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project6;
