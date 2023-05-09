// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './hip_implant.jpeg'
import pdf from './HipReplacementImplant_Report.pdf'
const project7 = {
    id: 7,
    oneline:
        "To perform structural and chemical degradation analysis on hip replacement implant models, to arrive at a viable model for implementation.",
    // copy the abstract here
    logo: logo,
    name: "Hip replacement implant", // replace the name here
    imgUrl: [],
    members: [
        "Soumyakanta Sahoo", "Rakshith S", "Shraddha Harris"," Divyamshu M P"," Haridarshan"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                To perform structural and chemical degradation analysis on hip replacement implant models, to arrive at a viable model for implementation.
            </div>
        ),
        des: (
            <div>
                Medical implants are devices or tissues that are placed inside or on the surface of the body.The project aims to design, analyze, modify, and evaluate hip replacement implants. The project is a collaboration between Clutch and Catalyst to explore the interdisciplinary fields of mechanical and chemical engineering in computational biomechanics and biomedical engineering.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src={pdf} width="640" height="480"></iframe>
            </div>
        )
    },
};
export default project7;
