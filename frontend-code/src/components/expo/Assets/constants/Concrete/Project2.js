// import logo from "../images/project expo_Vfinal_Crypt1.png"

const project2 = {
    id: 2,
    oneline:
        "Analysis of Stability of High-Rise Building Using Shear Wall Method",
    // copy the abstract here
    logo: "",
    name: "Shear walls", // replace the name here
    imgUrl: [],
    members: [
        "Abel"," Shashank",
        "Priyanshu"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Analysis of Stability of High-Rise Building Using Shear Wall Method
            </div>
        ),
        des: (
            <div>
                Here we compare the behaviours of a building without shear and with shear( at corners and at edges). The software used is ETABS which is used to create and compare these structures. In so doing, we can figure out the benefits of a building with a shear wall than one without it.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1-_2sum4U6vioq4c6pr73ODouKvC2uTqFsBObN5PoW98/edit" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project2;
