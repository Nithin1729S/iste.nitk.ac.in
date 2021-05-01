import matlab from "../images/EventCards/Matlab.jpeg";
import autocad from "../images/EventCards/AutocadW.jpeg";
import premiere from "../images/EventCards/PremLoop.jpeg";
import aero from "../images/EventCards/Wingit.jpeg";
import micro from "../images/EventCards/HCTF.jpeg";
import oops from "../images/EventCards/Cryptonite.jpeg";

const eventData = [
    {
        title: "MATLAB-Simulink Workshop",
        desc:
            "A workshop based on MATLAB-Simulink, a software essential for engineers to replicate and simulate processes throughout one's journey in college. This workshop will explain the fundamentals and rudiments of the software so that students are familiarized and well-versed with the platform's outlook. ",
        img: matlab,
        formLink: "https://forms.gle/pxiawRoVVXixs8HZ7",
    },
    {
        title: "Hardware CTF",
        desc:
            "A 24-hour CTF event involving a series of challenges related to microprocessors, signal and image processing, analog and digital electronics. Winning teams take home prizes worth upto 5K!",
        img: micro,
        formLink: "https://forms.gle/D43gezFgybNyn9tp6",
    },
    {
        title: "WingIt",
        desc:
            "WingIt, an interactive tutorial session to introduce you to the arena of aviation, the intricate decisions behind every step you take, and the challenges you encounter while designing an aircraft.",
        img: aero,
        formLink: "https://forms.gle/T2Xdgdv7yhgmoTv5A",
    },
    {
        title: "AutoCAD Workshop",
        desc:
            "This workshop will familiarize participants with the basics of AutoCAD including drawing shapes, performing editing commands, dimensioning, labelling etc. ",
        img: autocad,
        formLink: "https://forms.gle/shZw5TwxiGc82RTa8",
    },
    {
        title: "Premiere Loop",
        desc: "Teaching people how to do reels transitions professionally",
        img: premiere,
        formLink: "https://forms.gle/seMEqWxqcCNKeoAi6",
    },
    {
        title: "Cryptonite",
        desc:
            "A design only mini-hackathon catered towards first years to provide an experience towards hackathons without the underlying tech needed",
        img: oops,
        formLink: "https://forms.gle/eo8r6xYYnLtGB6BNA",
    },
];
export default eventData;
