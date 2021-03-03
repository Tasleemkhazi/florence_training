import React, { Component } from 'react'
import IssueNameComponent from './IssueNameComponent';

 class IssueListComponent extends Component {
     constructor(props){
         super(props);
         this.state = {
             issues: ["Create React POC","Taking React Training","Working on Project","Attending Meeting"]
         }
     }
    render() {
        const {issues}=this.state;
        return (
            <div className="container">
            <h1 className="display-4 mt-3 text-center">Issue Tracker App Operations</h1>
    
            <div id="issue-form">
                <form className="mt-5">
                    <div className="form-row align-items-center">
                        <div className="col-lg-8">
                            <label for="taskName">Your Task</label>
                            <input type="text" className="form-control" id="taskName"/>
                            <small id="taskHelp" className="form-text text-muted">Add your issue that you want to assign to your team mate</small>
                        </div>
    
    
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
    
           
    
            <ul className="list-group list-group-flush">
               {
                   issues.map(function(issue){
                       return <IssueNameComponent key={issue} issue={issue}/>;
                   })
               }
                
            </ul>
        </div>


           
        )
    }
}

export default IssueListComponent;
