import React, {Component} from "react";

import "./TasksFilter.css"



export default class TasksFilter extends Component {

onFilter = () => console.log('click');

render = () => {
        const onFilter = this.onFilter
        return (
            <ul className="filters">
                <li>
                    <button type="button"
                            className="selected"
                            onClick={this.onFilter}>All</button>
                </li>
                <li>
                    <button type="button"
                            onClick={() => console.log(this.props)}>Active</button>
                </li>
                <li>
                    <button type="button">Done</button>
                </li>
            </ul>
        )
    }
}