import React from "react";

import "./NewTaskForm.css"

const NewTaskForm = () => {
    return (
            <input className="todoapp__input-text todoapp__input-text--new-todo"
                   placeholder="What needs to be done?"/>
    )
}

export default NewTaskForm;