import logo from "./HASSL.png";
export default {
    id: 5,
    tags: ["SSL", "cryptography", "aes", "fpga"],
    name: "Hardware Assisted SSL",
    logo: logo,
    oneline:
        "Build a novel architecture for AES-128 cryptographic algorithm and implement on FPGA from scratch for improved speed performance.",
    imgUrl: [
        "https://drive.google.com/file/d/1bzG7xY9jAvip2WlCCxkaGiFtN61fncTE/preview",
        "https://drive.google.com/file/d/1iC7yKouuXrfk-RAln_ThpuK6NcfNlr7H/preview",
        "https://drive.google.com/file/d/1M2gdEHiixJ6k4NIHcjOzCdTM3UBr4asB/preview",
        "https://drive.google.com/file/d/1rhYZZBZxH4Gx1AT4y_SL3dwc-4JqmYbp/preview",
        "https://drive.google.com/file/d/1UAWxKadNVsZeLiVGzPYWSf2arCmAt4GV/preview",
        "https://drive.google.com/file/d/1hgoESKZmBr-bCajcUc5D9HbCpuhkz_4b/preview",
        "https://drive.google.com/file/d/1V8GbpPBBVENnTGnCXafkbKTbSGFFUkhQ/preview",
    ],
    members: [
        "Aaron Sequeira",
        "Aditya Manjunath",
        "P. Priyankaa",
        "Divesh Sakhuja",
        "Ayush Agarwal",
        "Shridevi Kumar",
    ],
    description: {
        aim: (
            <div>
                Build a novel architecture for AES-128 cryptographic algorithm
                and implement on FPGA from scratch for improved speed
                performance.
            </div>
        ),
        meth: (
            <div>
                Click here to view on{` `}
                <a
                    href="https://github.com/PriyankaPeri/AES_FPGA"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
                <br />
                <br />
                AES-128 is a symmetric key encryption algorithm that acts on 128
                bits of data. The message is encrypted in 10 rounds. AES
                implemented on a FPGA dedicates special resources hence speeding
                up the process. <br />
                The implementation of AES is done using pipelining to increase
                throughput. All blocks with the exception of SubBytes consist of
                only combinational logic as opposed to a look up table, reducing
                the delay. The architecture is as shown above. It includes
                blocks that execute the various stages which are substitution
                box, shift rows, mix columns and add round key. The keys for the
                next round are processed alongside the blocks while the messages
                are being encrypted, and hence there is no need to have a
                reserved resource to perform key expansion process. <br />
                The data is read 128 bits at a time from the memory. Data that
                precedes a null (or data with only zeroes) is interpreted as the
                key and the data that follows the key are interpreted as the
                message until the next null is encountered. <br />
                The project is coded in Verilog, a widely used Hardware
                Description Language. The link on the top contains the
                repository to the source code along with a README giving a short
                description of each of the sub-blocks.
            </div>
        ),
        res: (
            <div>
                The simulation results for the various sub-block is given. The
                original and encrypted messages are shown in the console log.
                Architecture of the complete design is also given.
                <>
                    <iframe
                        class="descPage_imgSize__3WMSz"
                        src="https://drive.google.com/file/d/1NgX_R7gkVxzcJOWWmaFF788Dr5y8rwxo/preview"
                        title="1"
                    />
                    <iframe
                        class="descPage_imgSize__3WMSz"
                        src="https://drive.google.com/file/d/1UH_pU2WjG4QvBL5inkhn9cdJPEhbJ_uZ/preview"
                        title="1"
                    />
                </>
            </div>
        ),
        con: (
            <div>
                We successfully managed to implement the function of AES-128 on
                Verilog and the simulations were verified and design was
                synthesised. The results can be easily extended to AES-192 and
                AES- 256. Due to the Covid-19 pandemic and lack of access to
                hardware components, the block wasn’t implemented on a FPGA
                board. Future scope for the project includes implementing on
                VLSI, and integrating it with the other encryption methods for a
                unified SSL/TLS on chip.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
