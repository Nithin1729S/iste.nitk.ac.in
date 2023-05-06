import logo from './csr.jpeg';

const project5 = {
    id: 5,
    oneline:
        "Comparing the CSR of two industry giants RIL and TATA by using different frameworks and quantitative analysis",
    logo: logo,
    name: "Reliance Industries Ltd:A CSR Analysis",
    imgUrl: [],
    members: [
        "Nitin", "Akshat", "Akhil"
        ],
    description: {
        aim: (
            <div>
            Comparing the CSR of two industry giants RIL and TATA by using different frameworks and quantitative analysis
            </div>
        ),
        des: (
            <div>
            Our project aim is to compare CSR between RIL and TATA. Deep research is done in the field of CSR and then we compare them by using Carroll's Pyramid Framework and CSR policy analysis. Quantitative analysis was done and dashboards were created to quantify the amount spent in different field by these two companies.
            </div>
        ),
        res: (
            <>
                <div
                     style={ { paddingBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" } }>
                    {/* Fetch the embed tag from the gdrive as shown in the meet and put this here */}
                    <iframe>
                    src="https://docs.google.com/document/d/1BLgQyGkXIzbL5wVWyKvZpAmdYwcrFmfO/edit" width="640" height="480" allow="autoplay"
                     </iframe>
                </div>
            </>
        )
    },
};
export default project5;