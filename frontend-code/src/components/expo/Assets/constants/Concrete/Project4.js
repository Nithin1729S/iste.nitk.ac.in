// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './project expo_Vfinal_CONCRETE4.png' 

const project4 = {
    id: 4,
    oneline:
        "Increasing world population and natural resource limitations has led to a growing demand for more efficient structural systems to achieve a sustainable economy and society. Cold-formed steel CFS) Structural systems are increasingly adopted as primary or secondary structural members in modern building construction because of their light weight, speed of construction, recyclability, and sustainability. We attempted same here, to compare the economic and structural aspects of CFS steel and hot rolled steel.",
    // copy the abstract here
    logo: logo,
    name: "FEM analysis of Industrial/Residential Building made of CFS and Normal Steel", // replace the name here
    imgUrl: [],
    members: [
        "Vaibhav Prathap",
        "Gopika"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Increasing world population and natural resource limitations has led to a growing demand for more efficient structural systems to achieve a sustainable economy and society. Cold-formed steel CFS) Structural systems are increasingly adopted as primary or secondary structural members in modern building construction because of their light weight, speed of construction, recyclability, and sustainability. We attempted same here, to compare the economic and structural aspects of CFS steel and hot rolled steel.
            </div>
        ),
        des: (
            <div>
                In general, hot rolled steel is in vast use as a construction material. It is heavier and cheaper than cold-formed steel. In India, CFS steel has limited use due to its high price. CFS steel is generally used where high finishing and accuracy are expected. This is because they have a better and more finished surface with closer tolerance, often with oily touch surfaces. Bars have well-defined edges and corners. Another benefit of CFS steel is that we can treat it at room temperature. The aim of this project is to see the variation in the strength of the building and the economical feasibility of the use of CFS steel when designed wisely.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1GpplcaxMHRA4ZAhcNUZSVsANPStZ8K0d/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project4;
