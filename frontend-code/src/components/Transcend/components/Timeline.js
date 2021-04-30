const TimelineNode = ({ title, date, isLeft }) => null;

const Timeline = ({ TimelineData }) => {
    const TimelineNodes = TimelineData.map((item) => (
        <TimelineNode key={item.title} title={item.title} date={item.date} />
    ));
    return <>{TimelineNodes}</>;
};

export default Timeline;
