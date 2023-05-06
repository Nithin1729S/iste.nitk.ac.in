import logo from './UnicornImage.jpeg';
const Project1 = {
    id: 1,
    oneline:
        "The project aims to find out the major factors that helped Indian Startups of different fields to become a unicorn",
    logo: logo,
    name: "Indian Unicorn Boom-An In depth Analysis",
    imgUrl: [],
    members: [
        "Adhith", "Saloni", "Alupana Varun Teja", "Buddha Teja", "Balachandra Vasan"
        ],
    description: {
        aim: (
            <div>
            The project aims to find out the major factors that helped Indian Startups of different fields to become a unicorn
            </div>
        ),
        des: (
            <div>
            The project aims to find out the major factors in building up a unicorn. SWOT analysis for the following companies was done: Zomato, Swiggy,BharatPe,PhonePe,Myntra,Nykaa,My11 Circle and Dream 11. Exploratory data analysis for the companies Zomato,Swiggy,Myntra and nykaa were done to understand more about the company.Comparison between the policies undertaken by India , US, China and Singapore for the setting up of startups was done.
            </div>
        ),
        res: (
            <>
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe>
                    src="https://docs.google.com/document/d/1dnkPUhasOCAJ0ySTTaDCpPyvAcBoVHlM/edit?usp=sharing&ouid=103876456411797622392&rtpof=true&sd=true" width="640" height="480" allow="autoplay"
                     </iframe>
                </div>
            </>
        )
    },
};
export default Project1;