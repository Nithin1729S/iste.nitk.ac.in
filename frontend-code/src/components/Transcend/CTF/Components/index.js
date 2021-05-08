import React from "react";
import Cookies from "universal-cookie";

import CTFLogin from "./CTFLogin";
import CTFMain from "./CTFMain";
class CTFComponent extends React.Component {
    componentDidMount() {
        this.props.setFooterVal("charge");
    }
    checkLogin = () => {
        const cookie = new Cookies();
        return cookie.get("teamName");
    };

    render() {
        if (!this.checkLogin()) return <CTFLogin />;
        return <CTFMain />;
    }
    componentWillUnmount() {
        this.props.setFooterVal("");
    }
}
export default CTFComponent;
