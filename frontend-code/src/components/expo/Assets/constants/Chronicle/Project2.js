// the name of the variable corresponds the name of the file in lower case
import logo from './p2.jpg'

const project2 = {
    // Id is same as the number on the file name
    id: 2,
    // Self explanatory one liner
    oneline:
        "To study & analyze niche genres that are popular/relevant in foreign movies & create stories based on them in relevance to the Indian context.",
    logo: logo, //Ignore this for now
    name: "The Genre Story", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Adarsh", "Anijshnu", "Alokik", "Hanuma", "Krishna", "Akshara", "Divyamshu", "Kushangi", "Pavithra", "Rakshith", "Shradha", "Sudarshan"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                To study & analyze niche genres that are popular/relevant in foreign movies & create stories based on them in relevance to the Indian context.
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                - Study the genre through articles, videos, blogs, books, etc.
                - Analyze the same through a movie & prepare an analysis.
                - Discuss each other's analysis.
                - Write stories based on the genre with an Indian touch.
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe src="https://docs.google.com/document/d/11K5a8jf8gvauV9ysU4xqF5iYWh2TTqVF/edit#" width="780" height="560" title="Project2"></iframe>
                </div>
            </>
        )
    },
};
export default project2; // make sure this matches the name of the js object variable