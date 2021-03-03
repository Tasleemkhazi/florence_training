import React, { Component } from 'react'

class NavigationPanelComponent extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">About Us <span className="sr-only">(current)</span></a>
                    </li>
    
    
                    <li className="nav-item">
                        <a className="nav-link" href="explore.html" tabIndex="-1" aria-disabled="true">Explore</a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default NavigationPanelComponent;