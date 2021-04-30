import React from "react";

import Description from "./components/Description";
import TechCards from "./components/TechCards";
import EventCards from "./components/EventCards";
import { description, techData, eventData } from "./Constants";
class Transcend extends React.Component {
    render() {
        const { title, desc, img } = description;
        return (
            <>
                <Description title={title} desc={desc} img={img} />
                <TechCards TechData={techData} />
                <EventCards EventData={eventData} />
            </>
        );
    }
}
export default Transcend;
