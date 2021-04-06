import React from "react";

class LeaderboardItem extends React.Component {
    render() {
        return (
                <tr>
                    <td>{this.props.rank}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.rollNum}</td>
                    <td>{this.props.score}</td>
                </tr>
        );
    }
}
export default LeaderboardItem;
