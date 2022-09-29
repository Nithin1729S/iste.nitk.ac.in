import React, { Component } from 'react'
import styles from "./Blackbox/css/Instructions.module.css"

export class Instructions extends Component {
    componentDidMount() {
        this.props.setFooterVal("obsidian");
    }
    render() {
        return (
          <div className={styles.container}>
            <h1 className={styles.header}>Instructions</h1>

            <ol className={styles.list}>
              <li>Hello There!</li>
              <li>General Kenobi!</li>
              <li>You are a bold one...</li>
              <li>So uncivilized...</li>
            </ol>
          </div>
        )
    }
}

export default Instructions
