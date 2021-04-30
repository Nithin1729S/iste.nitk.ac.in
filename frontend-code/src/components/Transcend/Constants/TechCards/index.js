import matlab from "../images/TechCards/Matlab.png";
import autocad from "../images/TechCards/Autocad.png";
import premiere from "../images/TechCards/Premiere.png";
import aero from "../images/TechCards/aerodynamics.png";
import micro from "../images/TechCards/Microprocessor.jpg";
import oops from "../images/TechCards/oops.jpg";

const techData = [
    {
        title: "Matlab-Simulink",
        desc:
            "Simulink provides a graphical editor, customizable block libraries, and solvers for modeling and simulating dynamic systems. It is integrated with MATLAB®, enabling you to incorporate MATLAB algorithms into models and export simulation results to MATLAB for further analysis.",
        imgUrl: matlab,
    },
    {
        title: "Aerodynamics",
        desc:
            "Aerodynamics is the study of the motion of air, particularly when affected by a solid object. This fascinating subject is the foundation of various mechanical sub domains such as aerospace, aircraft design, drone technology and much more, and essential deals with analysing the various parameters associated with objects and shapes in flight.",
        imgUrl: aero,
    },
    {
        title: "Logism",
        desc:
            "Logisim is an educational tool for designing and simulating digital logic circuits. With its simple toolbar interface and simulation of circuits as you build them, it is simple enough to facilitate learning the most basic concepts related to logic circuits.",
        imgUrl: micro,
    },
    {
        title: "Autocad",
        desc:
            "AutoCAD® is computer-aided design (CAD) software that architects, engineers, and construction professionals rely on to create precise 2D and 3D drawings.",
        imgUrl: autocad,
    },
    {
        title: "Premiere",
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
