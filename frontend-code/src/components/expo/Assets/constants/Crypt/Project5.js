// the name of the variable corresponds the name of the file in lower case
import logo from './speechtosign.png';
const Project5 = {
    // Id is same as the number on the file name
    id: 5,
    // Self explanatory one liner
    oneline:
        "A web application that takes in audio input from a user and converts it to Indian Sign Language in real time",
    logo: {logo}, //Ignore this for now
    name: "Voice to Sign Language", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Shalaka Sankar", "Kishlay Singh", "Adith", "Chandini Rongali","Gulshan Goyal", "Mehta Hriday Niraj", "Swati Agarwal", "Alfaiz Shaikh", "Piyush Kumar Rauniyar"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                To design a real-time voice to sign language interpretor
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                The primary goal of this project is to create a speech to sign language translating system that accepts English audio input and first converts it to English text. This is implemented using Two Dimensional Convolutional Networks (CNN), Recurrent Neural Networks (RNN), and  Connectionist Temporal Classification (CTC) loss. This text is then parsed to create a structured grammar representation, on which Sign Language grammar rules are applied and the corresponding signs are displayed to the user.
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                <iframe src="https://docs.google.com/document/d/18BJ_orhLwM5N4dJdJyH3h6lxFC9gDW0q/edit?usp=sharing&ouid=104610143182281087322&rtpof=true&sd=true" width="640" height="480" allow="autoplay">
                </iframe>
                </div>
            </>
        )
    },
};
export default Project5; // make sure this matches the name of the js object variable