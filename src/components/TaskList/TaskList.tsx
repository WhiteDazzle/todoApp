import React from "react";

import Task from "../Task/Task ";
import "./TaskList.css"

const TaskList = ({todos, onDeleted, MarkCompleted}:
                      {todos:Array<object>, onDeleted:Function,
                      MarkCompleted:Function }) => {

    const todoListItems = todos.map((item:any) =>{
        return (
                <Task {...item}
                    key={item.id}
                onDeleted = {() => onDeleted(item.id)}
                MarkCompleted={() => MarkCompleted(item.id)}/>
        )
    })

    return (
        <ul className="todo-list">
            { todoListItems }
        </ul>)
}

export default TaskList;