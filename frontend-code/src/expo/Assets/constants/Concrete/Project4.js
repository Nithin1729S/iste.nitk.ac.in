export default {
    id: 4,
    oneline:
        "In this project, we aim at analysing a structure in a seismic zone and design an earthquake resistant structure. Designing the building using StaadPro and performing a seismic analysis is the primary objective of this project.",
    logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuMLRo-seHPGygbqRRnPCId-ao08TU6OvK4g&amp;usqp=CAU",
    name: "Design and seismic analysis of a building",
    imgUrl: [
        "https://drive.google.com/file/d/1Rc8nfBp1BMktcD5dxBNbEVUZsL3iMFZR/preview",
        "https://drive.google.com/file/d/1GUkKxmiIgZgAUXAGT-HYrZagiavIbIaf/preview",
        "https://drive.google.com/file/d/1yWUc7F2w_e2IA0kjsd0MESchFxwEYiQU/preview",
    ],
    members: [
        "Rashmi Raj",
        "Kunal Motwani ",
        "Sai Shruti Prakhya",
        "Krishna Prasad Kuddannaya",
    ],
    description: {
        aim: (
            <div>
                In this project, we aim at analysing a structure in a seismic
                zone and design an earthquake resistant structure. Designing the
                building using StaadPro and performing a seismic analysis is the
                primary objective of this project. Studying various retrofitting
                measures and finding the suitable technique for the zone is done
                by considering various factors. Finally, a bridge design on
                Staad-Pro was also performed.{" "}
            </div>
        ),
        meth: (
            <div>
                <ol>
                    <li>
                        Designed a G+6 residential building. This included
                        dimensioning, assigning cross sections to members and
                        providing support. It was done on a software, STAADPro
                    </li>
                    <li>
                        Manual Calculation of loads: Referred to the existing
                        Indian Standard(IS) on Criteria of Earthquake Resistant
                        Design of Structures- IS1893(Part 1)-2016, Code of
                        Practice for Design Loads- IS 875(Part 2)-1983 to
                        calculate the dead load, live load and seismic load.
                    </li>
                    <li>
                        Manually calculating the design base shear(Vb) and time
                        period. This was also done by referring to the above
                        mentioned IS Code. Design base shear is an estimate of
                        the maximum expected lateral force on the building due
                        to seismic activity and is calculated using the
                        earthquake zone and soil type, among other parameters.
                    </li>
                    <li>
                        STAADPro Analysis: The seismic parameters were defined
                        under ‘load page-definitons’ for the building designed
                        in 1. Load case details i.e x and z direction for
                        lateral displacement of the building were also specific
                        under ‘load page-load case details’. The analysis was
                        then performed and the results gave us the design base
                        shear, time period and seismic load value.
                    </li>
                    <li>Manual and STAAD Calculations were compared.</li>
                    <li>
                        A theoretical study of various retrofitting measures
                        were done and a suitable option was proposed for India.
                    </li>
                    <li>
                        A bridge was designed on STAADPro. The aim was to
                        perform seismic load analysis on the bridge as well but
                        due to lack of resources on the same, it was not
                        possible.
                    </li>
                </ol>
            </div>
        ),
        res: (
            <div>
                The below images show the G+6 storey building that was designed
                on STAAD-Pro. The building is represented in 3 views; namely,
                top view, front view and isometric view respectively.
                <br />
                <br />
                Material Used- Reinforced Cement Concrete <br />
                <br />
                Structural Members:
                <br />
                <ol>
                    <li>
                        Columns: <br />
                        Length- 2.75m <br />
                        Type 1- 24/floor - 0.6mx0.6m <br />
                        Type 2- 12/floor- 0.55mx0.55m
                    </li>
                    <li>
                        Beams: <br />
                        Cross Section- 0.35mx0.4m <br />
                        Type 1- 30/floor- 4m length <br />
                        Type 2- 30/floor - 5m length
                    </li>
                    <li>
                        Slabs: <br /> Thickness- 0.165m
                    </li>
                    <li>
                        Walls: <br /> Thickness- 0.23m
                    </li>
                </ol>
                Top View of the building
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1BjW2E6x4n6p79mVnJYD1MxRPNKEHyWK1/preview"
                    width="640"
                    height="400"
                ></iframe>
                <br />
                <br />
                Front view of building
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1wCkrjE4bWVTqVkT7c3iCX5ESoywh9V-V/preview"
                    width="640"
                    height="400"
                ></iframe>
                <br />
                <br />
                Isometric view of building
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1lro1NCvoTwB5av9lKOFG4UDP3Sz0_mWp/preview"
                    width="640"
                    height="400"
                ></iframe>
                <br />
                <br />
                Dead Load= 3007.5kN/floor <br />
                Live Load= 375kN/floor
                <br />
                <br />
                Manual calculations of loads: <br />
                Seismic Load= 49524.588kN <br />
                Design Acceleration Coefficient(Sa/g) = 2.0268 <br />
                Time Period= 0.67173sec <br />
                Design Base Shear= 1745.389kN
                <br />
                <br />
                STAAD-Pro calculations of loads: <br />
                Seismic Load= 50827.07 <br />
                Design Acceleration Coefficient(Sa/g) = 2.027 <br />
                Time Period= 1.26sec
                <br /> Design Base Shear= 1648.26kN
                <br />
                <br />
                It is observed that all values approximately match except that
                of the time period. There is a slight variation in the values
                for seismic load and design base shear due to the fact that
                manual calculations were done as per IS1893-Part 1(2016) while
                STAAD-Pro calculations were done as per IS 1893-Part1(2002).
                <br /> <br />
                Retrofitting:
                <br />A comprehensive study was performed of different
                retrofitting methods used on existing structures. The most
                suitable method that can be used for the building designed in
                zone III region of India are:
                <ol>
                    <li>
                        FRP Wrapping: It is the latest technique used for
                        seismic retrofitting. This technique is cost-effective
                        and can be implemented for RC and masonry structures.
                        These are stronger than steel and weigh less than steel.
                        Another advantage of this is the fact that it has high
                        corrosion resistant properties.
                    </li>
                    <li>
                        Adding Steel Braces: These are added to an existing
                        structure. They do not add more load to the existing
                        structure and at the same time, they have the ability to
                        withstand the load. This modification will also make
                        more space for natural light in a structure.
                    </li>
                </ol>
                Bridge Design:
                <br />
                Dimension of Bridge: 80mx20m
                <br /> Material Used- Reinforced Cement Concrete <br />
                Cross Sections of Structural Members: <br />
                (a)Column- 1.2m diameter <br />
                (b)Beam- 0.6m x 0.6m
                <br /> Slab Thickness- 0.3m <br />
                Appropriate vehicle load was applied for load analysis <br />
                The below image represents the bridge designed on STAAD-Pro
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1d_hrPztWCnUo4Z2ndqNHuKJ-rihBl0fk/preview"
                    width="640"
                    height="400"
                ></iframe>
                <br />
                <br />
                Variation of bending moment in the bridge
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1J8Ia4UwdyYmHEUNEw9PFPYnFKZAr2TQC/preview"
                    width="640"
                    height="400"
                ></iframe>
                <br />
                <br />
                Variation of shear force across Y direction in the bridge <br />
                <iframe
                    src="https://drive.google.com/file/d/12VhMWWQFgxAFIzkDdtiJQDz35g3XVaoC/preview"
                    width="640"
                    height="400"
                ></iframe>
                <br />
                <br />
            </div>
        ),
        con: (
            <div>
                Communication and administration in any country relies on its
                road network. Bridge is one such structure which has extreme
                capability in connecting two parts on either side. Studying the
                impact of seismic waves on these structure is an extended scope
                and using appropriate retrofitting measure to these gigantic
                structures.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
