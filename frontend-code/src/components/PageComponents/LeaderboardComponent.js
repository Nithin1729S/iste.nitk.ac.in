import React from "react";
import { Link } from "react-router-dom";
import LeaderboardItem from "../RenderingComponents/LeaderboardItem";

import styles from "../../css/leaderboard.module.css";

class LeaderboardComponent extends React.Component {
    state = { searchInput: "", selectedFilter: "rollNum" };

    LeaderboardElementsUnsorted = [
        {
            name: "test10",
            rollNum: "10",
            score: 250,
            rank: "1",
        },
        {
            name: "test1",
            rollNum: "1",
            score: 240,
            rank: "1",
        },
        {
            name: "test2",
            rollNum: "2",
            score: 200,
            rank: "1",
        },
        {
            name: "test3",
            rollNum: "3",
            score: 150,
            rank: "4",
        },
        {
            name: "test4",
            rollNum: "4",
            score: 150,
            rank: "4",
        },
        {
            name: "test5",
            rollNum: "5",
            score: 175,
            rank: "3",
        },
        {
            name: "test6",
            rollNum: "6",
            score: 120,
            rank: "8",
        },
        {
            name: "test7",
            rollNum: "7",
            score: 130,
            rank: "7",
        },
        {
            name: "test8",
            rollNum: "8",
            score: 140,
            rank: "6",
        },
        {
            name: "test10",
            rollNum: "10",
            score: 200,
            rank: "1",
        },
        {
            name: "test1",
            rollNum: "1",
            score: 200,
            rank: "1",
        },
        {
            name: "test2",
            rollNum: "2",
            score: 200,
            rank: "1",
        },
        {
            name: "test3",
            rollNum: "3",
            score: 150,
            rank: "4",
        },
        {
            name: "test4",
            rollNum: "4",
            score: 150,
            rank: "4",
        },
        {
            name: "test5",
            rollNum: "5",
            score: 175,
            rank: "3",
        },
        {
            name: "test6",
            rollNum: "6",
            score: 120,
            rank: "8",
        },
        {
            name: "test7",
            rollNum: "7",
            score: 130,
            rank: "7",
        },
        {
            name: "test8",
            rollNum: "8",
            score: 140,
            rank: "6",
        },
        {
            name: "test10",
            rollNum: "10",
            score: 200,
            rank: "1",
        },
        {
            name: "test1",
            rollNum: "1",
            score: 200,
            rank: "1",
        },
        {
            name: "test2",
            rollNum: "2",
            score: 200,
            rank: "1",
        },
        {
            name: "test3",
            rollNum: "3",
            score: 150,
            rank: "4",
        },
        {
            name: "test4",
            rollNum: "4",
            score: 150,
            rank: "4",
        },
        {
            name: "test5",
            rollNum: "5",
            score: 175,
            rank: "3",
        },
        {
            name: "test6",
            rollNum: "6",
            score: 120,
            rank: "8",
        },
        {
            name: "test7",
            rollNum: "7",
            score: 130,
            rank: "7",
        },
        {
            name: "test8",
            rollNum: "8",
            score: 140,
            rank: "6",
        },
    ];

    handleClick = (e) => {
        this.setState({ selectedFilter: e.target.id });
    };

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value });
    };

    LeaderboardElements = this.LeaderboardElementsUnsorted.sort(
        (a, b) => b.score - a.score
    );

    render() {
        const LeaderboardData = this.LeaderboardElements.filter((item) =>
            item[this.state.selectedFilter].includes(
                this.state.searchInput.toLowerCase()
            )
        )
            .slice(0, 15)
            .map(({ name, rollNum, score, rank }, index) => {
                return (
                    <LeaderboardItem
                        key={index}
                        rank={rank}
                        name={name}
                        rollNum={rollNum}
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
                        this.state.selectedFilter === "rollNum"
                            ? `${styles.button} ${styles.active}`
                            : styles.button
                    }
                    onClick={this.handleClick}
                    id="rollNum"
                >
                    roll number
                </button>
                <button
                    className={
                        this.state.selectedFilter === "name"
                            ? `${styles.button} ${styles.active}`
                            : styles.button
                    }
                    onClick={this.handleClick}
                    id="name"
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
                            <button className="btn waves-effect">
                                Back to Questions
                            </button>
                        </Link>
                        <div className={`${styles.filter} ${styles.center}`}>
                            {searchParams}
                            <br />
                            <label htmlFor="search">
                                Search by{" "}
                                {this.state.selectedFilter === "rollNum"
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
                                        <th>Rank</th>
                                        <th>Team Name</th>
                                        <th>Roll Number</th>
                                        <th>Score</th>
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
