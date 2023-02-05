import logo from "./project_expo_Vfinal_Crypt4.png"
const project5 = {
    id: 5,
    oneline:
        "Deep learning based search engine, but for images.",
    // logo: "https://drive.google.com/file/d/1SqH5C-Wfd5Kdjo62wrTv1eiXR9jpkplP/preview",
    name: "Image Cataloguer ",
    logo : logo,
    imgUrl: [],
    members: [
        "Aakarshee Jain", 'Aneesh Kulkarni', 'Gayatri Nisha', 'Harini T', 'Mansi Singh', 'Nihal Radhakrishna', 'Pratik Shivnani', 'Rahul Kumar',  'Saloni Mathur', 'Sanket Hanagandi'
    ],
    description: {
        aim: (
            <div>
                Deep learning based search engine, but for images.
            </div>
        ),
        des: (
            <div>
                Image Cataloguers is a search engine for images built on Flask. Like Google image search, the application takes an input image from a user. It outputs many similar images and a list of "tags," which can be applied as a filter to get a specific set of images. This classic machine learning project uses a clustering algorithm to find a cluster of similar images, PCA and CNNs for feature extraction, and object and color detection for generating tags. 
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                        <iframe src="https://drive.google.com/file/d/1XPgevcYReBtKRt8sEDEKol-Smz__6UK4/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project5;
