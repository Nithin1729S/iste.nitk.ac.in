import QuestionItem from "./QuestionItem";

import styles from "../css/QuestionList.module.css";
const QuestionList = ({ data }) => {
    const QuestionItems = data.map((item) => (
        <QuestionItem item={item} key={item.title} />
    ));
    return <div className={styles.main}>{QuestionItems}</div>;
};
export default QuestionList;
