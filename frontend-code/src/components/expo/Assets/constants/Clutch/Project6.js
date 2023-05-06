// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './FUEL_CELL.png'

const project6 = {
    id: 6,
    oneline:
        "Achieve homogeneous flows through bifurcated fuel cell inlet.",
    // copy the abstract here
    logo: logo,
    name: "Fuel Cell Inlet Optimization", // replace the name here
    imgUrl: [],
    members: [
        "Tushar Jyoti Sahariah ", "Shashi Kiran", "Sidhant Shekhar Jha"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Achieve homogeneous flows through bifurcated fuel cell inlet.
            </div>
        ),
        des: (
            <div>
                Energy can be harnessed most effectively from a parallel stack of fuel cells when the fuel input is homogenous to each of the cells. In pursuit of the same, tapered pipes with various angles of bifurcation were considered as an alternative to traditional non-tapered pipes with 90-degree bifurcation. Fluid dynamic analysis concerning parameters like fluid velocity and pressure was performed using the CFD software "Ansys Fluent" and hence the optimized model with the most homogenous flow was obtained.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1a4K7NDs5lXr3GphjTHdm3fAleIDns6QSa-e84eMG5nY/edit#" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project6;
