import React, { Component } from 'react'
import ShowTaskComponent from './ShowTaskComponent'

 class TaskContainerComponent extends Component {
     constructor(props){
         super(props);
         this.state={
            tasks:['Create React POC','Take React Training','Join Meeting']
         }
     }
    render() {
        return (
            <div>
                <h1>Task Container Component</h1>
                <ul>
                {
                    this.state.tasks.map(function(task){
                        return <ShowTaskComponent task={task}/>
                    })
                }
                </ul>
            </div>
        )
    }
}
export default TaskContainerComponent;