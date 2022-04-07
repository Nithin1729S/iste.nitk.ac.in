import logo from "../images/project expo_Vfinal_Crypt2.png";
const project2 = {
    id: 2,
    // tags: ["Networking", " NDN", " Reddit", " Webdev"],
    oneline:
        'Secure e-Auction uses the help of Blockchain technology to have an fraud-free auction',
    // logo: "project_expo_Vfinal_Crypt1.png",
    logo : logo,
    name: "Blockchain auction",
    imgUrl: [],
    members: [
        "Balaji Naidu", "Raghav", "Ayush Mangukia", "Nitesh", 'Abhishek Chavan', 'Prathamesh', 'Hanuma', 'Hari', 'Roshan Gupta',  'Adarsh', 'Nikhil'
    ],
    description: {
        aim: (
            <div>
                Secure e-Auction uses the help of Blockchain technology to have an fraud-free auction
            </div>
        ),
        des: (
            <div>
                Auctions offer the unprecedented opportunity for sellers to control the entire selling process. Often these auctions are rigged and buyers are nit anymore competing fairly or on the same term as all the other buyers. This project helps us to tackle with this problem and uses Hyperledger Fabric to run an auction where bids are kept private until the auction period is over. Buyers can only see the hashes of other bids, preventing them to change their bid in response to the other bid. Thus securing the auction through Blockchain.  
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                <iframe src="https://drive.google.com/file/d/1mx919QnsFG0QWqTX2JuLy2jjovC3nXbY/preview" width="780" height="560" allow="autoplay" title="Blockchain auction"></iframe>
            </div>
        )
    },
};
export default project2;
