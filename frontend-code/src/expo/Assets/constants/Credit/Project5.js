// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './credit6.jpg'


const project5 = {
    id: 5,
    oneline:
        "Understanding consumer behavior in the food retail industry using market basket analysis.",
    // copy the abstract here
    logo: logo,
    name: "Analysing consumer behaviour  in the food retail industry using Market basket Analysis ", // replace the name here
    imgUrl: [],
    members: [
        "Gayathri Nisha", "Ranjeet Sonawane"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Understanding consumer behavior in the food retail industry using market basket analysis.
            </div>
        ),
        des: (
            <div>
                We also performed time series forecasting analysis to predict future stock prices of consumer-centric companies in automobiles, pharmaceuticals, and FMCG. Predicted stock prices were then compared with the actual prices to understand the reasons behind these deviations.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {<iframe src="https://drive.google.com/file/d/14QDo5qm8iK_HcHj_KSBYgA7riib3b8Cm/preview" width="640" height="480" allow="autoplay"></iframe> }
            </div>
        )
    },
};
export default project5;
