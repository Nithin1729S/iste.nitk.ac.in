export default {
    id: 3,
    oneline:
        "To detect pothole in an image using trained weights and give output of the number of potholes.",
    logo:
        "https://www.autopilotreview.com/wp-content/uploads/2020/02/tesla-autopilot-pothole-detection-image-696x417.jpg",
    name: "Pothole Detector",
    imgUrl: [
        "https://drive.google.com/file/d/12d6ywemaTY74wZ9VuEEJD6Wn4NUuE5W4/preview",
        "https://drive.google.com/file/d/1x81B8JTCe_MLqWy-zScG4gnkD5BbR44e/preview",
        "https://drive.google.com/file/d/1nNbJ13T7S4LV-rvCbxtuOdqUNTSQR6NP/preview",
        "https://drive.google.com/file/d/1yY5lnUYvX7GdBGibyWjUAn62_-T5VUys/preview",
        "https://drive.google.com/file/d/1p2G3xQ_f_5FpsQlEj2jXckuNucTeby-J/preview",
    ],
    members: [
        "Avikal Sagar",
        "Saathvika B. Mahesh",
        "Suraj",
        "Prathap Y",
        "Nikhil",
    ],
    description: {
        aim: (
            <div>
                To detect pothole in an image using trained weights and give
                output of the number of potholes.
            </div>
        ),
        meth: (
            <div>
                We have used CNN to solve this problem statement. We have
                implemented following CNNs in this project- <br />
                Squeeze Net, Mobile Nets, Inception-v3, VGG 16 and ResNet50.{" "}
                <br />
                <br />
                Bounding box and Intersection over union are some common image
                detection which we have used in this project.
                <br />
                <br />
                ALGORITHM <br />
                Part(A)
                <br /> (i)Connect to backend.py <br /> Steps : <br /> 1. Import
                the necessary libraries <br /> 2. Provide Yolo backend path
                <br /> 3. Base Feature Extractor <br /> 4. Full Yolo Feature{" "}
                <br /> (a) Implement the organisation layer(22 layers using
                Convo2D, and Leaky Relu for function) <br /> 5. Tiny Yolo
                Feature (a) Implement the neural network layers(8 layers using
                Convo2D, and Leaky Relu again) <br /> 6. Implement mobile net
                feature <br /> 7. Implement squeeze net feature <br /> 8.
                Implement inception 3 feature <br /> 9. Implement VG16 feature{" "}
                <br /> 10.Implement resnet 15 feature
                <br />
                (ii)Connect to utils.py <br /> Steps : <br /> 1. Import the
                necessary libraries <br /> 2. Define and implement the classes
                bound box, weight reader <br /> 3. Decode output by the network{" "}
                <br /> 4. Suppress non maximal boxes
                <br /> 5. Remove boxes that are less likely than object
                threshold
                <br /> 6. Compute overlap, ap etc <br /> (iii) Connect to
                frontend.py <br /> Steps : <br /> 1. Import necessary libraries{" "}
                <br /> 2. Implement the yolo features - make the extractor
                layers - make the object detection layer - initialise the
                weights of layers - print summary of the whole model <br /> 3.
                Define custom loss - Adjust prediction - Adjust ground truth -
                Determine the masks - Warm up training - Finalize the losses
                <br /> 4. Make train and validation generators <br /> 5. Compile
                the model <br /> 6. Make a few callbacks <br /> 7. Start the
                training process <br /> 8. Compute mAP on validation set
                <br /> 9. Gather all detections and annotations
                <br /> 10. Make the boxes and labels
                <br /> 11. Sort the boxes and labels according to the scores{" "}
                <br /> 12. Copy detections to all detections <br /> 13. Repeat
                step 8 on all detections(not validation)
                <br /> 14. Sort by score, compute false/true positives <br />{" "}
                15. Compute recall and precision <br /> 16. Compute average
                precision
                <br />
                Part(B):
                <br /> (i) Frozen graph(freeze tensorflow model) <br /> (ii)
                Convert frozen graphs to tensor rt graph <br /> (iii) Load
                tensor rt fp16 graph <br /> (iv) Make predictions of fp16 graph{" "}
                <br /> ----MODEL READY FOR EXECUTION----
            </div>
        ),
        res: (
            <div>
                Depending on the number of potholes present in the image the
                output is given. Please refer the Images, Screenshots ad Videos
                section to see more.{" "}
            </div>
        ),
        con: (
            <div>
                1)App can be developed to detect pothole which will help people
                who has problems in vision or old aged people
                <br /> 2)Can be used in automated cars for better approximation
                to avoid potholes <br />
                3)Can help in categorizing roads if maintenance is required
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
