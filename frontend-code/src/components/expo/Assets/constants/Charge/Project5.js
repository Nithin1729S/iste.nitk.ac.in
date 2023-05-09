// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './p5.png'

const project5 = {
    id: 5,
    oneline:
        "Integration of detection systems for modern kitchens",
    // copy the abstract here
    logo: logo,
    name: "Smart kitchen", // replace the name here
    imgUrl: [],
    members: [
        "Guna Vardhan Vyas N", "Aditya Singh Chauhan", "Chandan Kumar", "Piyush Kumar Rauniyar", "Soumi Ganguly"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Integration of detection systems for modern kitchens
            </div>
        ),
        des: (
            <div>
                Integration of fire, smoke and gas leakage detection systems. Using sensors specific for the detection, and integrating them to be controlled by a single microcontroller. The data is sent from the microcontroller to a website via WiFi. Whenever theres a problem detected, the owner of the kitchen is notified via an alert.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1nf7Yt4Hja0TNQrGQLX6CmnVvw_MT-j_B/edit" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project5;
