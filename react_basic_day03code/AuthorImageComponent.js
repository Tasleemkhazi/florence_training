import React, { Component } from 'react'

export default class AuthorImageComponent extends Component {
    render() {
        return (
            <img src={this.props.image} alt="Author Image"/>
        )
    }
}
