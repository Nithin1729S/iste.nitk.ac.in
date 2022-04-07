// import logo from "../images/project expo_Vfinal_Crypt1.png"


const project1 = {
    id: 1,
    oneline:
        "Utilizing DEM and raster data operations to delineate watersheds and derive features using geographic information system (GIS)",
    // copy the abstract here
    // logo: logo,
    name: "Watershed Analysis on the Netravati River Basin", // replace the name here
    imgUrl: [],
    members: [
        "Imtiaz",
        "Rohan Sorathiya",
        "Pushpendra Rajak"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                Utilizing DEM and raster data operations to delineate watersheds and derive features using geographic information system (GIS)
            </div>
        ),
        des: (
            <div>
                A watershed is a land through which all water flows as it enters a body of water. Like a funnel directing sand into a bottle, a watershed directs water from the surrounding land into a basin. Watersheds cover all of the earth's land. Our study looks at the Netravati River basin, the source of water for NITK. Using DEM data from SRTM, in QGIS software, we delineate watersheds and derived features such as streams, stream networks, catchment areas, basins etc. We have also generated a 3D model for better visuals and performed unsupervised and supervised Land use classification of the watershed using Landsat imagery.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1tn6POUwb6OqskPr3XFCgUTbNzAgCIUFB/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project1;
