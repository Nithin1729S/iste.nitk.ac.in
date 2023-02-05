import logo from "./project_expo_Vfinal_Crypt1.png"

const project1 = {
    id: 1,
    // tags: ["Networking", " NDN", " Reddit", " Webdev"],
    oneline:
        "3D checkers game that has different levels of AI that a user can play against.",
    logo: logo,
    name: "Checkers",
    imgUrl: [],
    members: [
        "Joshitha", "Pranav Surendran", 'Aditya Santhosh','Akshay B', 'Reshma Tresa Antony','Ananta', 'Marthi N V S Sri Harsha', 'Anjishnu Laskar', 'D Karan', 'Chandini Rongali', 'Bhuvan N M', 'Somayajula Krishna Aswin', "Malvika Koushik"
    ],
    description: {
        aim: (
            <div>
                3D checkers game that has different levels of AI that a user can play against
            </div>
        ),
        des: (
            <div>
                We created a Checkers AI with nice 3D board game play experience, which initially had the minimax algorithm, and then worked our way into creating a reinforcement learning model to train against the minimax algorithm. The game was created on Unity using C sharp. Both the alpha beta minimax algorithm and RL algorithm are coded in python. Both the agents were integrated with unity using flask as the python backend. 
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                <iframe src="https://drive.google.com/file/d/1QRhNKFasUVRScL75jEEwRbHi6ZaFNfBO/preview" width="780" height="560" allow="autoplay" title="Project1" ></iframe>
                
            </div>
        )
    },
};
export default project1;
