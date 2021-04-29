import React from "react";

class LeaderboardItem extends React.Component {
    render() {
        return (
            <tr>
                <td className="center">{this.props.rank}</td>
                <td className="center">{this.props.name}</td>
                <td className="center">{this.props.rollNum}</td>
                <td className="center">{this.props.score}</td>
            </tr>
        );
    }
}
export default LeaderboardItem;
