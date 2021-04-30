import styles from "../css/TechCards.module.css";

const TechCard = ({ title, desc, imgUrl }) => {
    return (
        <div className={styles.card}>
            <div className={styles.back}>
                <h3>{title}</h3>
                <p className={styles.desc}>{desc}</p>
            </div>
            <div className={styles.front}>
                <img src={imgUrl} alt={title} />
            </div>
        </div>
    );
};

const TechCards = ({ TechData }) => {
    return (
        <div className={styles.main}>
            {TechData.map(({ title, desc, imgUrl }) => (
                <TechCard
                    key={title}
                    title={title}
                    desc={desc}
                    imgUrl={imgUrl}
                />
            ))}
        </div>
    );
};
export default TechCards;
