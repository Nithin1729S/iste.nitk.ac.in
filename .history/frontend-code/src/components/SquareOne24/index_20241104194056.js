import React, { useEffect, useState } from 'react';
import './SquareOne24.css';

const SPREADSHEET_ID = '1BxtHIztIrGE3Te73sSrMzCnLm7WH-8_tfXGYgxX91No';
const SHEET_NAME = 'Sheet1';
const API_KEY = 'AIzaSyBzJ8bt0xlC-YrHljCplqhY0Au1qVLvbQs';

const SquareOne24Leaderboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
                );
                const result = await response.json();
                setData(result.values.slice(1)); // Exclude headers if present in the first row
            } catch (error) {
                console.error('Error fetching data:', error);
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
                            <td>{index + 1}</td>
                            <td>{row[0]}</td> {/* Name */}
                            <td>{row[1]}</td> {/* Roll Number */}
                            <td>{row[2]}</td> {/* Points */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SquareOne24Leaderboard;
