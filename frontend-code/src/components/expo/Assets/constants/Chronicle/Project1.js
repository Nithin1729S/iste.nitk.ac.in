// the name of the variable corresponds the name of the file in lower case
import logo from './p1.jpg'

const project1 = {
    // Id is same as the number on the file name
    id: 1,
    // Self explanatory one liner
    oneline:
        "Breakdown of three forms of art - music, poetry and film.",
    logo: logo, //Ignore this for now
    name: "Threes a crowd", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Vishnu", "Jitin", "Hemant Somanna", "Sugavanam Senthil", "Gayathri Reddy", "Uday Kiran", "Chaitra Srikumar", "Balachandar Vasan"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                Breakdown of three forms of art - music, poetry and film.
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                Pick a piece from each of the three categories. Break it down to its finer components, looking at it's tiny details and concluding what makes it so good.
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe src="https://docs.google.com/document/d/1iVhby8R2oustUevpN-5glPD5qNDjyCo5/edit" width="780" height="560" title="Project1"></iframe>
                </div>
            </>
        )
    },
};
export default project1; // make sure this matches the name of the js object variable