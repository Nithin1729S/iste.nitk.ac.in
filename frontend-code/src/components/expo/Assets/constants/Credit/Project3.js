import logo from './SurveyResults.png';
import pdf from './OTTReport.pdf';
const Project3 = {
    id: 3,
    oneline:
        "To study the consumer shift from traditional DTH services to OTT platforms in the Indian Market.",
    logo: logo,
    name: "Exploratory Data Analysis on OTT Platforms",
    imgUrl: [],
    members: [
        "Anagha Dileep", "Deepam Damu Naik", "Soumyakanta Sahoo", "Ananya", "Hritik", "Piyush", "Reeve", "Soumi"
        ],
    description: {
        aim: (
            <div>
            To study the consumer shift from traditional DTH services to OTT platforms in the Indian Market.
            </div>
        ),
        des: (
            <div>
            Conduct an elaborate Exploratory Data Analysis (EDA) on two of the most popular OTT platforms as well as Hindi Television channels. This will involve preprocessing the datasets from each platform/channel followed by drawing insights from them. Analyse the factors affecting the shift from traditional media to the Digital Entertainment Market with the help of a quantitative consumer survey. Conduct a business model analysis on Netflix (tentative) and provide insightful strategies that could improve the performance of OTT platforms and broaden and develop their consumer base in line with the Indian Market.
            </div>
        ),
        res: (
            <>
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe src={pdf} width="640" height="480" allow="autoplay">
                     </iframe>
                </div>
            </>
        )
    },
};
export default Project3;