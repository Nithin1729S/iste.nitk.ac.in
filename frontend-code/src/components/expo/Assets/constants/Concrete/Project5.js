// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './gfrg_panel.png'

const project5 = {
    id: 5,
    oneline:
        "Comparison of Glass Fibre Reinforced Building with conventional RCC Building.",
    // copy the abstract here
    logo: logo,
    name: "GFRG and RCC", // replace the name here
    imgUrl: [],
    members: [
        "Gopika",
        "Lavanya"," Lukeshwar"," Raghav"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Comparison of Glass Fibre Reinforced Building with conventional RCC Building.
            </div>
        ),
        des: (
            <div>
                The objective of this project was to compare two residential buildings, one made of conventional RCC and the other made of GFRG panels, on the basis of their strength and economic feasibility.Design and analysis of the structures was done using Etaabs software and cost estimation was done using Excel.Results were analysed and a conclusion was formed on which material is better suited for residential buildings.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1Yl54QtAmwFuIyFvDmjcstnhXEIw6B6oj/edit?usp=sharing&ouid=105032069425180413250&rtpof=true&sd=true" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project5;
