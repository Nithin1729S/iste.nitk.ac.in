import React from "react";

import styles from "../../css/eventInput.module.css";
const EventInput = (props) => {
    const {
        iconName,
        labelName,
        type,
        value,
        min,
        max,
        placeholder,
        onChange,
    } = props;
    return (
        <div className="input-field col s5 push-s2 ">
            <i className="form-icon material-icons prefix">{iconName}</i>
            <input
                type={type}
                id={labelName}
                className={styles.input}
                value={value}
                onChange={onChange}
                min={min ? min : null}
                max={max ? max : null}
                placeholder={placeholder ? placeholder : null}
            />
            <label htmlFor={labelName} className={styles.label}>
                {labelName}
            </label>
        </div>
    );
};
export default EventInput;
