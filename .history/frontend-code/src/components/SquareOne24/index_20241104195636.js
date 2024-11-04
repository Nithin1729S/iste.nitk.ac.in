import React, { useEffect, useState } from 'react';
import './SquareOne24.css';
import crypto from 'crypto'; // Import crypto for hash generation

const SPREADSHEET_ID = '1BxtHIztIrGE3Te73sSrMzCnLm7WH-8_tfXGYgxX91No';
const SHEET_NAME = 'Sheet1';
const API_KEY = 'AIzaSyBzJ8bt0xlC-YrHljCplqhY0Au1qVLvbQs';
const CACHE_KEY = 'leaderboardData';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

const SquareOne24Leaderboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cachedData = localStorage.getItem(CACHE_KEY);
            let parsedData;

            // Check if cached data exists
            if (cachedData) {
                try {
                    parsedData = JSON.parse(cachedData);
                    const { values, timestamp, hash } = parsedData;

                    // Validate the hash
                    const calculatedHash = generateHash(values);
                    if (calculatedHash !== hash) {
                        console.warn('Cached data has been tampered with.');
                        return; // Discard tampered cache
                    }

                    // Check if the data is still valid
                    if (Date.now() - timestamp < CACHE_DURATION) {
                        setData(values);
                        return; // Use cached data
                    }
                } catch (error) {
                    console.error('Error parsing cached data:', error);
                }
            }

            // If cache is invalid or does not exist, fetch new data
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
                );
                const result = await response.json();

                // Prepare the data to cache (including the current timestamp)
                const valuesToCache = result.values.slice(1); // Exclude headers if present in the first row
                const dataToCache = {
                    values: valuesToCache,
                    timestamp: Date.now(),
                    hash: generateHash(valuesToCache), // Store hash for integrity check
                };

                // Store the data in the state and cache it in localStorage
                setData(dataToCache.values);
                localStorage.setItem(CACHE_KEY, JSON.stringify(dataToCache));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Function to generate a simple hash for data integrity
    const generateHash = (data) => {
        const jsonString = JSON.stringify(data);
        return crypto.createHash('sha256').update(jsonString).digest('hex');
    };

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
