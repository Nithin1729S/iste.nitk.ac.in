export default {
    id: 1,
    tags:["Networking"," NDN"," Reddit"," Webdev",],
    oneline:
        "The primary goal of this project was to design a proof of concept of a social media aggregation website, such as reddit, using the new internet architecture known as Named Data Networking(NDN). The project focuses on using the resources provided by the open source NDN framework to build APIs that allow us to mimic the functioning of social media aggregation sites.",
    logo: "https://avatars0.githubusercontent.com/u/3679349?s=280&v=4",
    name: "NDN Reddit",
    imgUrl: [],
    members: [
        "Aditya Rastogi",
        "Aniruddh Sujish",
        "Arjun A.",
        "Mansi Saxena",
        "Bhaskar Kataria",
        "Nihar K.G Rai",
    ],
    description: {
        aim: (
            <div>
                The primary goal of this project was to design a proof of
                concept of a social media aggregation website, such as reddit,
                using the new internet architecture known as Named Data
                Networking(NDN). The project focuses on using the resources
                provided by the open source NDN framework to build APIs that
                allow us to mimic the functioning of social media aggregation
                sites. This project demonstrates how this new architecture can
                implement such a social media aggregation site similar to what
                we observe in TCP/IP.
            </div>
        ),
        meth: (
            <div>
                The first step in realising this project was identifying an
                appropriate platform to build this project on and the NDNJS
                library seemed like an ideal library to utilise to set up our
                server API. During the initial stages of downloading and testing
                the simple examples provided in the library we identified an
                issue with the NDNJS library as it was not compatible with the
                most recent version of the NFD testbed and hence required a
                slight modification in the NDNJS library in order to allow
                compatibility.
                <br />
                <ol>
                    <li>
                        Login/Register API-
                        <br />
                        <ol
                            style={{
                                listStyleType: "lower-alpha",
                                fontWeight: "lighter",
                            }}
                        >
                            <li>
                                This is the basic API required for users to
                                access their profile
                            </li>
                            <li>
                                It involves a client to server communication
                                through ndn data packets
                            </li>
                            <li>
                                The data was stored and fetched from a mongo
                                server
                            </li>
                            <li>
                                One core issue caused by the nature of the NDNJS
                                library was an issue involving session
                                management wherein it was difficult to use
                                typical inbuilt modules for session management
                                like Passport JS.
                            </li>
                            <li>
                                This issue was resolved by using cookies to
                                store information such as the username.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Post Upload/Fetch API-
                        <ol
                            style={{
                                listStyleType: "lower-alpha",
                                fontWeight: "lighter",
                            }}
                        >
                            <li>
                                This API Handles The posting and retrieval of
                                posts to and from the mongodb server it is the
                                core of any social media aggregation website and
                                was the API that consumed a majority of the
                                development period.
                            </li>
                            <li>
                                The Posts represented in this format (post
                                title,description,image) was saved into and
                                fetched from the mongo server.
                            </li>
                            <li>
                                In order to transfer images we converted the
                                images to a base64 encoding.
                            </li>
                            <li>
                                Which is then saved into a JSON object and sent
                                using a blob type using NDN data packets.
                            </li>
                            <li>
                                The key issue faced during the development of
                                thisAPI was the encoding string was too large
                                for the data packet
                            </li>
                            <li>
                                The solution was to manually segment and send
                                the encoded string and then stitch them abc
                                together on the html side once the data was
                                received.
                            </li>
                        </ol>
                        <div style={{ marginLeft: "-3%" }}>
                            The above API acted as a template for all the
                            following API
                        </div>
                    </li>
                    <li>
                        Like API -
                        <ol
                            style={{
                                listStyleType: "lower-alpha",
                                fontWeight: "lighter",
                            }}
                        >
                            <li>
                                When the user likes a post, this information is
                                sent to the server which then updates this in
                                the backend mongo server.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Profile API -
                        <ol
                            style={{
                                listStyleType: "lower-alpha",
                                fontWeight: "lighter",
                            }}
                        >
                            <li>
                                API was created to fetch user details, profile
                                pictures and posts of a particular user from the
                                server to display in the profile page.
                            </li>
                            <li>
                                The data and images are again sent as JSON data
                                to and from the server
                            </li>
                        </ol>
                    </li>
                    <li>
                        Profile Picture Upload API -
                        <ol
                            style={{
                                listStyleType: "lower-alpha",
                                fontWeight: "lighter",
                            }}
                        >
                            <li>
                                Similar to the post upload api, used for user to
                                change their profile picture
                            </li>
                        </ol>
                    </li>
                    <li>
                        User List API -
                        <ol
                            style={{
                                listStyleType: "lower-alpha",
                                fontWeight: "lighter",
                            }}
                        >
                            Returns a list of all users on the server, to enable
                            autocomplete features while searching for a user.
                        </ol>
                    </li>
                </ol>
                The final phase of the implementation was to build a frontend
                using html and CSS to act as a user interface for the users of
                the site. The login and register pages were designed in a
                fashion very similar to reddit to take in username and password
                as a form input and the data is sent to the server to verify
                authenticity. If the authentication is successful the user is
                logged in and redirected to their homepage.
                <br /> <br />
                The homepage displays all the posts stored on the mongodb
                backend and allows the user to search for posts by specific
                users. The homepage also has the tabs to post new posts and like
                other posts. The homepage also allows navigation to the user’s
                profile. <br />
                In the profile users are able change their profile image and
                check all their own posts. The profiles of other users can also
                be viewed in a similar manner.
            </div>
        ),
        res: (
            <div>
                The following screenshots show the working website pages. Refer
                the caption to see which page it is. <br />
                <br />
                <div style={{ marginLeft: "12%", width: "100%" }}>
                    <div
                        style={{
                            width: "35%",
                            float: "left",
                            paddingLeft: "11%",
                        }}
                    >
                        User Login Page
                    </div>{" "}
                    <div
                        style={{
                            width: "35%",
                            float: "right",
                            marginRight: "12%",
                        }}
                    >
                        User Sign-in Page
                    </div>
                    <div style={{ paddingBottom: "2%" }}>
                        <iframe
                            style={{ border: "1px black solid" }}
                            src="https://drive.google.com/file/d/19eYOi7dQOQTAnerRL8zKXl5wglBH62-q/preview"
                            width="400"
                            height="300"
                        ></iframe>
                        <iframe
                            style={{
                                border: "1px black solid",
                                marginLeft: "5%",
                            }}
                            src="https://drive.google.com/file/d/1ksduY-cptKFXZ9bsOjFrcgl-JD0KhOdE/preview"
                            width="400"
                            height="300"
                        ></iframe>
                    </div>
                    <div
                        style={{
                            width: "35%",
                            float: "left",
                            paddingLeft: "11%",
                        }}
                    >
                        Home Page
                    </div>{" "}
                    <div
                        style={{
                            width: "35%",
                            float: "right",
                            marginRight: "12%",
                        }}
                    >
                        Post Creation Page
                    </div>
                    <div style={{ paddingBottom: "2%" }}>
                        <iframe
                            style={{ border: "1px black solid" }}
                            src="https://drive.google.com/file/d/1GKjfvI8ju2umjSomlyBWjlEvuypf-rOZ/preview"
                            width="400"
                            height="300"
                        ></iframe>
                        <iframe
                            style={{
                                border: "1px black solid",
                                marginLeft: "5%",
                            }}
                            src="https://drive.google.com/file/d/1rG5peYFxck_IrMwzk65Ove-IAhQ5sC8i/preview"
                            width="400"
                            height="300"
                        ></iframe>
                    </div>
                    <div style={{ width: "35%", paddingLeft: "11%" }}>
                        Profile Page
                    </div>{" "}
                    <div style={{ paddingBottom: "2%" }}>
                        <iframe
                            style={{ border: "1px black solid" }}
                            src="https://drive.google.com/file/d/1fwm8TkNzcwWH7ElbzFascYH98fTrWLbM/preview"
                            width="400"
                            height="300"
                        ></iframe>
                    </div>
                </div>
            </div>
        ),
        con: (
            <div>
                Conclusion
                <br />
                <br /> The project has clearly proven the possibility of
                building a social media aggregation site using the current
                available resources. This can be used as a clean base that can
                then be built upon to generate such media aggregation sites.This
                project furthers the validity of the NDN framework as a possible
                future replacement for the current tcp/ip framework we use
                currently. Another useful output of this project is the process
                of splitting data between packets and then sending segments of
                the data in order to send larger uncompressed images and data.
                This can be of great assistance for any other projects in the
                future, as we had not observed any prior literature of the same.{" "}
                <br />
                <br />
                Future Scope <br />
                <br />
                As of now the project is still in its infancy and lacks several
                key features such as comments and the subreddit or post grouping
                feature. These are possible future scopes are concepts that can
                be built to further legitimize the website. Using the same
                concept of splitting of the encoded data to allow the posting o
                videos as well.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
