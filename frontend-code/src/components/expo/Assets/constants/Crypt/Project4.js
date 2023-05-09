// the name of the variable corresponds the name of the file in lower case
import logo from './chatbot.png';
import pdf from './ChatBot.pdf'
const Project4 = {
    // Id is same as the number on the file name
    id: 4,
    // Self explanatory one liner
    oneline:
        "ChatBot for general use that can have a normal conversation with a human being ",
    logo: logo, //Ignore this for now
    name: "CHITTI the Chatbot", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Harsha", "Karan", "Hanuma", "S.K.Aswin","Ayushmaan", "Meghana", "Pranav", "Saliq", "Kushangi", "Divyangana", "Shivam", "Hemanth", "Siddarth"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                To create a personalized general purpose chat-bot.
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                The bot uses a transformer based model as the base for conversation. It uses the BERT model for the classdication of the multiple bots in the backend. The multiple bots in the backend consist of webscraping bots, story bot and the transformer. The front end is made using html, css and javascript. Flask is used as the server for communication between the frontend and the backend.
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                <iframe src={pdf} width="640" height="480" allow="autoplay">
                </iframe>
                </div>
            </>
        )
    },
};
export default Project4; // make sure this matches the name of the js object variable