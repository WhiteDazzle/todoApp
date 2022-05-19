import React, {Component} from "react";

import TasksFilter from "../TasksFilter"

interface Props {
    onFilterAll: () => void
    onFilterDone: () => void
    onFilterActive: () => void
    ClearCompleted: () => void
    doneCount:number
    filterStatus:string
}

export default class Footer extends Component<Props>  {

    render = () =>{
        return (
            <footer className="footer">
            <span className="todo-count">
                {this.props.doneCount} items left
            </span>

                <TasksFilter
                    onFilterAll = {()=> this.props.onFilterAll()}
                    onFilterDone = {()=> this.props.onFilterDone()}
                    onFilterActive = {()=> this.props.onFilterActive()}
                    filterStatus={this.props.filterStatus}/>

                <button className="clear-completed"
                        onClick={()=> this.props.ClearCompleted()} >Clear completed</button>
            </footer>
        )
    }
}
