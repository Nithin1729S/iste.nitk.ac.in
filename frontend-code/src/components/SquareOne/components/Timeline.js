import styles from "../css/Timeline.module.css";

const TimelineNode = ({ title, date }) => {
    return (
        <>
            <div className={styles.colorDot} />
            <div className={styles.node}>
                <pre className={styles.title}>{title}</pre>
                <pre className={styles.date}>{date}</pre>
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
