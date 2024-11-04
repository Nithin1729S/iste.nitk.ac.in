import React, { useEffect, useState } from 'react';
import './SquareOne24.css';

const SPREADSHEET_ID = '1BxtHIztIrGE3Te73sSrMzCnLm7WH-8_tfXGYgxX91No';
const SHEET_NAME = 'Sheet1';
const API_KEY = 'AIzaSyBzJ8bt0xlC-YrHljCplqhY0Au1qVLvbQs';
const CACHE_KEY = 'leaderboardData';
const CACHE_TIMESTAMP_KEY = 'leaderboardDataTimestamp';
const CACHE_DURATION = 15 * 60 * 1000; // 10 minutes in milliseconds

const SquareOne24Leaderboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cachedData = localStorage.getItem(CACHE_KEY);
            const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

            // Check if cached data exists and if it's still valid
            if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp) < CACHE_DURATION) {
                setData(JSON.parse(cachedData));
            } else {
                try {
                    const response = await fetch(
                        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
                    );
                    const result = await response.json();

                    // Store the data in the state and cache it in localStorage
                    setData(result.values.slice(1)); // Exclude headers if present in the first row
                    localStorage.setItem(CACHE_KEY, JSON.stringify(result.values.slice(1)));
                    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, []);

    return (
        <div className="leaderboard-container">
            <h1 className="leaderboard-title">ISTE SquareOne '24 Leaderboard</h1>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row[0]}</td> {/* Assuming index + 1 as the rank */}
                            <td>{row[1]}</td> {/* Name */}
                            <td>{row[2]}</td> {/* Roll Number */}
                            <td>{row[3]}</td> {/* Points */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SquareOne24Leaderboard;
