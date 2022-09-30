import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './components/Blackbox/css/index.module.css'

export class Obsidian extends Component {
    componentDidMount() {
        this.props.setFooterVal("obsidian");
    }
    render() {
        return (
            <div className={ styles.container }>
                {/* <h1 className={styles.header}>Obsidian</h1> */ }
                <div className={ styles.links }>

                    <Link className={ styles.button } to='/obsidian/login'>Login</Link>


                    <Link className={ styles.button } to='/obsidian/instructions'>Instructions</Link>

                </div>
            </div>
        )
    }
}

export default Obsidian
