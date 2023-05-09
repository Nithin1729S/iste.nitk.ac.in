// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './project expo_Vfinal_CHARGE1.png'
import pdf from './Digital_Oscilloscope_Using_FPGA_ (1).pdf';
const project1 = {
    id: 1,
    oneline:
        "Implementation of dual channel oscilloscope on a Basys 3 FPGA",
    // copy the abstract here
    logo: logo,
    name: "Digital Oscilloscope using FPGA", // replace the name here
    imgUrl: [],
    members: [
        'Malkangouda S Patil','Nihar Gowda S',"Yash Malve", "Varun Teja", "Bhaskara Akhila", "Kunal Kumar" , "Mallishawri A" , "Vishnu Kumar" 
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Implementation of dual channel oscilloscope on a Basys 3 FPGA
            </div>
        ),
        des: (
            <div>
                The goal of the project is to implement a 2 channel digital oscilloscope on a FPGA. FPGA’s programmable nature make it more versatile than any other computer processor in terms of both speed and efficient utilization of hardware used.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src={pdf} width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project1;
