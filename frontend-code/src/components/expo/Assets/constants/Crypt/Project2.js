// the name of the variable corresponds the name of the file in lower case
const Project2 = {
    // Id is same as the number on the file name
    id: 2,
    // Self explanatory one liner
    oneline:
        "Build an audio sentiment analysis model using CNN on RAVDESS dataset. Add live prediction for voice data. Build a web app for recording audio. Integrate the model with the website for live sentiment prediction. ",
    logo: "", //Ignore this for now
    name: "Audio Sentiment Analysis", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Malvika Koushik", "Prerna Prakash", "Vanessa Fernandes","Hemanth Somanna", "Ainesh Sinha", "Prateek Rajput", "Swati Agarwal", "Urvesh", "Garvit Goyal"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                To perform sentiment analysis on the basis of audio clips using machine learning algorithms
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                Build an audio sentiment analysis model using CNN on RAVDESS dataset. Add live prediction for voice data. Build a web app for recording audio. Integrate the model with the website for live sentiment prediction.
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                <iframe 
                src="https://docs.google.com/document/d/1QH5_-wTO6UZWrabo_sceGTmVjqO1Ph6UHWxhp7b9r98/edit" width="640" height="480" allow="autoplay">
                </iframe>
                </div>
            </>
        )
    },
};
export default Project2; // make sure this matches the name of the js object variable