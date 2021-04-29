import React from "react";
import Cookies from "universal-cookie";

import CTFLogin from "./CTFLogin";
import CTFMain from "./CTFMain";
class CTFComponent extends React.Component {
    checkLogin = () => {
        const cookie = new Cookies();
        return cookie.get("teamName");
    };

    render() {
        if (!this.checkLogin()) return <CTFLogin />;
        return <CTFMain />;
    }
}
export default CTFComponent;
