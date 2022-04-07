// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project3 = {
    id: 3,
    oneline:
        "Demonstrate that the weekly google search volume of cryptocurrencies/NIFTY 50 companies has correlation with the weekly market price and volume changes.",
    // copy the abstract here
    // logo: logo,
    name: "INFLUENCE OF GOOGLE TRENDS ON STOCK AND CRYPTO MARKET- EMPIRICAL ANALYSIS", // replace the name here
    imgUrl: [],
    members: [
        "Rahul Harikumar", "Cyriac", "Rehan", "Gurjot", "Kaushal", "Praneeth"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Demonstrate that the weekly google search volume of cryptocurrencies/NIFTY 50 companies has correlation with the weekly market price and volume changes.
            </div>
        ),
        des: (
            <div>
                By analyzing changes in Google query volumes for search terms related to finance, we find patterns that may be interpreted as “early warning signs” of stock market moves. Our results illustrate the potential that combining extensive behavioral data sets offers for a better understanding of collective human behavior.

We examine the closing prices and volume growth of a stock in the NSE and Cryptocurrency to discover the relationship between the volume of search inquiries for a certain term and the overall direction of trading decisions. We utilise Google Trends to establish how many searches for a specific search phrase, such as ""Bitcoin"", were conducted in a given week compared to the overall number of searches conducted on Google during that time period.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {<iframe src="https://drive.google.com/file/d/1jIHi7Gz5TiJS8A6S2G5ZBv9Hos84Ekgj/preview" width="640" height="480" allow="autoplay"></iframe> }
            </div>
        )
    },
};
export default project3;
