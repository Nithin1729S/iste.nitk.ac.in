import React from "react";

import Description from "./components/Description";
import TechCards from "./components/TechCards";
import EventCards from "./components/EventCards";
import { description, techData, eventData, timelineData } from "./Constants";
import Timeline from "./components/Timeline";
class Transcend extends React.Component {
    render() {
        const { title, desc, img } = description;
        return (
            <>
                <Description title={title} desc={desc} img={img} />
                <Timeline TimelineData={timelineData} />
                <EventCards EventData={eventData} />
                <TechCards TechData={techData} />
            </>
        );
    }
}
export default Transcend;
