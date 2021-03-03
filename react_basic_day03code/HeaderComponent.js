import React from 'react';
import NavigationComponent from './NavigationComponent';

class HeaderComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            headerMessage:"Issue Tacker Application"
        }
    }
    render(){
        return (
            <div>
            <h1>{this.state.headerMessage}</h1>
            <NavigationComponent/>
            </div>
        )
    }
}
export default HeaderComponent;