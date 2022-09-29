import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Obsidian extends Component {
    componentDidMount() {
        this.props.setFooterVal("obsidian");
    }
    render() {
        return (
            <>
                <h1>Obsidian Homepage</h1>
                <div>
                    <Link to='/obsidian/login'>Login</Link>
                </div>
                <div>
                    <Link to='/obsidian/instructions'>Instructions</Link>
                </div>
            </>
        )
    }
}

export default Obsidian