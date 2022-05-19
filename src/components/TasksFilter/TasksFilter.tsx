import React, {Component} from "react";

import "./TasksFilter.css"

interface Props {
    onFilterAll: () => void
    onFilterDone: () => void
    onFilterActive: () => void
    filterStatus:string
}

export default class TasksFilter extends Component<Props> {


render = () => {
    let ButtonAllClassName = "";
    let ButtonActiveClassName = "";
    let ButtonDoneClassName = "";

    if(this.props.filterStatus === 'all') ButtonAllClassName += 'selected';
    if(this.props.filterStatus === 'active') ButtonDoneClassName += 'selected';
    if(this.props.filterStatus === 'done') ButtonActiveClassName += 'selected';

        return (
            <ul className="filters">
                <li>
                    <button type="button" className={ButtonAllClassName}
                            onClick={()=> this.props.onFilterAll()}>All</button>
                </li>
                <li>
                    <button type="button" className={ButtonActiveClassName}
                            onClick={()=> this.props.onFilterDone()}>Active</button>
                </li>
                <li>
                    <button type="button" className={ButtonDoneClassName}
                            onClick={()=> this.props.onFilterActive()}>Done</button>
                </li>
            </ul>
        )
    }
}