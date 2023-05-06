import logo from './FCI.jpeg';
const Project2 = {
    id: 2,
    oneline:
        "Using ML to predict inflation rates and developing investment portfolios to combat earlier predicted inflation.",
    logo: logo,
    name: "Forecasting and Combating Inflation",
    imgUrl: [],
    members: [
        "Vishnu", "Prathamesh", "Abhay", "Raghav", "Ayushmaan", "Alfaiz"
        ],
    description: {
        aim: (
            <div>
            Using ML to predict inflation rates and developing investment portfolios to combat earlier predicted inflation.
            </div>
        ),
        des: (
            <div>
            Using the SARIMA ML model, we predict inflation rates using CPI data from the World Bank from the past 50 years. These inflation rates are then taken into account when devising three investment portfolios - high, medium, low risk portfolios.
            </div>
        ),
        res: (
            <>
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe>
                    src="https://docs.google.com/document/d/1me2Bhxn6Gj5kvmWJLXvHmcnbgEsXBaEH/edit?usp=sharing&ouid=111562483932442710839&rtpof=true&sd=true" width="640" height="480" allow="autoplay"
                     </iframe>
                </div>
            </>
        )
    },
};
export default Project2;