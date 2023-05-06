import logo from './comicstripseries_coverpage.PNG';
// the name of the variable corresponds the name of the file in lower case
const Project1 = {
    // Id is same as the number on the file name
    id: 1,
    // Self explanatory one liner
    oneline:
        "Understanding the comic design process and designing comic strips.",
    logo: logo, //Ignore this for now
    name: "Comic Strip Series", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Abhigyan", "Anjishnu", "Nithila", "Seetha", "Soumyakanta","Aanchal", "Shradha", "Soumi", "Swati", "Umika"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                To utilize different editing softwares to analyze comip strip design techniques and create new projects
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                Designed 3 comic strips involving the steps of ideation, storyboarding, sketching, Digitalising and colouring. Softwares used for the project were Adobe Photoshop and Adobe Illustrator
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
                    src="https://drive.google.com/file/d/1jjH1lrcM3Ddqqj_w31jET2Ms_oDwD48F/preview" width="640" height="480" allow="autoplay"
                     </iframe>
                </div>
            </>
        )
    },
};
export default Project1; // make sure this matches the name of the js object variable