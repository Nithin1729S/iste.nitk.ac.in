// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project1 = {
    id: 1,
    oneline:
        "A look into why consumers make irrational decisions in their day to day lives, business instances and financial goals. ",
    // copy the abstract here
    // logo: logo,
    name: "The effect of biases on economic decision-making and exploring these biases using Behavioral Economics", // replace the name here
    imgUrl: [],
    members: [
        "Susmita Saha", "Krishna Prasad", "Abel G", "Adith", "Akash Kori", "Arjun Anil Kumar", "Harsha Satija", "Vishnu Radhakrishnan"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                A look into why consumers make irrational decisions in their day to day lives, business instances and financial goals. 
            </div>
        ),
        des: (
            <div>
                Under this project we would like to understand the behavioral aspects while taking any decisions by consumers. As per the traditional economic theory, it says a consumer will alsways tend to take decision rationally, which is often not the reality and also proved by behavioral economics. In this project we have dwelled into scenarios in business, stock market and day to day instances by performing qualitative analysis (EAST Framework) and quantitative analysis (Survey and Chi-Squared Test). With this study we have arrived at conclusions on how behavioural economic theory dominate over the traditional economic theory. 
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {<iframe src="https://drive.google.com/file/d/1Y9_bKpT8X846AVlIo7RRzL06EIRbVQ32/preview" width="640" height="480" allow="autoplay"></iframe> }
            </div>
        )
    },
};
export default project1;
