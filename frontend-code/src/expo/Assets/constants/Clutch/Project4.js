export default {
    id: 4,
    name: "Alloy Recommender System",
    tags: ["ML", "Material Science"],
    logo:
        "https://s3.amazonaws.com/prod-www-blackline-com/blog/wp-content/uploads/2019/01/29163118/A-Conversation-With-BlackLines-Machine-Learning-Experts-720x405.jpg",
    oneline:
        "Build an alloy recommender system that gives theoretical composition of a hypothetical alloy with required mechanical property",
    imgUrl: [
        "https://drive.google.com/file/d/12tsstjYKeqfrwU5BaLCwRBmmRHln_swf/preview",
        "https://drive.google.com/file/d/1_QCo-3faIQWdhqF0YcgjX_qA_GwwadXS/preview",
        "https://drive.google.com/file/d/1Ek9GOAJMP2VKnjyEqc79Q9tdOV2CBeT4/preview",
        "https://drive.google.com/file/d/1GjuvLhBriTQxIfmm6yaqyaHv9kc-fV8o/preview",
        "https://drive.google.com/file/d/1Iqczub3OZl4WVBZLsPJnQT6Wwjiuf8TX/preview",
        "https://drive.google.com/file/d/1XMM3SfOqFKdYZ-80Ya3Sqt_84JIxMSes/preview",
        "https://drive.google.com/file/d/1r1p6LnlsxIzQuDEUn6WzQFQD0_x5J5xX/preview",
        "https://drive.google.com/file/d/1FqHc0FK8kDCXPWkQuA_XvTlJechB5KHV/preview",
        "https://drive.google.com/file/d/1y3nr6dfS6u-xx9Iy14PkTZ_8_XjcZuZP/preview",
    ],
    members: [
        "Mrutyunjay",
        "Rakesh",
        "Shreyas",
        "Prakruti",
        "Pavan C",
        "Ayush",
        "Sakshi",
    ],
    description: {
        aim: (
            <div>
                Build an alloy recommender system that gives theoretical
                composition of a hypothetical alloy with required mechanical
                property.
            </div>
        ),
        meth: (
            <div>
                <iframe
                    src="https://drive.google.com/file/d/1GjuvLhBriTQxIfmm6yaqyaHv9kc-fV8o/preview"
                    width="640"
                    height="480"
                ></iframe>
                <ol>
                    <li>
                        Web Scraping the alloy properties from the web:
                        <ol>
                            <li>
                                Used python’s requests and Beautiful Soup
                                libraries to scrape and parse the HTML code from
                                various online sources.
                            </li>
                            <li>
                                Then built a python script for preprocessing
                                collected raw data using Pandas library.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Building an Artificial Neural Network Model: <br />
                        Keras and Scikit-learn python libraries were used for
                        building a multi- layer perceptron Neural Network model.
                        <ol>
                            <li>
                                Loading Dataset:
                                <ol>
                                    <li>
                                        Using Pandas we loaded the dataset into
                                        the memory.
                                    </li>
                                    <li>
                                        Split the columns of the dataset into
                                        input and output variables.
                                    </li>
                                    <li>
                                        Used train_test_split from scikit_learn
                                        package to split the dataset into a
                                        training and testing set.
                                    </li>
                                    <li>
                                        Normalize them using minmax_scale
                                        function
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Define and compile Keras NN model: <br />
                                <ol>
                                    <li>
                                        Created a MLP using Sequential API from
                                        Keras
                                    </li>
                                    <li>
                                        Layers used:Input to define the input
                                        layer and Dense module for hidden and
                                        the output layer.
                                    </li>
                                    <li>
                                        Activations: Relu for hidden layers and
                                        linear for output layer
                                    </li>
                                    <li>Loss:Mean Squared Error(mse)</li>
                                </ol>
                            </li>
                            <li>
                                Training and Performance Evaluation: <br />
                                <ol>
                                    <li>
                                        Trained model on our training data by
                                        calling the fit() function.
                                    </li>
                                    <li>
                                        Using predict() function we predict the
                                        values of mechanical properties for the
                                        testing set. Evaluate the model based on
                                        mean squared error and R2 score.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li>
                        Improve model’s accuracy:
                        <ol>
                            <li>
                                Hyper parameter tuning : Using GridSearchCV
                                function from sklearn,we optimised the number of
                                neurons in the hidden layers ,thus getting the
                                best architecture.
                            </li>
                            <li>
                                Employed 5-Fold Cross Validation for increasing
                                reliability of tuned parameters
                            </li>
                            <li>
                                Introduced Dropout layer to overcome
                                overfitting.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Genetic Algorithm
                        <iframe
                            src="https://drive.google.com/file/d/1Iqczub3OZl4WVBZLsPJnQT6Wwjiuf8TX/preview"
                            width="640"
                            height="480"
                        ></iframe>
                        <ol>
                            <li>
                                Takes as Input a desired Mechanical Property and
                                tries to find the theoretical composition by
                                playing a “guessing game” with trained Neural
                                Network
                            </li>
                            <li>
                                Each solution/guess has associated “fitness”
                                associated that helps pick out good guesses from
                                bad ones
                            </li>
                            <li>
                                Eventually GA is able to converge to desired
                                mechanical property.
                            </li>
                            <li>Library used:PyGAD</li>
                        </ol>
                    </li>
                    <li>
                        GUI
                        <ol>
                            <li>
                                After building the genetic algorithm model we
                                have created a Graphical User Interface (GUI) to
                                interact with the model.
                            </li>
                            <li>Libraries used:tkinter,PIL</li>
                        </ol>
                    </li>
                </ol>
            </div>
        ),
        res: (
            <div>
                Prediction plots for Shear Modulus, Density and Specific Heat
                Capacity for Iron alloys
                <iframe
                    src="https://drive.google.com/file/d/1r1p6LnlsxIzQuDEUn6WzQFQD0_x5J5xX/preview"
                    width="235"
                    height="200"
                ></iframe>
                <iframe
                    src="https://drive.google.com/file/d/1_QCo-3faIQWdhqF0YcgjX_qA_GwwadXS/preview"
                    width="235"
                    height="200"
                ></iframe>
                <iframe
                    src="https://drive.google.com/file/d/1XMM3SfOqFKdYZ-80Ya3Sqt_84JIxMSes/preview"
                    width="235"
                    height="200"
                ></iframe>
                Prediction plot for Tensile Strength(TS),Yield Strength(YS) and
                Elongation Limit(EL) for Steels
                <iframe
                    src="https://drive.google.com/file/d/1FqHc0FK8kDCXPWkQuA_XvTlJechB5KHV/preview"
                    width="235"
                    height="200"
                ></iframe>
                <iframe
                    src="https://drive.google.com/file/d/1y3nr6dfS6u-xx9Iy14PkTZ_8_XjcZuZP/preview"
                    width="235"
                    height="200"
                ></iframe>
                <iframe
                    src="https://drive.google.com/file/d/1Ek9GOAJMP2VKnjyEqc79Q9tdOV2CBeT4/preview"
                    width="235"
                    height="200"
                ></iframe>
                Since the graphs of predicted property v/s actual property
                closely resemble the y=x line;we conclude that our Neural
                Network is able to map the inputs to mechanical properties to an
                acceptable accuracy <br />
                Our genetic algorithm is able to estimate alloy composition
                given target property to an acceptable tolerance.
            </div>
        ),
        con: <div>The Result is also the Conclusion.</div>,
    },
    //meetLink: 'This is the meet link',
};
