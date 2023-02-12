// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './project expo_Vfinal_CHARGE5.png'

const project4 = {
    id: 4,
    oneline:
        "This project aims to ensure secure and fast communication through wireless radio frequency",
    // copy the abstract here
    logo: logo,
    name: "RF System with encryption", // replace the name here
    imgUrl: [],
    members: [
        "Vennela", "Sai Rohit"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                This project aims to ensure secure and fast communication through wireless radio frequency
            </div>
        ),
        des: (
            <div>
                Through this project, we look to achieve a highly secure and safer mode of communication through the use of encryption techniques and algorithms like AES. The message being communicated cannot be intercepted or read without a password set by the user. The use of radio frequency further enables faster communication over short distances.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
            </div>
        )
    },
};
export default project4;
