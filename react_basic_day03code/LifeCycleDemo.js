import React, { Component } from 'react'

export default class LifeCycleDemo extends Component {
    constructor(props){
        super(props);
        console.log('------inside constructor--------');
    }
    componentDidMount(){
        console.log('------inside componentDidMount--------');
    }
    render() {
        console.log('------Inside Render---------');
        return (
           <h1>Life Cycle Demo</h1>
        )
    }
}
