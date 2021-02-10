import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class NumList extends React.Component {
    state = { show: false };

    onChange = (isVisible) => {
        if (isVisible) this.setState({ show: true });
    };

    render() {
        return (
            <div className="InNumbers">
                <div className="col l4 s12 center-align">
                    <h2>
                        <VisibilitySensor
                            onChange={this.onChange}
                            delayedCall={true}
                        >
                            <CountUp
                                start={0}
                                duration={2}
                                end={
                                    this.state.show
                                        ? this.props.years_in_operation
                                        : 0
                                }
                            />
                        </VisibilitySensor>
                    </h2>
                    <span>Years In Operation</span>
                </div>
                <div className="col l4 s12 center-align">
                    <h2>
                        <VisibilitySensor
                            onChange={this.onChange}
                            delayedCall={true}
                        >
                            <CountUp
                                start={0}
                                duration={2}
                                end={
                                    this.state.show
                                        ? this.props.member_count
                                        : 0
                                }
                            />
                        </VisibilitySensor>
                    </h2>
                    <span>Members This Year</span>
                </div>
                <div className="col l4 s12 center-align">
                    <h2>
                        <VisibilitySensor
                            onChange={this.onChange}
                            delayedCall={true}
                        >
                            <CountUp
                                start={0}
                                duration={2}
                                end={this.state.show ? this.props.project : 0}
                            />
                        </VisibilitySensor>
                    </h2>
                    <span>Projects This Year</span>
                </div>
            </div>
        );
    }
}

export default NumList;
