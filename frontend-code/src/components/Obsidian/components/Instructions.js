import React, { Component } from 'react'


export class Instructions extends Component {
    componentDidMount() {
        this.props.setFooterVal("obsidian");
    }
    render() {
        return (
            <h1>Instructions</h1>
        )
    }
}

export default Instructions