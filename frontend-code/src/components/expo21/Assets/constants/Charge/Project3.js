const project3 = {
    id: 3,
    name: "Speech to Text Converter",
    tags: [
        "MEL Coefficients",
        "Linear predictive coding",
        "FFT",
        "DFT",
        "HMM",
        "Neural Networks",
    ],
    oneline:
        "This project on Speech Recognition converts speech (limited) to text with a fairly decent accuracy of about 93% with a processing speed of only 1.5 seconds approximately for an audio clip 2 seconds long on a trained model.",
    logo: "https://d1sr9z1pdl3mb7.cloudfront.net/wp-content/uploads/2018/01/09162857/voice-biometrics-large2.jpg",
    imgUrl: [
        "https://drive.google.com/file/d/1bPnu9ec-Q1WzDyGeW81eM4lFqKiGjUfk/preview",
        "https://drive.google.com/file/d/1ULC46VWpLCFEy4FtilZDyTIYmRR3DZsu/preview",
    ],
    members: [
        "Anshuman Sinha",
        "Kaveen S",
        "Ria Mishra",
        "Roopam Dhaneria",
        "Vishal Prakash",
    ],
    description: {
        aim: (
            <div>
                Speech Recognition technology has become an increasingly popular
                concept in recent years. From organizations to individuals, the
                technology is widely used for various utilities it caters to. We
                can already see its applications in Google Assistant, Siri,
                Alexa, et cetera which have a very high accuracy rate of 95-97%.{" "}
                <br />
                This project on Speech Recognition converts speech (limited) to
                text with a fairly decent accuracy of about 93% with a
                processing speed of only 1.5 seconds approximately for an audio
                clip 2 seconds long on a trained model.
            </div>
        ),
        meth: (
            <div>
                Primitive algorithms of speech processing like Hidden Markov
                Models and Mel-frequency cepstral coefficients (MFCCs) were
                explored theoretically and computationally. A dataset of 30
                English words, amassing 2.21 GB of 64,728 sound recordings in
                total was chosen. MFCC matrices of each recording were generated
                and stored to ease the computational process involved in the 2nd
                part. <br />
                1D Convolutional Neural Network was deployed on the previously
                processed MFCCs to generate and train the model on the training
                dataset. Remarkable results rendering accuracies as high as 93%
                were recorded against the pre-trained model of accuracy 89.24%
                on the same dataset. <br />
                <iframe
                    src="https://drive.google.com/file/d/1NaYBbmmz6IPs-8Hjn2qqKTt2zyUuxaXO/preview"
                    width="640"
                    height="480"
                    title="Speech to Text Converter"
                ></iframe>
                <br />
                An inbuilt set of functions was used to accept the input audio
                file and split it into different files according to the word
                occurrences in the audio segment, that uses the duration of
                pause in between words and the sound of noise in decibels to be
                treated as zero, as the 2 hyperparameters. <br />
            </div>
        ),
        res: (
            <div>
                This project on Speech Recognition converts speech (limited) to
                text with a fairly decent accuracy of about 93% with a
                processing speed of only 1.5 seconds approximately for an audio
                clip 2 seconds long on a trained model. <br />
                <iframe
                    src="https://drive.google.com/file/d/1ULC46VWpLCFEy4FtilZDyTIYmRR3DZsu/preview"
                    width="640"
                    height="480"
                    title="Speech to Text Converter2"
                ></iframe>
                <br />
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
export default project3;
