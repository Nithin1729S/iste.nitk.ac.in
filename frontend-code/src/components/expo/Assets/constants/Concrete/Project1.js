// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './ForcesAndReaction.png'

const project1 = {
    id: 1,
    oneline:
        "Design and Analysis of Labyrinth Ferrocement Dam using ABAQUS",
    // copy the abstract here
    logo: logo,
    name: "Ferrocement", // replace the name here
    imgUrl: [],
    members: [
        "Prathamesh Kapile",
        "Siddhant Shrivastava"," Siddhi Parkar"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Design and Analysis of Labyrinth Ferrocement Dam using ABAQUS
            </div>
        ),
        des: (
            <div>
                Because of closely packed mesh, Crack width of ferrocement is very less and it makes the ferrocement impermeable. So labyrinth ferrocement dam is a good alternative for storing water at local levels.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1qJVuCv0TdB10NzrNLJLKrjrALk3qy1Nh/edit" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project1;
