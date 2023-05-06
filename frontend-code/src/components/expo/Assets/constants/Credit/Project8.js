import logo from './None_Technical_Indicators.jpg';
const project8 = {
    id: 8,
    oneline:
        "A look into the indicators based on specific  parameters that are used in technical analysis of stocks, to compare the effectiveness of these indicators in the prediction of stock price movement",
    logo: logo,
    name: "Effectiveness of technical indicators",
    imgUrl: [],
    members: [
        "Praneeth S", "Kaushal Nayak", "Swati Agarwal", "Vibhanshu Vishal", "Shashi Kiran"
        ],
    description: {
        aim: (
            <div>
            A look into the indicators based on specific  parameters that are used in technical analysis of stocks, to compare the effectiveness of these indicators in the prediction of stock price movement
            </div>
        ),
        des: (
            <div>
            The weekly stock market data of 6 companies considered for the analysis has been taken from November 2022 to January 2023. Analysis was done with the close price values as a reference. Indicators based on 3 different parameters were considered. Analysis was done in excel, and the prediction obtained was compared with the actual outcome. A successful prediction was rated positive, and an unsuccessful prediction was rated negative. Based on this, the percentage accuracy was calculated.

            </div>
        ),
        res: (
            <>
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe>
                    src="https://docs.google.com/document/d/1yZtrNPZiHGxsEdGhZK54nNf6BNt1eAmN/edit" width="640" height="480" allow="autoplay"
                     </iframe>
                </div>
            </>
        )
    },
};
export default project8;