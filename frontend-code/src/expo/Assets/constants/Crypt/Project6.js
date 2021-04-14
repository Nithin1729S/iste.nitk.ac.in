export default {
    id: 5,
    tags: ["Deep Learning", "Image Processing"],
    oneline:
        "This project aims to achieve colorization of black and white images using Generative Adversarial Networks(GAN) and improve performance by experimenting with different models of the same.",
    logo:
        "https://s23527.pcdn.co/wp-content/uploads/2017/05/Screenshot-2017-05-19-17.57.37.png",
    name: "B&W Image Colorization Using GANs",
    imgUrl: [
        "https://drive.google.com/file/d/1LvJmLUdpxVEaFHBFlfOttO625vjXbBf4/preview",
        "https://drive.google.com/file/d/1kgX0DjckWj4qvjQSqqaNGM40BsLnMz1D/preview",
        "https://drive.google.com/file/d/1mszgnxcyM2jdAdngBTLyAArGkQ2DWbLd/preview",
        "https://drive.google.com/file/d/1CsyX6YTpMaXpzSgofVpaaOkFxyykq8vB/preview",
    ],
    members: [
        "Prateek",
        "Arjun A.",
        "Mansi",
        "Rohit ",
        "Shreyas",
        "Aditya",
        "Fidha",
        "Nitesh",
        "Pranav",
        "Rahul Kumar",
        "Sarthak",
    ],
    description: {
        aim: (
            <div>
                This project aims to achieve colorization of black and white
                images using Generative Adversarial Networks(GAN) and improve
                performance by experimenting with different models of the same.
            </div>
        ),
        meth: (
            <div>
                A subset of places365 dataset was chosen for training, which was
                further converted to tfrecords format.
                <br />
                <br />
                We started by implementing a UNET GAN based coloriser derived
                from this paper, which took us 15 hours to train, and fetched us
                decent results.
                <br />
                <br />
                We attempted to then enhance these results by implementing an
                Evolutionary Generative Adversarial Network(EGAN) as shown in
                this paper, but due to insufficient computing resources the
                model did not train as effectively as we hoped.
                <br />
                <br />
                We also attempted to mimic the results of DeOldify with our own
                adaptation of the code,but again was not able to achieve the
                results we wanted due to insufficient computer resources.
                Moreover, we adapted the initial UNet implementation to train on
                TPUs, and achieved better results compared to the initial model
                with 6 hours of training.
                <br />
                <br />
                All implementation was done in Tensorflow 2.4 on google colab.
            </div>
        ),
        res: (
            <div>
                The vanilla UNET GAN gave some impressive however mostly
                inconsistent results. E-GANs and DeOldify models did not give
                the theoretically impressive results that were expected because
                of training limitations due to lack of hardware resources.
                <br />
                <br />
                The TPU implementation of the vanilla UNET GAN, despite showing
                some tendencies of overfitting, gave significantly improved
                results over the GPU execution of the same.
            </div>
        ),
        con: (
            <div>
                Theoretical expectations of image colorization using the
                modified GANs, E-GANs and DeOldify model, which were expected,
                were not met due to lack of availability of hardware resources
                for training these models. However, improved results of the UNET
                GAN colorization were achieved by making use of TPU for training
                as compared to the results achieved using a GPU. Future scope of
                the project extends to employing powerful hardware to achieve
                more accurate colorization by training the bulkier models of
                E-GAN and DeOldify.{" "}
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
