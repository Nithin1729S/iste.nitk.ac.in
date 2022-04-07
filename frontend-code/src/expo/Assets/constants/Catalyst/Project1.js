// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project1 = {
    id: 1,
    oneline:
        "Comparing yields of phenol produced by two different processes.",
    // copy the abstract here
    // logo: logo,
    name: "Design and Comparative Analysis for Phenol Production", // replace the name here
    imgUrl: [],
    members: [
        "Rohan Suratkal", "Mohona Mukherjee", "Sanyu Dsouza", "DS Krishna Souri", "Soumyakanta Sahoo"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Comparing yields of phenol produced by two different processes.
            </div>
        ),
        des: (
            <div>
                Two different methods of phenol production have been chosen for this project. The first is the peroxidation of cumene to produce phenol and acetone. The second one involves the oxidation of benzene by nitrous oxide to produce phenol as the primary product. The process designs are then chalked out as a flowsheet using the DWSIM software. Various properties of product streams, feed streams, and recycle are tabulated in a property master table. This table is then used to perform a comparative analysis between the two selected processes and then conclude which one is the most efficient and suitable method for high yield phenol production.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {
                <iframe src="https://drive.google.com/file/d/17DZMsTpTbt_G_FaE7PgaFFEq4-yie5aS/preview" width="640" height="480" allow="autoplay"></iframe>
                }
            </div>
        )
    },
};
export default project1;
