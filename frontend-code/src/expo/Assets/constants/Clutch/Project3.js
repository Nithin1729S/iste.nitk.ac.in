// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './MT_Opt.png'

const project3 = {
    id: 3,
    oneline:
        "The main objective of this project is to optimize CCHP integrated microturbine generator in order to maximize its efficiency.",
    // copy the abstract here
    logo: logo,
    name: "Optimization of Microturbine system", // replace the name here
    imgUrl: [],
    members: [
        "Pavan C",
        "Sakshi",
        "Lucky Prameeth",
        "Lakshmi Bharathi",
        "Munduri Chandra Hasa"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                The main objective of this project is to optimize CCHP integrated microturbine generator in order to maximize its efficiency.
            </div>
        ),
        des: (
            <div>
                Build an ML model using PSO to design the generator of microturbine. Thermodynamic analysis of the incorporated CCHP system to a microturbine. Build a genetic algorithm model for the optimisation of CCHP system in microturbine. Calculate the overall effectiveness of the microturbine.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1O7SpP5SCNb_Z9f6v4klDyWuG44o2zRhO/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project3;
