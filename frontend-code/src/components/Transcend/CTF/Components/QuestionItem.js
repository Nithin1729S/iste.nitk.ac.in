import React from "react";
import Cookies from "universal-cookie";

import styles from "../css/QuestionItem.module.css";

import Modal from "../../../UtilityComponents/Modal";
import ModalContent from "./ModalContent";
import { baseRequest } from "../../../../constants";
class QuestionItem extends React.Component {
    state = { isModalOpen: false, hint1URL: "", hint2URL: "" };
    modalOpenHandler = () => {
        this.setState({ isModalOpen: true });
    };
    modalCloseHandler = () => {
        this.setState({ isModalOpen: false });
    };
    makeRequest = (val) => {
        const { id } = this.props.item;
        const cookie = new Cookies();
        const APIBody = {
            teamId: cookie.get("teamId"),
            questionId: id,
            hintId: val,
        };
        baseRequest.post("/ctf/hints/", APIBody).then((res) => {
            console.log(res.data);
            const hintToSet = `hint${val}URL`;
            this.setState({ [hintToSet]: res.data.hintUrl });
        });
    };
    render() {
        const {
            isAns,
            title,
            description,
            points,
            url,
            id,
            isHint1,
            isHint2,
            usedHint1,
            usedHint2,
        } = this.props.item;
        return (
            <>
                <div
                    onClick={this.modalOpenHandler}
                    className={`${styles.box} ${
                        isAns ? styles.attempted : null
                    }`}
                >
                    <div className={styles.content}>
                        <h3 className={styles.title}>{title}</h3>
                        <h5 className={styles.points}>{points}</h5>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onCloseHandler={this.modalCloseHandler}
                >
                    <ModalContent
                        title={title}
                        desc={description}
                        questionLink={url}
                        id={id}
                        isHint1={isHint1}
                        isHint2={isHint2}
                        usedHint1={usedHint1 || this.state.hint1URL !== ""}
                        usedHint2={usedHint2 || this.state.hint2URL !== ""}
                        makeRequest={(val) => this.makeRequest(val)}
                        onCloseHandler={this.modalCloseHandler}
                        hint1URL={this.state.hint1URL}
                        hint2URL={this.state.hint2URL}
                        isAns={isAns}
                    />
                </Modal>
            </>
        );
    }
}
export default QuestionItem;
