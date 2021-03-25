export default {
    id: 5,
    tags: ["STAAD Pro", " shear wall", " wind load"],
    oneline:
        "   To design G+15 storey buildings subjected to wind loads in NITK with different shear wall configurations using Staad Pro V8i software. To determine relative stability and economy of buildings with different shear wall configurations and a building without shear wall against the wind by analysing maximum resultant nodal displacements",
    logo:
        "https://qph.fs.quoracdn.net/main-qimg-181761ae351b29f3801ab7fa278f457d.webp",
    name: "Wind Load Analysis of Building with Different Shear Wall Designs",
    imgUrl: [],
    members: [
        "Swarnangshu",
        "Shreyank R",
        "Shashank",
        "Imtiaz Abdul Gafur",
        "Vaibhav Prathap",
    ],
    description: {
        aim: (
            <div>
                <ol style={{ listStyleType: "disc" }}>
                    <li>
                        To design G+15 storey buildings subjected to wind loads
                        in NITK with different shear wall configurations using
                        Staad Pro V8i software.
                    </li>
                    <li>
                        To determine relative stability and economy of buildings
                        with different shear wall configurations and a building
                        without shear wall against the wind by analysing maximum
                        resultant nodal displacements
                    </li>
                </ol>
            </div>
        ),
        meth: (
            <div>
                Dead loads, live loads and wind loads are calculated as per IS
                875 part 1, IS 875 part 2 and IS 875 part 3 respectively and
                applied on building without shear walls and buildings with
                different shear walls configurations using Staad Pro software.
                The analysis is made on the post processing mode which includes
                maximum resultant nodal displacements for each and every
                building designs. <br />
                The building configurations are mentioned below:
                <br />
            </div>
        ),
        res: (
            <div>
                Maximum Nodal Displacement Nodes <br />
                will have nodal displacements or degrees of freedom which may
                include translations, rotations, and for special applications,
                higher order derivatives of displacements. When the nodes
                displace, they will drag the elements along in a certain manner
                dictated by the element formulation. Therefore it is critical to
                find the maximum resultant nodal displacement for any structure
                to get an idea about the structure’s stability.
                <br />
                <br /> Increase in Stability with respect to the Building
                without Shear Wall (Design 0)
                <br />
                Increase in stability of the building designs with respect to
                the building that doesn’t have a shear wall have been calculated
                and plotted. <br />
                <br />
                Increase in Stability with respect to the Parent Shear Wall
                Design <br />
                Parent shear wall designs: These include Design 1.0 and Design
                2.0. All the other shear wall designs are a combination of these
                parent shear wall designs. Increase in stability of the shear
                wall designs with respect to the parent shear wall designs
                (Design 1.0 and Design 2.0) have been calculated and plotted.
                <br />
                <br />
            </div>
        ),
        con: (
            <div>
                <ol style={{ listStyleType: "disc" }}>
                    <li>
                        Stability of parent corner shear wall design (Design
                        2.0) is higher compared to parent center of edges shear
                        wall design (Design 1.0). This is due to higher moment
                        of inertia for configuration containing walls at corners
                    </li>
                    <li>
                        Increase in stability of ‘shear walls at corner designs
                        (Design 2)’ are greater compared to increase in
                        stability of their respective ‘shear walls at centre of
                        edges designs (Design 2)’.
                    </li>
                    <li>
                        The higher the moment of inertia, the greater the
                        stability of a building design. Despite Design 1.3 and
                        Design 2.3 having higher moments of inertia, they have
                        lesser stability compared to Design 1.1, Design 1.2,
                        Design 2.1 and Design 2.2. This can be attributed to the
                        fact that these designs act as a single unit which gives
                        them the extra stability.
                    </li>
                    <li>
                        First preference is always given to Design 0 as it is
                        the most cost effective design since the cost of
                        concrete and steel is reduced (as shear walls require
                        excessive volumes of concrete and reinforced steel). If
                        Design 0 does not fall in the permissible limit for safe
                        design (highly likely for Design 0 to fail under the
                        given conditions), parent shear walls can be our next
                        option. Among the two parent shear wall designs,
                        preference should be given to Design 2.0 as it has
                        higher stability compared to Design 1.0. If this design
                        fails as well, Design 2.2 is the best option as it can
                        be up to 61.75% more stable than the building without
                        shear wall and 32.84% more stable than its parent shear
                        wall. Design 2.2 is rejected due to architectural
                        reasons, Design 1.2 the last option to go to. All the
                        other shear wall designs have very slight increase in
                        stability and therefore can be ignored.
                    </li>
                    <li>
                        The most stable shear wall is Design 2.2. It can resist
                        extreme wind speeds and withstand earthquakes better
                        than all the other designs.
                    </li>
                </ol>
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
