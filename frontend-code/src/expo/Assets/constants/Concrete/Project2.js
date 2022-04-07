// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './project expo_Vfinal_CONCRETE2.png'

const project2 = {
    id: 2,
    oneline:
        "Analyze the importance of retrofitting techniques in a structure in a Zone IV region",
    // copy the abstract here
    logo: logo,
    name: "Seismic Analysis of Building before and after Retrofitting", // replace the name here
    imgUrl: [],
    members: [
        "Krishna Prasad",
        "Chandana RV",
        "Shashank Pandey",
        "Abel George"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Analyze the importance of retrofitting techniques in a structure in a Zone IV region
            </div>
        ),
        des: (
            <div>
                To study the effectiveness of retrofitting techniques on G+8 building in zone IV using ETAB. The approach is by trying to implement suitable retrofitting techniques and come up with the best one for the structure mentioned above. The project is going to be done in 2 phases, before retrofitting techniques and after retrofitting techniques to understand the reaction of building during the impact of seismic loads.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1818xfqepu09OLmeGllF-YHu1daJ13pM_/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project2;
