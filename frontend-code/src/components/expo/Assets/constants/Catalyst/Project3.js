// the name of the variable corresponds the name of the file in lower case
import logo from './p3.jpg';
const project3 = {
    // Id is same as the number on the file name
    id: 3,
    // Self explanatory one liner
    oneline:
        "Analyse and compare four different metaheuristic algorithms in terms of robustness, convergence and transient responses in a PID Control system with benchmark processes",
    logo: logo, //Ignore this for now
    name: "A Comparative Analysis of Metaheuristic Algorithms for PID Controller Optimization", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "D S Krishna Souri" , "Shreesha N A", "Udaya Kiran S", "Aanchal Nayak" , "Sachin Prasanna"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                Analyse and compare four different metaheuristic algorithms in terms of robustness, convergence and transient responses in a PID Control system with benchmark processes
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                Four metaheuristic algorithms werre implemented as in MATLAB and the feedback control system is designed in SIMULINK using benchmark process. The optimal values of controller parameters were found and finally transient responses were obtained.
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <embed src="https://docs.google.com/document/d/1GYAOB-4ibFaCaLfYrXHIGvZVz0g8w-G3/edit?usp=sharing&ouid=117404756710209964837&rtpof=true&sd=true" width="780" height="560" title="Project4" />
                </div>
            </>
        )
    },
};
export default project3; // make sure this matches the name of the js object variable