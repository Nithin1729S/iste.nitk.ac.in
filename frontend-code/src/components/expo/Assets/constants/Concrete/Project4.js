// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './UHI2022.jpeg' 

const project4 = {
    id: 4,
    oneline:
        "Analysis of urban heat islands in coastal Karnataka region.",
    // copy the abstract here
    logo: logo,
    name: "UHI", // replace the name here
    imgUrl: [],
    members: [
        "Farhan"," Vighnesh",
        "Yashas"," Kaveri"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Analysis of urban heat islands in coastal Karnataka region.
            </div>
        ),
        des: (
            <div>
                The objective of the project was to study the impact on LST, NDVI and UHI due to urbanisation over the past 30 years in coastal region of Dakshin Kannada by doing a comparitve study of data from 1992 and 2022.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1BlK4BfYkksFa6jF_zhSMDqY6zJ210ypoJR-QmHEA9sg/edit?usp=sharing" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project4;
