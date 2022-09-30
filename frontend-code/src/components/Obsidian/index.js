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
                <div className={ styles.links }>
                    <Link className={ styles.button } to='/obsidian/login'>Login</Link>
                    <Link className={ styles.button } to='/obsidian/instructions'>Instructions</Link>
                </div>
            </div>
        )
    }
    componentWillUnmount() {
        this.props.setFooterVal("")
    }
}

export default Obsidian
