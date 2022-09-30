import React, { Component } from 'react'
import styles from "./Blackbox/css/Instructions.module.css"

export class Instructions extends Component {
  componentDidMount() {
    this.props.setFooterVal("obsidian");
  }
  render() {
    return (
      <div className={ styles.top_container }>
        <h1 className={ styles.header }>Instructions</h1>
        <div className={ styles.border }>
          <ol className={ styles.list }>
            <li>Hello There!</li>
            <li>General Kenobi!</li>
            <li>You are a bold one...</li>
            <li>So uncivilized...</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eum iste adipisci ullam cupiditate voluptatibus accusamus magnam, quasi illo vero omnis, suscipit fugiat voluptate nostrum sequi quidem error soluta laudantium.</li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Instructions
