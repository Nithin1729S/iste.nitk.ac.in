import styles from "../css/Timeline.module.css";
import TitleWithLine from "../../RenderingComponents/TitleWithLine";

const TimelineNode = ({ title, date }) => {
    return (
        <>
            <div className={styles.colorDot} />
            <div className={styles.node}>
                <h5 className={styles.title}>{title}</h5>
                <h6 className={styles.date}>{date}</h6>
            </div>
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
            <div className={styles.nodeContainer}>{TimelineNodes}</div>
        </div>
    );
};

export default Timeline;
