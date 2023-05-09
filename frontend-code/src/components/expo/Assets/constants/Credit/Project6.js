const Project6 = {
    id: 6,
    oneline:
        "To implement a quantitative and qualitative predictive model to predict the future sales of a company which can be used to improve future sales predictions.",
    logo: "",
    name: "Sales forecast prediction",
    imgUrl: [],
    members: [
        "Malvika Koushik", "Dornala Seetha Maha Lakshmi", "Rohith", "Sugavanam", "Sachin", "Chaitra"
        ],
    description: {
        aim: (
            <div>
            To implement a quantitative and qualitative predictive model to predict the future sales of a company which can be used to improve future sales predictions.
            </div>
        ),
        des: (
            <div>
            We implemented a linear regression model to conduct quantitative analysis on the dataset received. Sales predictions were done for 3 months. Many qualitative analysis were also performed on the data such as geographic plotting, plotting by flavours, packaging, etc. The detailed study and analysis of the predictive models can be used to improve future sales predictions.

            </div>
        ),
        res: (
            <>
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe src="https://docs.google.com/document/d/1RfhPoLOzNyMi7bU-Q7tyrnh7__HnSYA9/edit" width="640" height="480" allow="autoplay">
                     </iframe>
                </div>
            </>
        )
    },
};
export default Project6;