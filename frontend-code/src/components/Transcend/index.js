import React from "react";

import Description from "./components/Description";
import TechCards from "./components/TechCards";
import EventCards from "./components/EventCards";
import { description, techData, eventData, timelineData } from "./Constants";
import Timeline from "./components/Timeline";
import TitleWithLine from "../RenderingComponents/TitleWithLine";
class Transcend extends React.Component {
    render() {
        const { title, desc, img } = description;
        return (
            <>
                <Description title={title} desc={desc} img={img} />
                <TitleWithLine title="Timeline" />
                <Timeline TimelineData={timelineData} />
                <TitleWithLine title="Events" />
                <EventCards EventData={eventData} />
                <TitleWithLine title="About The Tech" />
                <TechCards TechData={techData} />
            </>
        );
    }
}
export default Transcend;
