import React, { Component } from 'react'
import AuthorImageComponent from './AuthorImageComponent';

function BadgeComponent(){
    return (
        <div className="badge">
            <AuthorImageComponent image={this.props.userInfo.authorImage}/>
            <h2>User Name : {this.props.userInfo.userName}</h2>
            <h3>Email : {this.props.userInfo.email}</h3>
        </div>
    )
}


export default BadgeComponent;