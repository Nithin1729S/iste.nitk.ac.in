// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './cav.png'
import pdf from './Report_Cavitation.pdf'
const project5 = {
    id: 5,
    oneline:
        "Analysis and Numerical prediction of Cavitation in fuel injectors.",
    // copy the abstract here
    logo: logo,
    name: "Cavitation of fuel injector", // replace the name here
    imgUrl: [],
    members: [
        "Abishek", "Karan","Madhurima", "Shivam"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Analysis and Numerical prediction of Cavitation in fuel injectors.
            </div>
        ),
        des: (
            <div>
                Multiphase flow of diesel through fuel injectors is analysed and simulated using a cavitation model. Variations in geometry size/shape, temperature, pressure gradient, fuel property, etc. were used to assess parameters like vapour fraction, mass flow rate, and cavitation number. To achieve the highest level of prediction accuracy, the resulting data was tabulated and used to predict the cavitation number using numerous ML models.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src={pdf} width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project5;
