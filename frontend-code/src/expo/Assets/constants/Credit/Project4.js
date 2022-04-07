// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project4 = {
    id: 4,
    oneline:
        "Analysing how various economic parameters and consumer centric industries were impacted due to the pandemic.",
    // copy the abstract here
    // logo: logo,
    name: "Studying the economic impact of Covid-19 and analysing how it led to the growth of newer forms of management in the business sector", // replace the name here
    imgUrl: [],
    members: [
        "Rohan Surathkal", "Mohona Mukherjee", "Abhigyan Pathak", "Saloni Mathur", "Lakshmi Bharathi M", "Abhishek Kumar"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Analysing how various economic parameters and consumer centric industries were impacted due to the pandemic.
            </div>
        ),
        des: (
            <div>
                Three economic parameters have been selected: inflation, unemployment, industrial production, and GDP growth. A comparative analysis was carried out for these three parameters across India, South Korea, and the United Kingdom. Post and pre-pandemic values were analyzed, and valuable conclusions were drawn from them.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {<iframe src="https://drive.google.com/file/d/1VV5hZ4FzKhd3DZ6Vprvl9wOg0V-ZEUUw/preview" width="640" height="480" allow="autoplay"></iframe>}
            </div>
        )
    },
};
export default project4;
