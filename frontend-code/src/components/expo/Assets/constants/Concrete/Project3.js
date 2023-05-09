// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './OpenStoryPic.png'
import pdf from './ReportOpenStory.pdf'
const project3 = {
    id: 3,
    oneline:
        "Effect of Open Story and Floor Plan Shape on Buildings under Earthquake Loads using Etabs.",
    // copy the abstract here
    logo: logo,
    name: "Soft storey.", // replace the name here
    imgUrl: [],
    members: [
        "Andrea"," Kaushal",
        "Prateek", "Raghav", "Praneeth"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Effect of Open Story and Floor Plan Shape on Buildings under Earthquake Loads using Etabs.
            </div>
        ),
        des: (
            <div>
                The open-story segment in a building has only columns and no partition walls; its presence causes a discontinuity in the rigidity of the structure. Furthermore, irregular floor plans cause torsional effects on the building. Both features greatly affect a structure’s earthquake resistance. 
                By observing the results (story drift and torsion) obtained after dynamically analyzing different building models on ETABS, this project aims to demonstrate how irregular floor plans and the presence of an open story (on varying floor levels) affects the behavior of a building when subjected to earthquake loads. 
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
export default project3;
