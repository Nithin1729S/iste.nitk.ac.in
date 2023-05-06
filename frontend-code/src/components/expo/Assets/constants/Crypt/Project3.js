// the name of the variable corresponds the name of the file in lower case
import logo from './ChitraE.jpeg'
const Project3 = {
    // Id is same as the number on the file name
    id: 3,
    // Self explanatory one liner
    oneline:
        " A deep learning model that can apply a Monet-style filter to input images of various scenes. ",
    logo: {logo}, //Ignore this for now
    name: "ChitaE", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Aneesh","Saloni","Bhuvan","Sachin", "Chetan", "Nihal", "Rohith", "Nandana", "Himanshu", "Buddha Teja", "Nived"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                To create a deep learning model that can apply a painting-style filter to input images of various scenes.
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                The model uses a style-transfer algorithm to produce images that resemble Claude Monet’s signature style.Our proposed model uses a CycleGAN architecture to transform input images into Monet-style paintingsThe dataset used is ‘I am something of a painter myself’ which is a collection of images that can be used for training and testing generative adversarial networks (GANs) for image-to-image translation tasks.To allow users to upload their images and view the Monet-style transformation in real-time,a web application is developed that integrates the model with a Flask web framework
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                <iframe 
                src="https://drive.google.com/file/d/1e-SBmrsoun89xB0fL47S0fWE5KVN7-7k/view?usp=sharing" width="640" height="480" allow="autoplay">
                </iframe>
                </div>
            </>
        )
    },
};
export default Project3; // make sure this matches the name of the js object variable