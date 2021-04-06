import styles from "../../css/SGPItem.module.css";

const SGPItem = ({ item }) => {
    const { title, formLink, contentLink, poster, desc } = item;
    return (
        <div className={styles.main}>
            <img src={poster} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={contentLink}>View more</a>
            <a href={formLink}>Register</a>
        </div>
    );
};
export default SGPItem;
