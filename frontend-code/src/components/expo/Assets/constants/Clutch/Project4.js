// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './mahle_battery.jpeg'

const project4 = {
    id: 4,
    oneline:
        "Study & Analysis of BTMS comprehsively of an Electric Vehicle.",
    // copy the abstract here
    logo: logo,
    name: "Battery Cooling of EV", // replace the name here
    imgUrl: [],
    members: [
        "Nitin", "Dilshad","Gayatri", "Shradha", "Omkar"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Study & Analysis of BTMS comprehsively of an Electric Vehicle.
            </div>
        ),
        des: (
            <div>
                Cooling of the battery pack will directly impact the efficiency of EV vehicle, this project aim to build the best model to cool the battery of EV by using different heat transfer concepts, models and also using different coolants.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1hGLvpxfV4Cx9isypyQRAKwpNHBvQbED8cpfHDY2wg-I/edit" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project4;
