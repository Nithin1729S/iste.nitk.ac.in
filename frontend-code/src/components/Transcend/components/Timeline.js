import styles from "../css/Timeline.module.css";

const TimelineNode = ({ title, date }) => {
    return (
        <>
            <div className={styles.colorDot} />
            <div className={styles.node}>
                <h6 className={styles.date}>{date}</h6>
                <h5 className={styles.title}>{title}</h5>
            </div>
        </>
    );
};

const Timeline = ({ TimelineData }) => {
    const TimelineNodes = TimelineData.map((item) => (
        <TimelineNode key={item.title} title={item.title} date={item.date} />
    ));
    return (
        <div className={` ${styles.main} center`}>
            <div className={styles.nodeContainer}>
                {TimelineNodes}
                <div className={styles.colorDot} />
            </div>
        </div>
    );
};

export default Timeline;
