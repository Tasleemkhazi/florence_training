import React, { Component } from 'react'

 class IssueNameComponent extends Component {
    render() {
        return (
            <li className="list-group-item">{this.props.issue} <a href="" className="btn btn-warning">Edit</a> <a href="" class="btn btn-danger">Delete</a></li>
        )
    }
}

export default IssueNameComponent;
