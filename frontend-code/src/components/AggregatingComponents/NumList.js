import React from "react";

import NumberCounter from "../RenderingComponents/NumberCounter";
class NumList extends React.Component {
    state = { show: false };

    onChange = (isVisible) => {
        if (isVisible) this.setState({ show: true });
    };

    render() {
        return (
            <div className="InNumbers">
                <NumberCounter
                    value={this.props.years_in_operation}
                    handleChange={this.onChange}
                    show={this.state.show}
                    spanText="Years in operation"
                />
                <NumberCounter
                    value={this.props.member_count}
                    handleChange={this.onChange}
                    show={this.state.show}
                    spanText="Members This Year"
                />
                <NumberCounter
                    value={this.props.project}
                    handleChange={this.onChange}
                    show={this.state.show}
                    spanText="Projects This Year"
                />
            </div>
        );
    }
}

export default NumList;
