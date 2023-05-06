import logo from './spotify.jpg';
const project4 = {
    id: 4,
    oneline:
        "Study of the importance of psychology in business and marketing strategies that Spotify uses.",
    logo: logo,
    name: "Spotify business Analysis",
    imgUrl: [],
    members: [
        "Arun", "Ojas", "Shiva", "Mukund", "Reuben", "Pavitra", "Shreyansh"
        ],
    description: {
        aim: (
            <div>
            Study of the importance of psychology in business and marketing strategies that Spotify uses.
            </div>
        ),
        des: (
            <div>
            Perform various analysis of Spotify like the Porters 5 forces, Blue Ocean Analysis, SWOT, etc. Use tableau to visualize the sales and profit data of Spotify and also studied how Spotify uses psychology in its recomendation algorithms and its subscriptions.
            </div>
        ),
        res: (
            <>
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe>
                    src="https://drive.google.com/drive/folders/1ycuIVYFnKVvb1Kpm4GG1E9hmU_5Fopob" width="640" height="480" allow="autoplay"
                     </iframe>
                </div>
            </>
        )
    },
};
export default project4;