const project1 = {
    id: 1,
    tags: ["deep learning", "dsp"],
    oneline:
        "This project aims to design and implement a hardware accelerator to accelerate the inference of convolutional neural networks on FPGA.",
    name: "Implemention of CNNs on FPGA",
    logo: "https://cdn.nanalyze.com/uploads/2017/05/FPGAs-AI-Chip-Teaser.jpg",
    imgUrl: [
        "https://drive.google.com/file/d/1JLSypedzzRMLKSLiKPhvZ_s_g5oql0w7/preview",
        "https://drive.google.com/file/d/12q1rlRxJcDNjtbQWVCLsd0EyGDhbaOw3/preview",
        "https://drive.google.com/file/d/150XAozifeE-vOHN_JnyWe1pyQ7TT8jvb/preview",
        "https://drive.google.com/file/d/1WGlhyB4a-rssMQmE1SPDDvDeXv1N0Ft-/preview",
        "https://drive.google.com/file/d/1A6z_lMYcm4svDTd_QDLSVqa93DVk-qme/preview",
    ],
    members: [
        "Aaron Sequeira",
        "Aditya Manjunath",
        "Pranav Srinath",
        "Surya Prakash Reddy",
        "Lakshmisha SN",
        "Divesh Sakhuja",
        "BalajiNaidu V",
        "Roopam Dhaneria",
        "Ayush Agarwal",
    ],
    description: {
        aim: (
            <div>
                This project aims to design and implement a hardware accelerator
                to accelerate the inference of convolutional neural networks on
                FPGA.
            </div>
        ),
        meth: (
            <div>
                Designing a good architecture for the hardware accelerator is
                one of the main parts of the project. Systolic array is the
                heart of our architecture. Systolic arrays are hardware
                structures built for fast and efficient operation of regular
                algorithms that perform the same task with different data at
                different time instants. In our model systolic array is used to
                perform matrix multiplications. Since memory can be operated at
                higher speeds a fifo is designed to store the elements in the
                buffer to overcome cross domain clocking problems. Many small
                BRAM blocks are used to reduce waiting time in the buffer before
                writing the processed data into memory. <br />
                The designed architecture is implemented in verilog HDL using
                Xilinx Vivado design suite. All the required modules in the
                datapath are implemented in verilog. The datapath elements are
                then connected together in a top module. Control modules are
                developed to control the flow of data between the datapath
                modules. Master control module is designed to send control
                signals to all the control modules and the datapath modules
                based on the current instruction and previous instructions
                executed. <br />
                Datapath Diagram :-
                <br />
                <iframe
                    src="https://drive.google.com/file/d/12q1rlRxJcDNjtbQWVCLsd0EyGDhbaOw3/preview"
                    width="640"
                    height="480"
                    title="Datapath"
                ></iframe>{" "}
                <br />
                Control path :-
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1JLSypedzzRMLKSLiKPhvZ_s_g5oql0w7/preview"
                    width="640"
                    height="480"
                    title="Control"
                ></iframe>
                <br />
                There is currently support for these seven high level
                instructions in our architecture:- <br />
                <ol>
                    <li>Weight fill</li>
                    <li>Fifo clear</li>
                    <li>Fifo fill</li>
                    <li>Fifo refill</li>
                    <li>Conv</li>
                    <li>Maxpool</li>
                    <li>Add matrices</li>
                </ol>
                We are using fixed point calculations in our architecture.
                Tensorflow has a good post training quantisation technique which
                quantises the 64 bit floating point weights into 8 bit integers.
                We can extract those weights and biases and computation graph
                from the model. The extracted weights and biases can be used for
                our accelerator. The extracted model can be converted into a set
                of instructions which can be used to run on our accelerator.
            </div>
        ),
        res: (
            <div>
                <em>Synthesis results</em>
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1WGlhyB4a-rssMQmE1SPDDvDeXv1N0Ft-/preview"
                    width="640"
                    height="480"
                    title="Synthesis results"
                ></iframe>
                <br />
                Simulation results:- <br />
                Instructions Executed:- <br />
                Weight_fill 0 3 9 <br />
                Fifo_clear <br />
                Fifo_fill 0 5 5 0 <br />
                Conv 1 9 0 <br />
                Maxpool_fill 0 4 0 <br />
                weight _fill 0 3 9 <br />
                Fifo_clear <br />
                Fifo_refill 0 2 2 1 9 <br />
                Conv 1 9 0 <br />
                <iframe
                    src="https://drive.google.com/file/d/1A6z_lMYcm4svDTd_QDLSVqa93DVk-qme/preview"
                    width="640"
                    height="480"
                    title="Simulation results"
                ></iframe>
                <br />
                Sample extracted and quantised weights and biases:-
                <br />
                <iframe
                    src="https://drive.google.com/file/d/150XAozifeE-vOHN_JnyWe1pyQ7TT8jvb/preview"
                    width="640"
                    height="480"
                    title="Sample extracted and quantised weights and biases"
                ></iframe>
            </div>
        ),
        con: (
            <div>
                The designed hardware accelerator is implemented in Verilog HDL.
                The simulation results of the verilog model are verified.
                Synthesis of the verilog model shows decent utilisation of
                resources. Post synthesis and post implementation functional
                simulation is done and verified. Github repo:-{" "}
                <a
                    href="https://github.com/putlurusurya/CNNOnFPGA"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://github.com/putlurusurya/CNNOnFPGA
                </a>
                <br />
                Future scope of this project:-
                <ol>
                    <li>
                        Improve the architecture with software optimisations in
                        consideration
                    </li>
                    <li>Add DDR3 memory or other external memory support</li>
                    <li>SD card support for live camera detection</li>
                    <li>
                        Improve the matrix multiplication model with a better
                        architecture{" "}
                    </li>
                    <li>Improve timing constraints</li>
                </ol>
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
export default project1;
