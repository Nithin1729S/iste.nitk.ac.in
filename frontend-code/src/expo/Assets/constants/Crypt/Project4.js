export default {
    id: 4,
    oneline:
        "To Generate relevant meme caption given a meme template using Neural Networks based on ‘ Dank Learning’ Paper",
    logo:
        "https://d3i71xaburhd42.cloudfront.net/47ec091ba9d916e391c2f4e8ec36edcb59d104d6/2-Figure1-1.png",
    name: "Dank Learning",
    imgUrl: [],
    members: [
        "Manan",
        "Hrithik Bhat",
        "Gayatri Nisha",
        "Prateek Kumar",
        "Akshay Bistagond",
        "Shivraj Dharwad",
    ],
    description: {
        aim: (
            <div>
                To Generate relevant meme caption given a meme template using
                Neural Networks based on ‘ Dank Learning’ Paper
            </div>
        ),
        meth: (
            <div>
                The project is divided into 4 main steps. <br />
                Dataset : ImgFlip575k memes dataset
                <br />
                <ol style={{ listStyleType: "disc", fontWeight: "lighter" }}>
                    <li>
                        Image ( Meme Template ) Processing : Extract Image
                        features using A Convolutional Neural Network ( CNN )
                    </li>
                    <li>
                        Caption Processing : Process the dataset by cleaning
                        captions, standard text processing techniques and
                        converting words to GLoVE word embeddings
                    </li>
                    <li>
                        Model Building and Training : Compile an LSTM model for
                        continuous text generation and train the model on the
                        dataset
                    </li>
                    <li>
                        Text Generation : Generate captions by inputting a meme
                        template and use Temperature- Random Sampling to
                        generate captions
                    </li>
                </ol>
            </div>
        ),
        res: (
            <div>
                Model is able to generate coherent and relevant captions in 2
                out of 10 cases
            </div>
        ),
        con: (
            <div>
                LSTMs are very powerful at text generation tasks and can be
                combined with a CNN in an encoder decoder architecture to
                caption Images. Neural Networks are not completely able to
                capture the human concept of ‘humor’ properly.
                <br />
                <br /> Further work needs to be done in order to improve model
                performance. More semantic features need to be extracted from
                text in order to capture ‘humor’. Models with Transformer
                Architecture can trained for better performance
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
