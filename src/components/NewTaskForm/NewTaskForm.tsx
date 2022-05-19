import React, {Component} from "react";

import "./NewTaskForm.css"


interface  NewTaskFormProps {
    createNewTask: (label:string) => void
}


export default class NewTaskForm extends Component<NewTaskFormProps> {

    submitNewTask = (e:any) => {
        e.preventDefault()
        this.props.createNewTask(e.target.value)
    }

    render = () =>{
        return (
            <form onSubmit={this.submitNewTask}>
            <input className="todoapp__input-text todoapp__input-text--new-todo"
                   placeholder="What needs to be done?"/>
            </form>
        )
    }

}


