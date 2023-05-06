// the name of the variable corresponds the name of the file in lower case
import logo from './project_3.png';
const Project3 = {
    // Id is same as the number on the file name
    id: 3,
    // Self explanatory one liner
    oneline:
        "Stranger Things ",
    logo:{logo},//Ignore this for now
    name: "Stranger Things ", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Praneeth S","Radhika Rathi","Vamshik", "Jashwanth"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                Stranger Things Trailer
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                The key idea of this project is to  make an intro scene for the famous Netflix TV series Stranger Things with the aid of 3D modeling software like Maya, Blender, unreal engine and finally compling the renders together by using video editing software like Premiere Pro
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe 
                    src="https://drive.google.com/file/d/11CSbZVxkkvHECcp3MIaY4OH7YGHBRxVw/preview" width="640" height="480" allow="autoplay">
                    </iframe>
                </div>
            </>
        )
    },
};
export default Project3; // make sure this matches the name of the js object variable