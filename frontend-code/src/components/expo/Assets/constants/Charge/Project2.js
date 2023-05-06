// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './p2.jpeg'

const project2 = {
    id: 2,
    oneline:
        "To classify audio files into one of 10 classes and into the music genre if applicable",
    // copy the abstract here
    logo: logo,
    name: "Audio Classification using Deep Learning", // replace the name here
    imgUrl: [],
    members: [
        "Aneesh Kulkarni", "Abhijith Reddy", "Bhuvan N M", "Prateek Bhat", "Ainesh Sinha", "Hari Sharan", "Abhay H"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                To classify audio files into one of 10 classes and into the music genre if applicable
            </div>
        ),
        des: (
            <div>
                The goal of our project model is to classify any given audio into several predefined categories like dog_bark, car_honk, children_playing,street_music etc., Our model also aims to classify street_music it encounters into different genres like country,hip hop, rock etc. We make use of CNNs and Mel spectrogram to achieve this. 
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1wNNpsd6cXNialn3pSfOvh3M7b1mCOmxQ/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project2;
