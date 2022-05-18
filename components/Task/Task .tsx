import React, {Component} from "react";
import "./Task .css"


export default class Task extends Component {

    render = () => {
        const {label, onDeleted,
               completed, hidden,
                MarkCompleted}:any = this.props;
        let taskClassName = "";
        if(completed) taskClassName += " completed"
        if(hidden) taskClassName += " hidden"

        return (
            <li className={taskClassName}>
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           onClick = {MarkCompleted}/>
                    <label className="task__label">
                        <span className="description">{label}</span>
                        <span className="created">created 17 seconds ago</span>
                    </label>

                    <button type="button"
                            className="icon icon-edit">
                    </button>

                    <button type="button"
                            className="icon icon-destroy"
                            onClick={onDeleted}>
                    </button>
                </div>

                <input type="text" className="todoapp__input-text"/>

            </li>
        )
    }
}
