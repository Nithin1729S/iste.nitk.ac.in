export default {
    id: 3,
    name: "Energy efficient glider for delivery",
    logo:
        "https://www.fai.org/sites/default/files/styles/article_detail_xxlarge/public/mini-lak-4.jpg?itok=_1im8SxT",
    oneline:
        "The aim of this project is to design an aerodynamic glider and analyse its aerodynamic aspects.",
    imgUrl: [
        "https://drive.google.com/file/d/12O7JhDF61kPVLTuVMHLubFf9elywOg3U/preview",
        "https://drive.google.com/file/d/1vDwVf8FflYbVgQC8Px_YwskrMPwcrrSP/preview",
        "https://drive.google.com/file/d/1eln5zKSaXWWhpYq_kUDzzCUmj9eVUdE6/preview",
        "https://drive.google.com/file/d/1c9DayC8jAELeKLQ0IzuBroaw5df50Udh/preview",
        "https://drive.google.com/file/d/1Jd4tgCZz0HwYHVyT9EDpoSSrHw8gKa0b/preview",
        "https://drive.google.com/file/d/1nja8RYJ1n2O1ierAYSFZ_3gh6uVGwpBj/preview",
        "https://drive.google.com/file/d/1kOjvue9JwlNd8LjE_GeVBo_n6dMo12Qv/preview",
        "https://drive.google.com/file/d/1RoG_6iVUY0jeJtZ6XqK0vG1kj7zITMyR/preview",
        "https://drive.google.com/file/d/1NJv8ORBc8iM0IlKvkG1kym7Qx8lN5aPB/preview",
        "https://drive.google.com/file/d/1icDm6o5VEwQMIgPQC59PuTVHXoes_hn9/preview",
        "https://drive.google.com/file/d/1Npsg-eiVOe2HOKlIQ2MQzcCfiCeYppqz/preview",
    ],
    members: [
        "Nikhil Varghese",
        "Bikram Sarkar",
        "BH SR Karthik Varma",
        "Abhishek Choudary",
        "Hassan Kausar",
        "Ananta Shanbhag",
        "Cyriac Talus",
        "Devika Harikrishnan",
        "Raghav Ganesh",
        "Shivraj Lingaraj Dharwad",
    ],
    description: {
        aim: (
            <div>
                The aim of this project is to design an aerodynamic glider and
                analyse its aerodynamic aspects.
            </div>
        ),
        meth: (
            <div>
                <ol>
                    <li>
                        Selection of Airfoils <br />
                        Generally the gliders fly in the Reynolds no range of
                        100,000 to 500,000. A set of high performance low
                        Reynolds airfoils were analysed using XFLR to find the
                        airfoils for our glider plane. Among them SG6043 and
                        NACA 0016 are selected for wing and stabilizers
                        respectively. <br />
                        The comparison and results can be found in the following
                        link :{" "}
                        <a href="https://docs.google.com/spreadsheets/d/1KfQGzFHSGMFy9OxDq0pG3A9auGWP8gV9XLGePMB-B-w/edit#gid=0">
                            Airfoil Data
                        </a>
                    </li>
                    <li>
                        Finding the 3d parameters of the glider <br />
                        <ol>
                            <li>
                                Selection of type of wing: <br />
                                To make the contructable design of the glider
                                the span of the wing has been chosen to be 1.2m
                                and the root chord is chosen as 120mm. <br />
                                The following types of wings are analysed :
                                <ol>
                                    <li>Rectangle wing</li>
                                    <li>Taper at front wing</li>
                                    <li>Taper at back wing </li>
                                    <li>Swept back wing</li>
                                </ol>
                                Among these wings Taper at front has been chosen
                                as it has more coefficient of lift and drag
                                <iframe
                                    src="https://drive.google.com/file/d/12O7JhDF61kPVLTuVMHLubFf9elywOg3U/preview"
                                    width="640"
                                    height="480"
                                ></iframe>
                                <figcaption style={{ "text-align": "center" }}>
                                    Comparison of different types of wings
                                </figcaption>
                                Similar type of analysis has been done to select
                                Taper Ratio. It is observed that the coefficient
                                of lift and drag increases with decrease in
                                TR(but the increase is not that significant)
                                when dimensionalized, the wing with higher TR
                                will be having higher lift and drag force. So an
                                Taper ratio of 0.75 have been chosen.
                                <iframe
                                    src="https://drive.google.com/file/d/1vDwVf8FflYbVgQC8Px_YwskrMPwcrrSP/preview"
                                    width="640"
                                    height="480"
                                ></iframe>
                                <figcaption style={{ "text-align": "center" }}>
                                    Comparison of wing with different Taper
                                    ratios
                                </figcaption>
                            </li>
                            <li>
                                To find the dimensions of glider
                                <iframe
                                    src="https://drive.google.com/file/d/1eln5zKSaXWWhpYq_kUDzzCUmj9eVUdE6/preview"
                                    width="640"
                                    height="480"
                                ></iframe>
                                <figcaption style={{ "text-align": "center" }}>
                                    Parameters of the glider
                                </figcaption>
                                To find the above parameters analysis have been
                                done with different values of x,y,z
                                <figure>
                                    <iframe
                                        src="https://drive.google.com/file/d/1c9DayC8jAELeKLQ0IzuBroaw5df50Udh/preview"
                                        width="185"
                                        height="200"
                                    ></iframe>
                                    <iframe
                                        src="https://drive.google.com/file/d/1Jd4tgCZz0HwYHVyT9EDpoSSrHw8gKa0b/preview"
                                        width="185"
                                        height="200"
                                    ></iframe>
                                    <iframe
                                        src="https://drive.google.com/file/d/1nja8RYJ1n2O1ierAYSFZ_3gh6uVGwpBj/preview"
                                        width="185"
                                        height="200"
                                    ></iframe>
                                    <figcaption
                                        style={{ "text-align": "center" }}
                                    >
                                        Variation of x,y,z
                                    </figcaption>
                                </figure>
                                By comparing with the results the parameters
                                which were chosen are <br />
                                x= 192mm
                                <br />
                                y= 900mm
                                <br />
                                z= 10mm
                            </li>
                        </ol>
                        <li>
                            Fuselage Design <br />
                            To design a fuselage, first we have designed a 2d
                            shape of the fuselage. To design 2d shape we have
                            started with a 900mm x 90mm rectangle and changed
                            the leading edge and found that the elliptical
                            leading edge has least drag.
                            <table style={{ width: "100%", border: "1" }}>
                                <tr>
                                    <th>Shape</th>
                                    <th>Drag</th>
                                </tr>
                                <tr>
                                    <td>Perpendicular leading edge</td>
                                    <td>6.0163421</td>
                                </tr>
                                <tr>
                                    <td>Circular leading edge</td>
                                    <td>2.4027675</td>
                                </tr>
                                <tr>
                                    <td>double angled leading edge</td>
                                    <td>2.2755217</td>
                                </tr>
                                <tr>
                                    <td>angled leading edge</td>
                                    <td>3.864284</td>
                                </tr>
                                <tr>
                                    <td>semi circular leading edge</td>
                                    <td>3.7124726</td>
                                </tr>
                                <tr>
                                    <td>semi elliptical leading edge</td>
                                    <td>3.4823547</td>
                                </tr>
                                <tr>
                                    <td>elliptical leading edge</td>
                                    <td>2.2602286</td>
                                </tr>
                            </table>
                            <br />
                            Using an elliptic leading edge a fuselage shape is
                            generated in the solidworks, then it is divided into
                            sections and by changing the dimensions at these
                            sections different shapes have been generated and
                            these shapes were analysed using ansys.
                            <figure>
                                <iframe
                                    src="https://drive.google.com/file/d/1kOjvue9JwlNd8LjE_GeVBo_n6dMo12Qv/preview"
                                    width="290"
                                    height="200"
                                ></iframe>
                                <iframe
                                    src="https://drive.google.com/file/d/1RoG_6iVUY0jeJtZ6XqK0vG1kj7zITMyR/preview"
                                    width="290"
                                    height="200"
                                ></iframe>
                                <iframe
                                    src="https://drive.google.com/file/d/1NJv8ORBc8iM0IlKvkG1kym7Qx8lN5aPB/preview"
                                    width="290"
                                    height="200"
                                ></iframe>
                                <iframe
                                    src="https://drive.google.com/file/d/1icDm6o5VEwQMIgPQC59PuTVHXoes_hn9/preview"
                                    width="290"
                                    height="200"
                                ></iframe>
                                <figcaption style={{ "text-align": "center" }}>
                                    Shape 1,2,3,4
                                </figcaption>
                            </figure>
                            <table style={{ width: "100%", border: "1" }}>
                                <tr>
                                    <th>Shape</th>
                                    <th>Drag</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1.2134583</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>1.2304162</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>1.1836572</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>1.2528237</td>
                                </tr>
                            </table>
                            After selecting a 2d shape, 3d shapes have been
                            generated with different ellipses and analysed using
                            ansys and it was found that the higher the ratio of
                            horizontal radius to vertical ratio higher is the
                            drag so the ratio of 1.1 is selected.
                        </li>
                    </li>
                </ol>
            </div>
        ),
        res: (
            <div>
                <ol>
                    <li>
                        Glider Assembly <br />
                        The assembly of the glider is made in Solidworks.
                        <iframe
                            src="https://drive.google.com/file/d/1w2wTP2V2ayid5YtlcGOXJIw2lLNKtTPg/preview"
                            width="640"
                            height="480"
                        ></iframe>
                    </li>
                    <li>
                        Stability Analysis <br />
                        For the plane to be stable the prerequisites are
                        <ol>
                            <li>The slope of Cm vs AoA should be negative</li>
                            <li>
                                It should have a positive coefficient of lift at
                                zero Cm
                            </li>
                            <li>Should have a positive AoA at zero Cm.</li>
                        </ol>
                        To make the fly stable, the components have been
                        distributed in such a way that the COG lies at (243.8,
                        0, 2.780).
                        <iframe
                            src="https://drive.google.com/file/d/1Npsg-eiVOe2HOKlIQ2MQzcCfiCeYppqz/preview"
                            width="640"
                            height="480"
                        ></iframe>
                        It can be observed that the curve cuts the x-axis at
                        around 2degree AoA, which means that the plane flies
                        stability at around 2degree AoA which implies that the
                        plane will have positive lift at stable flight. <br />
                        Similarly stability analysis has been and the results
                        are been recorded in the video In stability analysis
                        there will a disturbance given to the plane will check
                        in how much time it will reach stability. <br />
                        <iframe
                            src="https://drive.google.com/file/d/13Ws-07K6IWYVAUmEAe3s1BwakuCK8MM-/preview"
                            width="640"
                            height="480"
                        ></iframe>
                    </li>
                </ol>
            </div>
        ),
        con: (
            <div>
                In this project we have made a simulink model of a plane which
                can be controlled using joystick and can be simulated in flight
                gear and simulink 3D.
                <iframe
                    src="https://drive.google.com/file/d/15FbySynfCj0IJD1c3q4vWXaf8Vt8y3fh/preview"
                    width="715"
                    height="480"
                ></iframe>
                <figcaption style={{ "text-align": "center" }}>
                    Simulink model of plane
                </figcaption>
                But the problem with this model is that it uses parameters of
                the RCAM model, and to make it work for our model the equations
                of forces and moments should be changed but it is not possible
                with simulations and require wind tunnel testing of a physical
                model.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
