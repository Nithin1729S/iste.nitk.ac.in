import logo from "../images/project expo_Vfinal_Crypt5.png"
const project4 = {
    id: 4,
    // tags: ["Networking", " NDN", " Reddit", " Webdev"],
    oneline:
        "A  software based router built on the high performance XDP framework",
    // logo: "https://drive.google.com/file/d/1SqH5C-Wfd5Kdjo62wrTv1eiXR9jpkplP/preview",
    name: "Xdp Router ",
    imgUrl: [],
    logo : logo,
    members: [
        'Shriroop','Balaji','Raghav','Akshay B', 'Rahul K', 'Achyut Shegade', 'Vanessa', 'Harsh', 'Priyansh', 'Zeeshan'
    ],
    description: {
        aim: (
            <div>
                A  software based router built on the high performance XDP framework.
            </div>
        ),
        des: (
            <div>
                "XDP is a recently proposed, high-performance packet-processing framework allowing one to write custom packet-processing and execute them directly in the kernel. The general-purpose networking framework provided by the kernel is very flexible and secure, at the cost of performance. XDP solves this issue by utilizing this by processing packets being entering the kernel-networking stack but still doing so in the kernel context.
                We utilize the high-performance capabilities of XDP and build a software-based router processing TCP and UDP and doing so with reduced latency."
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                        <iframe src="https://drive.google.com/file/d/1PAE_JGOH3-27r_GsWiyzo3Yi-Uy1oOKd/preview" width="640" height="480" allow="autoplay" title="Project4"></iframe>
            </div>
        )
    },
};
export default project4;
