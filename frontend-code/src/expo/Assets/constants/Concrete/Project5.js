// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project5 = {
    id: 5,
    oneline:
        "Preservice analyses are performed to ensure structural integrity of an offshore jacket for all anticipated loading conditions prior the unit is in place for its expected functions.",
    // copy the abstract here
    // logo: logo,
    name: "Pre-Service Analyses of offshore Jacket Structure", // replace the name here
    imgUrl: [],
    members: [
        "Abhay",
        "Imtiaz",
        "Arjun",
        "Shashank"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Preservice analyses are performed to ensure structural integrity of an offshore jacket for all anticipated loading conditions prior the unit is in place for its expected functions.
            </div>
        ),
        des: (
            <div>
                Offshore structures are large steel structures that are installed in sea for various purposes such as oil & gas extraction, wind energy etc. Overall, the cost of constructing the structure offshore completely is highly ineffective, hence usually majority of the construction is performed onshore in fabrication yards. They are then lifted and loaded out onto a barge, transported offshore, and then lifted from the barge and placed in its service location. Therefore, design and analyses of an offshore structure will also be governed by its preservice conditions of loadout, transportation, and lift, in addition to its design in-service conditions.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1eXkCuijy8oLdxvT1eLVXLIv1d8XNn1jf/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project5;
