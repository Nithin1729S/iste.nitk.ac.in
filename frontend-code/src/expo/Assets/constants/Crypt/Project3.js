import logo from "../images/project expo_Vfinal_Crypt3.png";
const project3 = {
    id: 3,
    // tags: ["Networking", " NDN", " Reddit", " Webdev"],
    oneline: "Pixel-based video game that uses the pixelated assets obtained using Machine Learning.",
    // logo: "https://drive.google.com/file/d/1SqH5C-Wfd5Kdjo62wrTv1eiXR9jpkplP/preview",
    logo : logo,
    name: "ML based pixel art generation",
    imgUrl: [],
    members: [
        "Sarthak" , "Monit" , "Rahul Maheshwari", "Aadil Khalifa",'Kishlay Singh', 'Shalaka Sankar', 'Prerana Prakash', 'Adith', 'Chandini Rongali','Prathmesh','Gurjot Singh' 
    ],
    description: {
        aim: (
            <div>
                Pixel-based video game that uses the pixelated assets obtained using Machine Learning.
            </div>
        ),
        des: (
            <div>
                Pixel art is a form of digital art wherein an image is built with the exclusive and intentional placement of pixels. While it is associated with low-resolution graphics in older 8-bit and 16-bit computers, though the limitation of pixels is no longer a problem, pixel art has come to be an art style of its own right. What makes pixel art both compelling and difficult is the limitations imposed. The task of creating pixel art becomes difficult when choosing the set of colors and placing each pixel such that the final image best depicts the original subject.
                There are methods that can be used to generate pixel art from the original subject which takes much less time than placing each individual pixel, thus contributing to efficiency.Our project aims at using Machine Learning to turn artwork and images into pixel art. We create a pixel-based video game that uses the pixelated assets obtained using Machine Learning.
            </div>
        ),
        res: (
            <div style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                <iframe src="https://drive.google.com/file/d/1ZkzCAClXKMKGrICIQyrRRYfYcuJDI2PP/preview" width="640" height="480" allow="autoplay" title="Pixel Art"></iframe>
            </div>
        )
    },
};
export default project3;
