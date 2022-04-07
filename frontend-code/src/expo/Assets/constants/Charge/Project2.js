// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project2 = {
    id: 2,
    oneline:
        "Creating verilog model for lossless data compression algorithms, optimizing them and finally comparing their performances",
    // copy the abstract here
    // logo: logo,
    name: "Data compression on FPGA", // replace the name here
    imgUrl: [],
    members: [
        "Anuja", "Vitthal"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Creating verilog model for lossless data compression algorithms, optimizing them and finally comparing their performances
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
                <iframe src="https://drive.google.com/file/d/1h7MdCHYDoDmuZ7TMsBaBqjT6yUoAN-62/preview" width="640" height="480" allow="autoplay" title="Open in New Window"></iframe>
            </div>
        )
    },
};
export default project2;
