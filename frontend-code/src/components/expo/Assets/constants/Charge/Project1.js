// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './project expo_Vfinal_CHARGE1.png'

const project1 = {
    id: 1,
    oneline:
        "Developing HDL realizations of a various image processing algorithms for various applications such as smoothing, edge detection, morphological filters, etc.",
    // copy the abstract here
    logo: logo,
    name: "Image processing using verilog", // replace the name here
    imgUrl: [],
    members: [
        'Fouzan','Harshavardhan', 'Vishal',  'Achyut', 
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Developing HDL realizations of a various image processing algorithms for various applications such as smoothing, edge detection, morphological filters, etc.
            </div>
        ),
        des: (
            <div>
                In this project, we created a verilog models for Huffman encoding and Shanon Fano encoding i.e.lossless data compressing algorithms. State diagrams for these algorothms were designed and then verilog modules were created on that basis. Then the model was optimised by removing the redundancy in the code. Finally, performance of the two algorithms were compared. 
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/16crbL4hvlVhSUHgBJBCOUwrCMJPp0U6P/preview" width="640" height="480" allow="autoplay" title="Open in New Window"></iframe>
            </div>
        )
    },
};
export default project1;
