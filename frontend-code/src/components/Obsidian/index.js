import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from './components/Blackbox/css/index.module.css'

export class Obsidian extends Component {
    componentDidMount() {
        this.props.setFooterVal("obsidian");
    }
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Obsidian</h1>
                <div className={styles.links}>
                  <button className={styles.button}>
                      <Link to='/obsidian/login'>Login</Link>
                  </button>
                  <button className={styles.button}>
                      <Link to='/obsidian/instructions'>Instructions</Link>
                  </button>
                </div>
            </div>
        )
    }
}

export default Obsidian
