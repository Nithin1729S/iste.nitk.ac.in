// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './project expo_Vfinal_CHARGE3.png'

const project3 = {
    id: 3,
    oneline:
        "Walking stick with an inbuilt heartattack detector to detect heartattack, notifies the person and call for an emergency aid",
    // copy the abstract here
    logo: logo,
    name: "Walking stick with Heart-attack Detection", // replace the name here
    imgUrl: [],
    members: [
        'Shridevi', 'Kaveen', 'Anuja', 'Vitthal'
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Walking stick with an inbuilt heartattack detector to detect heartattack, notifies the person and call for an emergency aid
            </div>
        ),
        des: (
            <div>
                In this project, we designed an equipment to be used everyday by senior citizens or people prone to heart attacks, to detect heartattacks and call for emergency aid. Heart attack is detected by observing the electrocardiogram (ECG) waveform. The ECG signal is processed in the microcontroller. The alert system on the walking stick warns the user as well as calls the emergency contacts in case of heartattack.

            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1jctuLwfCNMR2ZyMszOQrFjMRJQOfJKyt/preview" width="640" height="480" allow="autoplay" title="Open in New Window"></iframe>
            </div>
        )
    },
};
export default project3;
