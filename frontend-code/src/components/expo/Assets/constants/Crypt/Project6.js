// the name of the variable corresponds the name of the file in lower case
import logo from './RN.png'
const Project6 = {
    // Id is same as the number on the file name
    id: 6,
    // Self explanatory one liner
    oneline:
        "A graph-theory based approach to intercity road networks",
    logo: {logo}, //Ignore this for now
    name: "Road Traffic Navigator", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Adarsh", "Anjishnu", "Sanket","Kushangi Sharma", "Siddharth Kelkar", "Aakash Reddy", "Isha Prabhu", "Saliq Gowhar", "Aditya Chauhan", "Jayasimha"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                A graph-theory based approach to intercity road networks
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                Mainly a backend-based project. Cities were represented as vertices in the graph, and the edges connecting them with the edge distance being the distance between the two cities. This data was obtained from an API. Various graph algorithms have been implemented in the backend.
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe>
                    src="https://docs.google.com/document/d/13osPEZ2_LJefb8Ym9vki3KPQVosxEc5yE0MImC1QnGg/edit?usp=sharing" width="640" height="480" allow="autoplay"
                     </iframe>
                </div>
            </>
        )
    },
};
export default Project6; // make sure this matches the name of the js object variable