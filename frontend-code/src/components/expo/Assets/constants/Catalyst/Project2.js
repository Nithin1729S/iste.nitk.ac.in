// the name of the variable corresponds the name of the file in lower case
import logo from './p1.jpg';
const project2 = {
    // Id is same as the number on the file name
    id: 2,
    // Self explanatory one liner
    oneline: "Designing of a triple effect Forward and Backward feed evaporation system using DWSIM",
    logo: logo, //Ignore this for now
    name: "Computational Modelling of Multiple Effect Evaporation for Water Desalination",
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
      "D S Krishna Souri",
      "Aanchal Nayak",
      "Abhishek",
      "Amoghavarsha G J"
    ],
    description: {
      aim: (
        // Aim : self explanatory, keep it inside the div
        <div>
          Designing of a triple effect Forward and Backward feed evaporation system using DWSIM
        </div>
      ),
      des: (
        // Description : self explanatory, keep it inside the div
        <div>
          This project aims to simulate an environment where we perform desalination of water containing 20% salt to water of 99% purity (approximately) using DWSIM software.
        </div>
      ),
      res: (
        // This contains all the images and reports
        <>
          {/* For multiple images/report, copy the entire div and put one embed tag in each */}
          <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
            {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
            <embed src="https://docs.google.com/document/d/1Y8enNXkA0iW2HS0OYJmp0kVvYUVJerRG/edit?usp=sharing&ouid=111091273039651040449&rtpof=true&sd=true" width="780" height="560" title="Project3" />
          </div>
          <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
            {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
            <embed src="https://docs.google.com/document/d/1B-VMQjIR31xZiMXMPSmPb9k-6k_MsCOW/edit?usp=share_link&ouid=113394902546307792538&rtpof=true&sd=true" width="780" height="560" title="Project3" />
          </div>
        </>
      )
    },
  };
  
  export default project2; // make sure this matches the name of the js object variable
  