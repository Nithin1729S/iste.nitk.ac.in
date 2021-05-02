import matlab from "../images/TechCards/Matlab.png";
import autocad from "../images/TechCards/Autocad.png";
import premiere from "../images/TechCards/Premiere.png";
import aero from "../images/TechCards/aerodynamics.png";
import micro from "../images/TechCards/Steganography.png";
import oops from "../images/TechCards/oops.jpg";

const techData = [
    {
        title: "Matlab-Simulink",
        desc:
            "Simulink provides a graphical editor, customizable block libraries, and solvers for modeling and simulating dynamic systems. It's integration with MATLAB, enables you to incorporate MATLAB algorithms into models and export simulation results to MATLAB for further analysis.",
        imgUrl: matlab,
    },
    {
        title: "Aerodynamics",
        desc:
            "Aerodynamics is the foundation of various mechanical sub domains such as aerospace, aircraft design, drone technology etc. It essentially deals with analysing the parameters associated with objects and shapes in flight.",
        imgUrl: aero,
    },
    {
        title: "Steganography ",
        desc: `Steganography is the process of hiding information
            inside another piece of information, image, or audio.
            In essence, it is concealing information in plain sight
            and can be accomplised using advanced forms of signal and
            image processing.`,
        imgUrl: micro,
    },
    {
        title: "Autocad",
        desc:
            "AutoCAD® is computer-aided design (CAD) software that architects, engineers, and construction professionals rely on to create precise 2D and 3D drawings.",
        imgUrl: autocad,
    },
    {
        title: "Premiere Pro",
        desc:
            "Premiere Pro is the industry-leading video editing software for film, TV and the web. Creative tools, integration with other apps and services and the power of Adobe Sensei help you craft footage into polished films and videos.",
        imgUrl: premiere,
    },
    {
        title: "OOPs",
        desc:
            "Design concepts are necessary for any software that exists. These concepts help layout the structure and techstack used for the software and is thus, one of the most fundamental concepts for any technical area",
        imgUrl: oops,
    },
];
export default techData;
