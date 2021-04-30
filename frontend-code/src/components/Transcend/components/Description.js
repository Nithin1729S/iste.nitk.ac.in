import styles from "../css/Description.module.css";

const Description = ({ title, desc, img, logo }) => {
    return (
        <div className={styles.main}>
            <img src={img} alt={title} className={styles.backgroundImage} />
        </div>
    );
};
export default Description;
