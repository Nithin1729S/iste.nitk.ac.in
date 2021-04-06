import React from "react";
import Cookies from "universal-cookie";

import CTFLogin from "../RenderingComponents/CTFLogin";
import QuestionsList from "../AggregatingComponents/QuestionList";
class CTFComponent extends React.Component {
    checkLogin = () => {
        const cookie = new Cookies();
        return cookie.get("teamName");
    };

    render() {
        if (!this.checkLogin()) return <CTFLogin />;
        return <QuestionsList />;
    }
}
export default CTFComponent;
