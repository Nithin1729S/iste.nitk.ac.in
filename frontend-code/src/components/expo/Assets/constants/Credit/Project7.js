import logo from './inrusd.png'
const project7 = {
    id: 7,
    oneline:
        "Understanding how the recent Russia-Ukraine war has impacted on Indian Economy",
    logo: logo,
    name: "GLOBAL CONFLICTS AND THEIR INDIAN",
    imgUrl: [],
    members: [
        "Abhigyan Pathak", "Abel George Paul", "Harsha Satija", "Rakshith", "Kamaldeep", "Ayush", "Priyanshu"
        ],
    description: {
        aim: (
            <div>
            Understanding how the recent Russia-Ukraine war has impacted on Indian Economy
            </div>
        ),
        des: (
            <div>
            We used secondary research and Excel analytics to gather information on sectors of major trade between Russia and Ukraine with India. Currency and oil datasets of the past year were analysed for major discrepancies and the reasons pinned down for them by researching events based on that time frame. For other sectors monthly data was collected and compared with historical data to find any unusual changes based on the rapidly changing economic situations.
            </div>
        ),
        res: (
            <>
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe>
                    src="https://drive.google.com/drive/folders/1oZqYHnpnLiOa9YmHkrV-t2dwmUHBqEGA?usp=share_link" width="640" height="480" allow="autoplay"
                     </iframe>
                </div>
            </>
        )
    },
};
export default project7;

