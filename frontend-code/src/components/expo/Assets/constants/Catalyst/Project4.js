// the name of the variable corresponds the name of the file in lower case
import logo from './p4.png';
const project4 = {
    // Id is same as the number on the file name
    id: 4,
    // Self explanatory one liner
    oneline:
        "Optimize a model plant for the p-Xylene production using Aspen software to achieve maximum yield and purity.",
    logo: logo, //Ignore this for now
    name: "Optimization of P-Xylene production using Toluene Methylation", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Sanyu Louis D'souza", "Vinayak V Nayak","Nischal E B", "Divyamshu M P"," Arjun Junagal"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                Optimize a model plant for the p-Xylene production using Aspen software to achieve maximum yield and purity.
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                Process simulation of the existing process was conducted in Aspen Plus to construct a base case design. Then reaction parameters were optimized using sensitivity analysis.Finally, heat integration is conducted to improve the efficiency of the process.
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <embed src="https://docs.google.com/document/d/1swSysvQgqsFu77xpnR6nhGTXNMBNNCWD/edit?usp=sharing&ouid=115187656053752421009&rtpof=true&sd=true" width="780" height="560" title="Project5" />
                </div>
            </>
        )
    },
};
export default project4; // make sure this matches the name of the js object variable