import styles from "../css/Timeline.module.css";
import TitleWithLine from "../../RenderingComponents/TitleWithLine";

const TimelineNode = ({ title, date }) => {
    return (
        <>
            <h5>{title}</h5>
            <h6>{date}</h6>
        </>
    );
};

const Timeline = ({ TimelineData }) => {
    const TimelineNodes = TimelineData.map((item) => (
        <TimelineNode key={item.title} title={item.title} date={item.date} />
    ));
    return (
        <div className={` ${styles.main} container`}>
            <TitleWithLine title="Timeline" />
            {TimelineNodes}
        </div>
    );
};

export default Timeline;
