// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './grid_fins.jpeg'

const project2 = {
    id: 2,
    oneline:
        "Effects of Design Parameters on Aerodynamic Characteristics of Grid Fins",
    // copy the abstract here
    logo: logo,
    name: "Grid Fins", // replace the name here
    imgUrl: [],
    members: [
        "Dilshad",
        "Ojusvi", 
        "Swastik Shetty", 
        "Akhil", 
        "Aman"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Effects of Design Parameters on Aerodynamic Characteristics of Grid Fins
            </div>
        ),
        des: (
            <div>
                Grid fins are aerodynamic control surfaces used on rockets and bombs for increased precision and accuracy in controlling the landing location for reusable launch vehicles. This project involved Investigation and optimization of grid fin aerodynamic characteristics to enhance the efficiency in transonic flow and facilitate reusability with the novel concept of spheriodality. 
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://docs.google.com/document/d/1ON9lbdLkNUUH-VqFqhCE5Zfolvf_3niM/edit?usp=sharing&ouid=111428032400342330988&rtpof=true&sd=true" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project2;
