import { createPortal } from "react-dom";

import styles from "../../css/modal.module.css";

const Overlay = ({ onClick }) => {
    return <div className={styles.overlay} onClick={onClick} />;
};
const Modal = ({ children, isOpen, onCloseHandler }) => {
    if (!isOpen) return null;
    return createPortal(
        <>
            <Overlay onClick={onCloseHandler} />
            <div className={styles.content}>{children}</div>
        </>,
        document.getElementById("portal")
    );
};
export default Modal;
