import styles from "../css/EventCards.module.css";

const Card = ({ title, desc, imgUrl, formLink }) => {
    return (
        <div className={styles.card}>
            <img src={imgUrl} alt={title} />
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href={formLink} className="indigo dark button">
                View More
            </a>
        </div>
    );
};

const EventCards = () => {
    return (
        <div className={styles.main}>
            <div className={styles.a}>
                <Card />
            </div>
            <div className={styles.c}>
                <Card />
            </div>
            <div className={styles.b}>
                <Card />
            </div>
            <div className={styles.d}>
                <Card />
            </div>
            <div className={styles.e}>
                <Card />
            </div>
            <div className={styles.f}>
                <Card />
            </div>
        </div>
    );
};
export default EventCards;
