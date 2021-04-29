import React from "react";

import QuestionList from "./QuestionList";
import CTFHeader from "./CTFHeader";
class CTFMain extends React.Component {
    componentDidMount() {
        //TODO: Make get questions API request here
    }

    render() {
        return (
            <>
                <CTFHeader name="test" score={200} />
                <QuestionList />
            </>
        );
    }
}
export default CTFMain;
