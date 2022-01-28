import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import styles from '../css/instructions.module.css'

const Instructions = ({ setFooterVal }) => {
    useEffect(() => {
        setFooterVal("obscura")
    })
    return (
        <div className={`${styles.instructions} center`}>
            <h1>Instructions</h1>
            <ul>
                    <li>
                        Instruction 1
                    </li>
                    <li>
                        Instruction 2
                    </li>
                    <li>
                        Instruction 3
                    </li>
                    <li>
                        The leaderboard
                        <Link
                            to="/leaderboard"
                            target="_blank"
                            rel="noreferrer"
                        >
                            (Click here to view)
                        </Link>
                        displays the current score, as well as your current year and your rank
                    </li>
                </ul>
        </div>
                
    );
};

export default Instructions;
