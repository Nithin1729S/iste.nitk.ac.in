// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './Car_Opt.png'

const project2 = {
    id: 2,
    oneline:
        "Designing and Optimizing a wheel base of Supra 2019",
    // copy the abstract here
    logo: logo,
    name: "Aerodynamic optimization of a wheel base of a car", // replace the name here
    imgUrl: [],
    members: [
        "Ayush",
        "Cyriac T",
        "Shivraj D",
        "Kishlay S",
        "Tushar J"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Designing and Optimizing a wheel base of Supra 2019
            </div>
        ),
        des: (
            <div>
                In this project we are revamping and redesigning our own wheel base from the wheel assembly to the wheel rims. The main aim is to design a lighter, more efficient and compact aerodynamic design.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1zsouW8gwc895leZmpEQaGjUvbp0t3BSr/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project2;
