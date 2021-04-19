import styles from "../css/TechCards.module.css";

const TechCard = ({ title, desc, imgUrl }) => {
    return (
        <div className={styles.card}>
            <div className={styles.front}>
                <h3>{title}</h3>
            </div>
            <div className={styles.back}>
                <p>{desc}</p>
            </div>
        </div>
    );
};

const TechCards = ({ TechData }) => {
    return (
        <div className={styles.main}>
            {TechData.map(({ title, desc, imgUrl }) => (
                <TechCard title={title} desc={desc} imgUrl={imgUrl} />
            ))}
        </div>
    );
};
export default TechCards;
