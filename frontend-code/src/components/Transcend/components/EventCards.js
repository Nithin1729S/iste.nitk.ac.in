import styles from "../css/EventCards.module.css";

const Card = ({ title, desc, img, formLink }) => {
    return (
        <div className={styles.card}>
            <img src={img} alt={title} />
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href={formLink} target="_blank" rel="noreferrer">
                <button className="waves-effect btn">
                    Click here to register
                </button>
            </a>
        </div>
    );
};

const EventCards = ({ EventData }) => {
    const EventCards = EventData.map(({ title, desc, img, formLink }) => (
        <Card title={title} img={img} desc={desc} formLink={formLink} />
    ));
    return (
        <div className={styles.main}>
            <div className={styles.a}>{EventCards[0]}</div>
            <div className={styles.c}>{EventCards[1]}</div>
            <div className={styles.b}>{EventCards[2]}</div>
            <div className={styles.d}>{EventCards[3]}</div>
            <div className={styles.e}>{EventCards[4]}</div>
            <div className={styles.f}>{EventCards[5]}</div>
        </div>
    );
};
export default EventCards;
