import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const NumberCounter = (props) => {
    const { value, show, spanText, handleChange } = props;
    return (
        <div className="col l4 s12 center-align">
            <h2>
                <VisibilitySensor onChange={handleChange} delayedCall={true}>
                    <CountUp start={0} duration={2} end={show ? value : 0} />
                </VisibilitySensor>
            </h2>
            <span>{spanText}</span>
        </div>
    );
};
export default NumberCounter;
