import React, { Component } from 'react'

 class SayHello extends Component {
    render() {
        return (
            <div>
                Hello : {this.props.userName}
            </div>
        )
    }
}
export default SayHello
