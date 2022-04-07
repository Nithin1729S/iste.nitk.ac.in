// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './create.jpg'

const project1 = {
    id: 1,
    oneline:
        "Visualization of ISTE Special interest Groups through 3D Animation and graphics",
    // copy the abstract here
    logo: logo,
    name: "3D pop animation project", // replace the name here
    imgUrl: [],
    members: [
        'Ananta', "Amogh", "Radhika Rathi", "Praneeth S", 
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Visualization of ISTE Special interest Groups through 3D Animation and graphics
            </div>
        ),
        des: (
            <div>
                What exactly is engineering? If you know that then what is mechanical engineering?... 
                I think everyone asks these questions at least once in their lifetime. And yet many are still searching for the answers. Engineering is a concept and concepts are best learnt when they can be visualized. Giving shape to any idea/concept has always been very challenging. We like challenges ;) The key idea for the project will be to visualize the important concepts of every sig in ISTE and build a model of the concept with the help of 3D softwares. We will be visualizing, creating and animating in a 3D environment to render a final POPping animation.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1uEQhRGMj77YjZYmOoJz6ZQNrkJaAwphj/preview" width="720" height="540" allow="autoplay" title="Create1"></iframe>
            </div>
        )
    },
};
export default project1;
