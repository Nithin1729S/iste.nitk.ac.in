// the name of the variable corresponds the name of the file in lower case
import logo from './p1.jpg';
const project1 = {
    // Id is same as the number on the file name
    id: 1,
    // Self explanatory one liner
    oneline: "Optimization of solar-wind hybrid system",
    logo: logo, //Ignore this for now
    name: "Solar Wind", // Name of project - not provided
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
      "Radhika Rathi", 
      "S.K. Aswin",
      "Akshat Raj Singh",
      "Amoghavarsha G J", 
      "Arjun Junagal", 
      "Abhishek"
    ],
    description: {
      aim: (
        // Aim : self explanatory, keep it inside the div
        <div>
          Optimization of solar-wind hybrid system
        </div>
      ),
      des: (
        // Description : self explanatory, keep it inside the div
        <div>
          The objective of this project is to design a Solar and Wind Energy Hybrid model using SIMULINK, and Compare the output power obtained from the hybrid model with the standalone solar and wind energy models. The project has been done in three stages. First the standalone Solar PV mode was made. Next the standalone Wind model was simulated and analysed, and finally the Solar and Wind energy Hybrid model was simulated and analyzed. The value of the output power obtained in all the three models is analyzed to conclude which model is highly efficient.
        </div>
      ),
      res: (
        // This contains all the images and reports
        <>
          {/* For multiple images/report, copy the entire div and put one embed tag in each */}
          <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
            {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
            <embed src="https://docs.google.com/document/d/1YrTpxkVz4PCyC8e0tdhH0LaFsK2oJQ0l/edit?usp=sharing&ouid=112827894770243770276&rtpof=true&sd=true" width="780" height="560" title="Project2" ></embed>
          </div>

        </>
      )
    },
  };
  
  export default project1; // make sure this matches the name of the js object variable
  