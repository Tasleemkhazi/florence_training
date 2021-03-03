import React, { Component } from 'react'

export default class ShowTaskComponent extends Component {
    render() {
        return (
            <li>{this.props.task}</li>
        )
    }
}
