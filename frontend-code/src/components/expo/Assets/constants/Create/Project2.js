// the name of the variable corresponds the name of the file in lower case
import logo from './project_2.jpeg';

const Project2 = {
    // Id is same as the number on the file name
    id: 2,
    // Self explanatory one liner
    oneline:
        "To change the genre of a movie/series using Kuleshov effect ",
    logo: {logo}, //Ignore this for now
    name: "Recut Trailers", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Jitin" , "Hari","Allen" , "Siddhant"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                To explore the Kuleshov Effect and its impact on the perception of genre in film and television
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                Ideation followed by scripting and sourcing clips. Then created a rough version of trailer followed by addition of J&H cuts ,sound effects and bgm. 
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div>
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe 
                    src="https://drive.google.com/file/d/18r_2Pfh_oGcA_zp_rPa89jVb-yCTqsxE/preview" width="640" height="480" allow="autoplay">
                    </iframe>
                </div>
            </>
        )
    },
};
export default Project2; // make sure this matches the name of the js object variable