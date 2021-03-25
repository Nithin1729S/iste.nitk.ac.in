export default {
    id: 2,
    tags: ["eyetracking", "rpi", "image processing"],
    name: "Eye Tracking Wheelchair",
    oneline:
        "To design an eye-tracking software that acquires a video stream of eye movements using a camera and then, based on the eye movement, analyse the user's intent. It is aimed to design and simulate the wheelchair model on ROS and Gazebo.",
    logo:
        "https://b7.pngbarn.com/png/395/903/disability-wheelchair-shopping-cartoon-png-clip-art-thumbnail.png",
    imgUrl: [
        "https://drive.google.com/file/d/1c6Rau3hygJMGJEB2ywS9cqwn428KjdRH/preview",
        "https://drive.google.com/file/d/1awh6ZowTHToM6hNTm4TWbVEXT5HJIJCw/preview",
        "https://drive.google.com/file/d/1p7AAyc4bjaQoVB1cH7CSjsZ11ZlfSJxs/preview",
    ],
    members: [
        "Anmol Verma",
        "Aaron Sequira",
        "Fatwir Sheikh Mohammed",
        "Nihal V Palankar",
        "Anuja Goyal",
        "Fouzan Tinwala",
        "Harshavardhan D",
        "Kumar Vitthal",
        "Sahana Praveen Bhandari",
    ],
    description: {
        aim: (
            <div>
                To design an eye-tracking software that acquires a video stream
                of eye movements using a camera and then, based on the eye
                movement, analyse the user's intent. It is aimed to design and
                simulate the wheelchair model on ROS and Gazebo.
            </div>
        ),
        meth: (
            <div>
                The project consists of two aspects: - <br />
                <ol>
                    <li>
                        Design of an appropriate algorithm that outputs
                        instructions to the wheelchair based on eye movements of
                        the user
                    </li>
                    <li>ROS and Gazebo simulation of the wheelchair</li>
                </ol>
                <br />
                <em>Eye-tracking using the DLib Library</em>
                <ol>
                    <li>Get the facial landmarks using DLib Library</li>
                    <li>
                        Extract the eye locations using these facial landmarks
                    </li>
                    <li>
                        Perform blink detection
                        <ol>
                            <li>
                                {" "}
                                Detected by calculating the average of the
                                ratios of vertical line length to horizontal
                                line length for each eye
                            </li>
                            <li>
                                {" "}
                                Time.time() function to measure the time between
                                successive blinks
                            </li>
                        </ol>
                    </li>
                    <li>
                        Perform gaze detection
                        <ol>
                            <li> Create a mask</li>
                            <li> Convert to grayscale and threshold</li>
                        </ol>
                    </li>
                    <li>
                        Make the decision
                        <ol>
                            <li>
                                {" "}
                                Start (operating) or stop (idle) the system if
                                blinking is detected twice within a span of 750
                                ms
                            </li>
                            <li>
                                {" "}
                                Signal to move forward/turn right/turn left
                                depending on the eye gaze of the user
                            </li>
                        </ol>
                    </li>
                </ol>
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1awh6ZowTHToM6hNTm4TWbVEXT5HJIJCw/preview"
                        width="640"
                        height="480"
                    ></iframe>
                    <figcaption style={{ "text-align": "center" }}>
                        System Process Diagram
                    </figcaption>
                </figure>
                <figure>
                    <iframe
                        src="https://drive.google.com/file/d/1c6Rau3hygJMGJEB2ywS9cqwn428KjdRH/preview"
                        width="640"
                        height="480"
                    ></iframe>
                    <figcaption style={{ "text-align": "center" }}>
                        Algorithm Flowchart
                    </figcaption>
                </figure>
                <em>ROS and Gazebo implementation of the model</em>
                <ol>
                    <li>
                        The ROS middleware facilities used :
                        <ol>
                            <li>
                                {" "}
                                Publish/subscribe anonymous message passing
                            </li>
                            <li> Recording and playback of messages</li>
                            <li>; Request/response remote procedure calls</li>
                        </ol>
                    </li>
                    <li>
                        The key ROS nodes used for monitoring, interpretation
                        and communication are :
                        <ol>
                            <li>
                                <em>ETW.py</em> : <br />
                                This node handles the image processing part of
                                the program from initializing the camera,
                                starting video streaming, converting the
                                incoming stream to grayscale, running HOG
                                frontal face detector using the DLib library,
                                extracting the location of the eye, blink
                                detection, gaze detection and finally to
                                decision making ie to publish (send) command to
                                the ros_topic “my_command” via the ros_message
                                “command.msg”
                            </li>
                            <li>
                                <em>move.py</em> : <br />
                                This ROS node acts as both a subscriber and a
                                publisher node simultaneously but to 2 different
                                topics namely “my_command” and “cmd_vel”
                                respectively. It takes input (subscribes) from
                                the ros_topic “my_command” via the ros_message
                                “command.msg” and publishes a suitable message
                                to the ros_topic “cmd_vel”.
                            </li>
                            <li>
                                <em>wheelchair.launch</em> : <br />
                                This is a ros_launch file written in the robot
                                description language(XML format) that can launch
                                multiple ros_nodes/files including the
                                ros_master(by default) at once to avoid
                                launching each individual node separately on
                                different terminals. This file contains the
                                locations of all the files required to launch
                                the simulation of the wheelchair in gazebo with
                                all the required ros_gazebo_plugins necessary to
                                move the robot in accordance with eye movements
                                of the user.
                            </li>
                        </ol>
                    </li>
                    <li>
                        The below rqt_graph provides the flow of data during the
                        run time of the simulation program.
                    </li>
                    <iframe
                        src="https://drive.google.com/file/d/1F4CH7bcz1IkYe3Eu2gDkuifamHXM8OAR/preview"
                        width="640"
                        height="480"
                    ></iframe>
                </ol>
                <em>CNN design of the eye-tracking software</em> <br />
                In addition to the above, a CNN model was designed to detect eye
                gaze <br />
                <ol>
                    <li>
                        The dataset that is used to train the CNN model contains
                        7049 facial images and up to 15 key points are marked on
                        them (6 required for our model).
                    </li>
                    <li>
                        The architecture used for the same is:
                        <iframe
                            src="https://drive.google.com/file/d/1Kq6IS51eEoesxL1wYoqeEQARfh5gFGrk/preview"
                            width="640"
                            height="480"
                        ></iframe>
                    </li>
                    <li>
                        The following are the layers of the model :
                        <ol>
                            <li> Convolutional Layers = 13</li>
                            <li> Pooling Layers = 5</li>
                            <li> Dense Layers = 3</li>
                        </ol>
                    </li>
                    <li>
                        MSE Loss function was the metric used for calculating
                        loss during training. Adam’s Moment Estimation was used
                        to train the model since the learning rates are adjusted
                        automatically and hence manual tuning becomes less
                        important.
                    </li>
                </ol>
            </div>
        ),
        res: (
            <div>
                <ol>
                    <li>
                        Eye-tracking was implemented with an average execution
                        time of around 40 milliseconds when tested on an Intel
                        Core i7-7500U processor operating at 2.70 GHz.
                    </li>
                    <li>
                        If the blinks are consecutive within 750 milliseconds,
                        then the system is turned on/off.
                    </li>
                    <li>
                        ROS and Gazebo simulation of the wheelchair was
                        successfully implemented.
                    </li>
                    <li>
                        For the CNN model, K Fold Cross Validation gave a
                        training Loss of 0.0979 and Validation Loss of 0.0107.
                    </li>
                </ol>
            </div>
        ),
        conc: (
            <div>
                Improving the accuracy of the convolutional neural network used
                and hardware implementation of the model using microcontrollers.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
