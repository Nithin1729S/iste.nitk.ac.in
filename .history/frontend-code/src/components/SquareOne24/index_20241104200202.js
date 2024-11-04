import React, { useEffect, useState } from 'react';
import './SquareOne24.css';

const SPREADSHEET_ID = '1BxtHIztIrGE3Te73sSrMzCnLm7WH-8_tfXGYgxX91No';
const SHEET_NAME = 'Sheet1';
const API_KEY = 'AIzaSyBzJ8bt0xlC-YrHljCplqhY0Au1qVLvbQs';
const CACHE_KEY = 'leaderboardData';
const CACHE_DURATION = 1 * 60 * 1000; // 15 minutes in milliseconds

const hashData = async (data) => {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
};

const SquareOne24Leaderboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cachedData = localStorage.getItem(CACHE_KEY);
            let parsedCachedData = null;

            // Check if cached data exists and if it's still valid
            if (cachedData) {
                parsedCachedData = JSON.parse(cachedData);
                const { timestamp, values } = parsedCachedData;
                if ((Date.now() - timestamp) < CACHE_DURATION) {
                    setData(values);
                    return; // Return early if cache is valid
                }
            }

            // If cache is not valid or doesn't exist, fetch new data
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
                );
                const result = await response.json();

                const newData = result.values.slice(1); // Exclude headers if present in the first row

                // Hash the new data before storing
                const hashedData = await hashData(JSON.stringify(newData));

                // Store both data and timestamp in localStorage
                localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), values: newData }));

                // You can also store the hash if needed
                localStorage.setItem(`${CACHE_KEY}_hash`, hashedData);

                // Update the state with the new data
                setData(newData);
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
