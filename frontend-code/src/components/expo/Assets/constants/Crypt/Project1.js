// the name of the variable corresponds the name of the file in lower case
import logo from './NFTs.png'
const Project1 = {
    // Id is same as the number on the file name
    id: 1,
    // Self explanatory one liner
    oneline:
        "To build an NFT marketplace where the users can trade their NFTs ",
    logo: logo, //Ignore this for now
    name: "ISTE's NFT Marketplace", // Name of project
    imgUrl: [], //Keep this as is
    // Team members has both mentors and mentees, all names inside quotes
    members: [
        "Hanuma", "Prathamesh", "Jitin","Pranav Salunkhe", "Sujan", "Akul", "Meghana Iyenger"
    ],
    description: {
        aim: (
            // Aim : self explanatory, keep it inside the div
            <div>
                To create a personalized NFT marketplace for members to buy and sell NFTs
            </div>
        ),
        des: (
            // Description : self explanatory, keep it inside the div
            <div>
                An NFT marketplace is a digital platform where unique digital assets represented by NFTs can be bought, sold, and traded by creators and collectors. It allows creators to upload their digital assets and set prices for them, while buyers can purchase them using cryptocurrency. The blockchain ensures that the NFT is immutable and secures the ownership.
            </div>
        ),
        res: (
            // This contains all the images and reports
            
            <>
                {/* For multiple images/report, copy the entire div and put one embed tag in each */}
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe>
                    src="https://drive.google.com/file/d/1jjH1lrcM3Ddqqj_w31jET2Ms_oDwD48F/preview" width="640" height="480" allow="autoplay"
                     </iframe>
                </div>
            </>
        )
    },
};
export default Project1; // make sure this matches the name of the js object variable