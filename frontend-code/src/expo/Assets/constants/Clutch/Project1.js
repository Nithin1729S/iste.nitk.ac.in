// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project1 = {
    id: 1,
    oneline:
        "Aeroacoustic analysis of a Bluff body with spikes at supersonic speed and also at different angles of attack.",
    // copy the abstract here
    // logo: logo,
    name: "Aeroacoustic Analysis of Bluff Bodies with Spikes at Supersonic Speeds", // replace the name here
    imgUrl: [],
    members: [
        "Atharva Joshi",
        "Ananta",
        "Amogh",
        "Om Thakur",
        "Abishek",
        "Rehan",
        "Shivavasthan"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Aeroacoustic analysis of a Bluff body with spikes at supersonic speed and also at different angles of attack.
            </div>
        ),
        des: (
            <div>
                The project aim to analyse aerodynamic and acoustic parameters around a bluff body attached with different spikes at supersonic speeds with varying angle of attack. Aerodynamic parameter such as Drag coefficient is calculated for different spikes using steady state analysis in Ansys Fluent. Final results are compared to conclude the spike with least drag coefficient. Acoustic analysis is carried out by using transient state analysis. Graph depecting variation in sound amplitude with Strouhals number at a point near the spike with respect to time is obtained. This graph shows how sound waves are getting affected near each spike.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1EA7oRFEA1XW1tRoVrA7CMVjYkQ_dOfXm/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project1;
