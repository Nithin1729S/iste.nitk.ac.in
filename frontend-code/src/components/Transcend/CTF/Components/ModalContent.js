import styles from "../css/ModalContent.module.css";
const ModalContent = ({
    title,
    desc,
    questionLink,
    hintLink,
    onCloseHandler,
}) => {
    return (
        <>
            <div className={styles.header}>
                <p> {title}</p>
                <span>
                    <button
                        className={`waves-effect waves-light btn-large ${styles.top}`}
                        onClick={onCloseHandler}
                    >
                        <i class="material-icons">close</i>
                    </button>
                </span>
            </div>
            <div className={`${styles.content} row`}>
                <div className={`${styles.questionBlock} col s12`}>
                    <p>{desc}</p>
                </div>
                <div className={`${styles.questionLink} col s6`}>
                    <a href={questionLink} target="_blank" rel="noreferrer">
                        Click here to view more!
                    </a>
                </div>
                <div className={`${styles.hintLink} col s6`}>
                    <span>
                        <p>{hintLink}</p>
                    </span>
                </div>

                <i
                    className={`small material-icons indigo-text text-darken-4 col s1 ${styles.flag}`}
                >
                    flag
                </i>
                <div>
                    <input
                        type="text"
                        id="flag"
                        className=" col s5 offset-s2 "
                        placeholder="enter flag here"
                    />
                    <button
                        className={`waves-effect waves-light btn-large ${styles.close} col s3 offset-s2`}
                        onClick={onCloseHandler}
                    >
                        <i className="material-icons right">send</i>CLOSE
                    </button>
                </div>
            </div>
        </>
    );
};
export default ModalContent;
