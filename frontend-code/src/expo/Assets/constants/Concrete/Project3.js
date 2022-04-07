// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './project expo_Vfinal_CONCRETE3.png'

const project3 = {
    id: 3,
    oneline:
        "Analyzed the impact of passive design strategies on EUI (Energy Use Intensity) and Annual Energy Costs on buildings in India using Whole building energy simulation.",
    // copy the abstract here
    logo: logo,
    name: "Impact of passive design features on energy efficiency of buildings ", // replace the name here
    imgUrl: [],
    members: [
        "Y Prathap",
        "Andrea Thomas",
        "Anagha Dileep",
        "Kaushal Nayak"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Analyzed the impact of passive design strategies on EUI (Energy Use Intensity) and Annual Energy Costs on buildings in India using Whole building energy simulation.
            </div>
        ),
        des: (
            <div>
                Climate change is having a tremendous effect on our fragile ecosystem, where the acceleration of its impact is believed to have occurred due to human activities that release greenhouse gases into the atmosphere. It is estimated that the building sector accounts for 40% of the world’s energy consumption. Passive design strategies are features innate to the form and design of a building that channelizes available natural resources to ensure thermal comfort and reduce the usage of lighting devices. In this project we analyzed the impact of various passive design strategies that improve the energy efficiency of buildings in India.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/18HFOXoQJ3fW_1IRnQgD16K3uQNJgSdDq/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project3;
