const project2 = {
    id: 2,
    tags: ["STAAD Pro"],
    oneline:
        "To obtain an efficient bridge girder design with optimised materials by analysing shear force and bending moment of different self designed bridge girders using STAAD PRO.",
    logo: "https://erkrishneelram.files.wordpress.com/2015/01/il-appr-span-21-23-003.jpg",
    name: "Design of Bridge Girders-Using Euro and AASHTO codes",
    imgUrl: [],
    members: ["Rashmi Raj", "Shreehari M", "Saurabh Tiwari", "Prathap Y"],
    description: {
        aim: (
            <div>
                To obtain an efficient bridge girder design with optimised
                materials by analysing shear force and bending moment of
                different self designed bridge girders using STAAD PRO.
            </div>
        ),
        meth: (
            <div>
                ● Description of Bridge SuperStructure
                <br />
                The bridge structure considered in this case study has a length
                of 25 m simply supported over the piers or abutments of the
                bridge substructure. The thickness of the deck slab is 250 mm in
                all respects. Sizes of longitudinal girders and cross girders
                are considered as 2000x500 mm and 1500x250 mm respectively.
                <br />
                <br />● Design Analysis
                <br />
                The design of bridge girders has been performed for dead and
                live loads. Dead load of the slab is assumed as 7.5 KN/m² where
                as dead load of members are considered in STAAD Pro. For live
                loads IRC codes, Euro codes and AASHTO Specifications have been
                preferred and models has been created in STAAD Pro.
                <br />
                <br />● Result Analysis
                <br />
                I. Live Load- Bending moments, shear forces and deflections due
                to live load of vehicle loading of all codes i.e. IRC Codes,
                Euro codes and AASHTO Specifications are calculated and
                presented graphically.
                <br />
                Ii. Area of Steel- Design of bridge girders is conducted in
                STAAD Pro using different vehicle loadings of IRC Codes, AASHTO
                Specifications and Euro Codes. Maximum value of steel area
                required is considered in longitudinal girder as well as cross
                girder.
            </div>
        ),
        res: (
            <div>
                From the design analysis it can be concluded that the I section
                steel Girder is most efficient as it has high flexural strength.
                The girder was designed for expressway bridges and corresponding
                loads were considered and the I-section girder is designed using
                AASHTO and euro codes. After designing the section we tried to
                implement the girder on a warren type steel bridge and a normal
                highway bridge. <br />
                <br />
                The graphs and stimulation videos are in the below drive link.
                <br />
                <a
                    style={{ color: "blue", textDecoration: "underline" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1SreIJNW9Zvp1V4z8Ll7yGXdCAX_UBcrh?usp=sharing"
                >
                    https://drive.google.com/drive/folders/1SreIJNW9Zvp1V4z8Ll7yGXdCAX_UBcrh?usp=sharing
                </a>
                <br />
                <a
                    style={{ color: "blue", textDecoration: "underline" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1tW0i2VsDkjwIX_Cth4FgzLevUPqUt2Nj?usp=sharing"
                >
                    https://drive.google.com/drive/folders/1tW0i2VsDkjwIX_Cth4FgzLevUPqUt2Nj?usp=sharing
                </a>
            </div>
        ),
        con: (
            <div>
                In the I-section the material is present where it should be and
                in the right quantities. This makes the beam more economical and
                lighter and in turn again making it even more economical.A beam
                primarily resists bending, shear and torsion. The height of the
                section is a determinant of stress due to bending in the order
                of the square of itself. The farther the flanges are from each
                other, the better it is. <br />
                Shear is resisted by the web and you just put in enough
                thickness of web that the shear is taken care of. Regardless,
                the consideration from point of view of bending is the most
                important one. <br />
                <br />
                Looking at the future scope, this design can be used for 20m
                span girders in bridges but it will not be much economical as
                steel is costlier than concrete. But the same section can be
                used with concrete girders with sufficient prestressing.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
export default project2;
