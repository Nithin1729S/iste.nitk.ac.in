export default {
    id: 6,
    name: "Medical Image Segmentation",
    logo:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/MI_with_contraction_bands_very_high_mag.jpg",
    oneline:
        "To segment nuclei from histopathology images for effective diagnosis and treatment of cancer.",
    imgUrl: [
        "https://drive.google.com/file/d/1bUuCLucFijQZ-E2oLmWIxD9bHmdKr-eq/preview",
        "https://drive.google.com/file/d/1LdtLceU7ZvafR2neamQImmA3sOsScT2b/preview",
        "https://drive.google.com/file/d/1nTBQTyWclm88-63e1IkdgNJ8K_NZFxDI/preview",
        "https://drive.google.com/file/d/1YUzuflHQttK6fMqFk_9wv6C_EfR04G97/preview",
        "https://drive.google.com/file/d/1p-bfoufwdkFnmf-EH0KWGARXAbhdGFde/preview",
    ],
    members: ["Rohith Yatgiri", "Aditya Manjunath", "Shrutha D", "Sai Rohit P"],
    description: {
        aim: (
            <div>
                To segment nuclei from histopathology images for effective
                diagnosis and treatment of cancer.
            </div>
        ),
        meth: (
            <div>
                <ol>
                    <li>
                        Preprocessing stage includes data augmentation to avoid
                        over fitting.
                    </li>
                    <li>
                        Building standard mobile architectures as reference
                        models.
                    </li>
                    <li>These include UNET,Segnet,DANet.</li>
                    <li>
                        Training and testing on above mentioned architectures.
                    </li>
                    <li>
                        Build other segmentation algorithm like deeplabv3,
                        encoder-decoder etc
                    </li>
                    <li>
                        Compare the results obtained from above algorithm with
                        above architectures.{" "}
                    </li>
                    <li>
                        Post Processing stage used to separate the boundaries of
                        adjacent cells.
                    </li>
                </ol>
            </div>
        ),
        res: (
            <div>
                The following results have been obtained from various
                architectures. <br />
                The table shown below is a comparison between the train and test
                accuracies of different models. <br />
                <iframe
                    src="https://drive.google.com/file/d/1p-bfoufwdkFnmf-EH0KWGARXAbhdGFde/preview"
                    width="640"
                    height="480"
                ></iframe>
                <br />
                It can be seen that UNET yielded the highest results in both
                test and train sets. Following is a set of images which include
                Original Images(from the dataset), Ground Truth (Expected
                outcome which is also available in the dataset) and outputs from
                different architectures.
                <iframe
                    src="https://drive.google.com/file/d/1YUzuflHQttK6fMqFk_9wv6C_EfR04G97/preview"
                    width="640"
                    height="480"
                ></iframe>
            </div>
        ),
        con: (
            <div>
                This work addresses some of the typical segmentation algorithms
                for medical images. Segmentation plays a vital role in
                telemedicine applications for the analysis of the region of
                interest. The algorithms are grouped into three generations, and
                the rank is assigned based on the comparative analysis of their
                features. The algorithms are tested on real-time data sets, and
                this work will be a guidance for the researchers in medical
                image segmentation. The hybrid segmentation algorithms are
                gaining much importance, as they produce superior results by
                overwhelming the limitations of conventional algorithms. A
                segmentation technique will not yield efficient result for all
                medical imaging modalities; based on the image modality and
                region of interest, appropriate algorithm has to be chosen. The
                outcome of this work will be an aid for the identification of
                diseases like cyst and tumor in medical images. Our future work
                will be a detailed analysis of hybrid segmentation models for
                the delineation of anatomical organs and anomalies.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
