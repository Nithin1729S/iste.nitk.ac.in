export default {
    id: 7,
    oneline:
        "This project aims to generate hand-drawn sketches of various animals and objects by using deep learning architectures like Generative Recurrent Neural Networks and Auto-encoders. Our goal is to train machines to draw and generalize simple drawings from a simple sequence of motor actions, in a manner similar to humans.",
    logo:
        "https://4.bp.blogspot.com/-oAPlGiBet6s/WO6VOPRPzkI/AAAAAAAABt4/vXkP4Yy8-0guIDU6AhKfP0VdnAJBx5ssgCLcB/s1600/image11.png",
    name: "SketchGen",
    imgUrl: [
        "https://drive.google.com/file/d/1KXIVJCuATWYqJAe0L-sPB3sY_aA9sa5v/preview",
        "https://drive.google.com/file/d/1X1bSLng-JEL7qvcBk_lS8j72bcKQeLun/preview",
        "https://drive.google.com/file/d/1hW-dB0nsdrycs2tv8e3Innu2OCdNeJYT/preview",
        "https://drive.google.com/file/d/107E0qNksW3IxuFt2pfz_b-7z58d1ofM3/preview",
        "https://drive.google.com/file/d/1BxvHiz053ZYGtn_ypJaupRTPwZJ99v5H/preview",
        "https://drive.google.com/file/d/1R_yRYKxwG4I-neZTg_ZEjptpyoUwuwJE/preview",
        "https://drive.google.com/file/d/10jPvGXgNfpCCCYOrzGgjKn4FGLYU1TnY/preview",
        "https://drive.google.com/file/d/1tedJmDsiyhdoCs3hAq4H7UjSHvb1-4VW/preview",
        "https://drive.google.com/file/d/1FcZGMeL1hcIE_7_Xt2CsoWtIFIhL_925/preview",
        "https://drive.google.com/file/d/1KKP9mB3IoLcZWOCYBVgXcMojxRfSvRNN/preview",
        "https://drive.google.com/file/d/1T54ivkyRu1nwt2IFK3gWcnQlfe8BX9pG/preview",
    ],
    members: [
        "Amodh Shenoy",
        "K V Sumanth Reddy",
        "Amey Shimpi",
        "Jagdish B C",
        "Ritvika R B",
        "Dwija Bagwe",
        "Pratik Kumar S",
        "Aakarshee Jain",
        "Mansi Singh",
        "Joshitha Reddy D",
    ],
    description: {
        aim: (
            <div>
                This project aims to generate hand-drawn sketches of various
                animals and objects by using deep learning architectures like
                Generative Recurrent Neural Networks and Auto-encoders. Our goal
                is to train machines to draw and generalize simple drawings from
                a simple sequence of motor actions, in a manner similar to
                humans.
            </div>
        ),
        meth: (
            <div>
                SketchGen presents a Recurrent Neural Network capable of
                producing sketches of common objects, with the goal of training
                a machine to draw and generalize abstract concepts in a manner
                similar to humans. It uses an encoder-decoder model, in which
                each pen stroke is sent into the model in consecutive order. The
                model learns these strokes and produces consecutive strokes. The
                final image is similar to the one which we input, just like -
                how we see some drawing and try to redraw it on paper.
                <br />
                <br />
                The dataset is consecutive vectors of 5 characters. A sketch is
                a list of points, and each point is a vector consisting of 5
                elements: (∆x, ∆y, p1, p2, p3). The first two elements are the
                offset distance in the x and y directions of the pen from the
                previous point. P1 indicates that the pen is currently touching
                the paper or not. The second pen state, P2, indicates that the
                pen will be lifted from the paper after the current point and
                that no line will be drawn next. The final pen state, p3,
                indicates that the drawing has ended.
                <br />
                <br />A vector stroke image (let’s call it S), is first uploaded
                into an encoder. The encoder reads the input stroke by stroke
                and creates a latent vector Z for the training set. (Once
                trained, the encoder will give a feature vector for input that
                can be used by a decoder to construct the input with the
                features that matter the most to make the reconstructed input
                recognizable as the actual input. This vector holds the
                information, the features, that represents the input.) Under
                this encoding scheme, the latent vector z is a random vector
                conditioned on the input sketch. This latent vector Z is not the
                same for every iteration and keeps producing different latent
                vectors Z for every training iteration. The weights or the
                values of the hidden layers are saved via checkpoints. The
                decoder uses the latent vector Z which was conditioned on the
                input, to produce a set of consecutive strokes to produce an
                array of strokes, which is then converted into an image using
                the SVGwrite library. It is important to emphasize that the
                reconstructed sketches are not copies of the input sketches, but
                are instead new sketches with similar characteristics as the
                inputs. <br />
                <br />
                <div
                    style={{ backgroundColor: "lightblue", color: "darkblue" }}
                >
                    Sketch {"->"} Encoder(S) {"->"} Latent Vector Z {"->"}{" "}
                    decoder(Z) {"->"} New Sketch
                </div>
            </div>
        ),
        res: (
            <div>
                Our results are the decoded images/gifs from the model and a
                demo video. Please refer the Images, Screenshots and Videos
                section. <br />
                <br />
                This is a sample output:
                <br />
                <iframe
                    src="https://drive.google.com/file/d/1SsAF6_8PQsXYhVHG1ahUy2-UzSvkaVC1/preview"
                    width="600"
                    height="300"
                    style={{ border: "1px black solid", marginLeft: "20%" }}
                ></iframe>
                <br />
                <br />
                As you can see, the model knows that a cat has eyes and hence
                drew them, even tho we gave a input drawing with no eyes
            </div>
        ),
        con: (
            <div>
                In this work, we develop a methodology to model sketch drawings
                using recurrent neural networks. SketchGen is able to generate
                possible ways to finish an existing, but unfinished sketch
                drawing. Our model can encode existing sketches into a latent
                vector, and generate similar-looking sketches. We demonstrate
                what it means to interpolate between two different sketches by
                interpolating between its latent space, and also show that we
                can manipulate attributes of a sketch by augmenting the latent
                space.
                <br />
                <br />
                SketchGen has many creative applications. The decoder can be
                useful to provide different images when trained once. And if
                trained on a higher level sketch, then maybe we can get new and
                creative outputs. A model trained on higher-quality sketches may
                find its way into educational applications that can help teach
                students and artists how to draw. The current idea has good
                potential and can be developed to a good extent.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
