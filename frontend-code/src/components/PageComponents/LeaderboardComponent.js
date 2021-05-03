import React from "react";
import { Link } from "react-router-dom";
import LeaderboardItem from "../RenderingComponents/LeaderboardItem";

import styles from "../../css/leaderboard.module.css";
import { baseRequest } from "../../constants";
class LeaderboardComponent extends React.Component {
    state = { searchInput: "", selectedFilter: "roll_number", elements: [] };
    componentDidMount() {
        baseRequest.get("/ctf/leaderboard/").then((res) => {
            this.setState({ elements: res.data.teamList });
        });
    }

    handleClick = (e) => {
        this.setState({ selectedFilter: e.target.id });
    };

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value });
    };

    calcRank = (items) => {
        items[0].rank = 1;
        for (let i = 1; i < items.length; i++) {
            let element = items[i];
            element.rank =
                items[i - 1].score === items[i].score
                    ? items[i - 1].rank
                    : items[i - 1].rank + 1;
        }
        return items;
    };

    render() {
        if (!this.state.elements[0]) return null;
        const unRankedElements = [
            ...this.state.elements.map(({ roll_number, team_name, score }) => {
                return { roll_number, team_name, score };
            }),
        ];
        const leaderboardElements = this.calcRank(unRankedElements);
        const LeaderboardData = leaderboardElements
            .filter((item) =>
                item[this.state.selectedFilter].includes(
                    this.state.searchInput.toLowerCase()
                )
            )
            .slice(0, 15)
            .map(({ team_name, roll_number, score, rank }) => {
                return (
                    <LeaderboardItem
                        key={roll_number}
                        rank={rank}
                        name={team_name}
                        rollNum={roll_number}
                        score={score}
                    />
                );
            });

        const noResults = (
            <tr>
                <td colSpan="100%" className={styles.center}>
                    No results found
                </td>
            </tr>
        );

        const renderData = LeaderboardData.length ? LeaderboardData : noResults;

        const searchParams = (
            <>
                <label>Filter:</label>
                <button
                    className={
                        this.state.selectedFilter === "roll_number"
                            ? `${styles.button} ${styles.active}`
                            : styles.button
                    }
                    onClick={this.handleClick}
                    id="roll_number"
                >
                    roll number
                </button>
                <button
                    className={
                        this.state.selectedFilter === "team_name"
                            ? `${styles.button} ${styles.active}`
                            : styles.button
                    }
                    onClick={this.handleClick}
                    id="team_name"
                >
                    name
                </button>
            </>
        );

        return (
            <section>
                <div className={`${styles.leaderboard} container`}>
                    <div className={`${styles.header} center`}>
                        <h1>CTF LEADERBOARD</h1>
                        <Link to="/transcend/charge">
                            <button className="btn">Back to Questions</button>
                        </Link>
                        <div className={`${styles.filter} ${styles.center}`}>
                            {searchParams}
                            <br />
                            <label htmlFor="search">
                                Search by{" "}
                                {this.state.selectedFilter === "roll_number"
                                    ? "roll number"
                                    : "name"}{" "}
                                :
                            </label>
                            <input
                                name="search"
                                onChange={this.handleChange}
                                value={this.state.searchInput}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.table}>
                            <table
                                className={`${styles.centered} ${styles.responsive} ${styles.table}`}
                            >
                                <thead>
                                    <tr>
                                        <th className="center">Rank</th>
                                        <th className="center">Team Name</th>
                                        <th className="center">Roll Number</th>
                                        <th className="center">Score</th>
                                    </tr>
                                </thead>
                                <tbody className={styles.tableBody}>
                                    {renderData}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default LeaderboardComponent;
