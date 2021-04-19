import styles from "../css/Description.module.css";

const Description = ({ title, desc, imgUrl }) => {
    return (
        <div className={styles.main}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
            <img src={imgUrl} alt={title} className={styles.backgroundImage} />
        </div>
    );
};
export default Description;
