import Voice from "./Voice.png";
export default {
    id: 6,
    tags: ["image processing", "YOLO", "OpenCV", "Web Dev", "Depth Extraction"],
    oneline:
        "Assist the visually impaired by capturing images and recognising objects in their surroundings.",
    logo:
        "https://www.ravepubs.com/wp-content/uploads/2018/04/Voice_Control-800x418.png",
    name: "Voice Navigator",
    imgUrl: [
        "https://drive.google.com/file/d/1qiHjEuBHjScyfWN6tbwqY16k6MZiEiNF/preview",
    ],
    members: [
        "Ishan Nedumkunnel",
        "Anshuman Sinha",
        "Ankush C",
        "Shankar Suresh",
        "Neha Pai",
        "Aadil Khalifa",
        "Anuja Goyal",
        "Joshitha Reddy",
        "Keesara Vennela",
        "Mansi Singh",
        "Pranav Surendran",
    ],
    description: {
        aim: (
            <div>
                <ol style={{ listStyleType: "disc" }}>
                    <li>
                        Assist the visually impaired by capturing images and
                        recognising objects in their surroundings.
                    </li>
                    <li>
                        Estimate the proximity of each of these objects getting
                        a better understanding of the environment.
                    </li>
                    <li>
                        Give an audio output for the visually impaired user to
                        help the user navigate his/her surroundings.
                    </li>
                </ol>
            </div>
        ),
        meth: (
            <div>
                <ol>
                    <li>
                        Implementation of the YOLO - Object detection algorithm
                        used for real-time object detection
                    </li>
                    <li>
                        Next step involves the Depth Map - Used to determine the
                        relative distances of objects from a viewpoint
                    </li>
                    <li>
                        Integration - Getting the final result after integrating
                        results from the YOLO model and depth map
                    </li>
                    <li>
                        App - Used the Flask Framework to present the Voice
                        Navigator Model
                    </li>
                </ol>
            </div>
        ),
        res: (
            <div>
                <img
                    style={{ paddingLeft: "20%" }}
                    src={Voice}
                    width="75%"
                    height="auto"
                ></img>
                <br />
                Desired Result - <br />
                <div style={{ fontWeight: "lighter" }}>
                    A string containing a list of all objects in front of the
                    user. <br /> Objects in the string appear in increasing
                    order of their depths from the user. <br />
                </div>
            </div>
        ),
        con: (
            <div>
                We achieved the set objectives and were successfully able to
                present a Voice Navigator website. This project can find further
                application in the domain with extra added features.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
