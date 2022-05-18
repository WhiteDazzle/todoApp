import React, {Component} from "react";

import NewTaskForm from "../NewTaskForm";
// import SearchPanel from "../SearchPanel";
// import TasksFilter from "../TasksFilter";
import TaskList from "../TaskList";
import Footer from "../Footer";



import "./app.css"

export default class App extends Component {
    state = {
        todoData: [
            {label: "drink coffee", id: 1, hidden: false, completed: false},
            {label: "drink burn", id: 2, hidden: false, completed: false},
            {label: "drink flash", id: 3, hidden: false, completed: false},
            {label: "v flash", id: 4, hidden: false, completed: false},
            {label: "s flash", id: 5, hidden: false, completed: false}
        ],
    }

    deleteTask = (id:number) => {
        this.setState(()=>{
            const idx:number = this.state.todoData.findIndex((el) => el.id === id);

            const newArr = [
                ...this.state.todoData.slice(0, idx),
                ...this.state.todoData.slice(idx+1)
            ];
            return {
                todoData: newArr
            }
        })
    }

    MarkCompleted = (id:number) => {
        this.setState(()=>{
            const idx:number = this.state.todoData.findIndex((el) => el.id === id);
            const oldTask = this.state.todoData[idx];
            const newTask = {...oldTask, completed: !oldTask.completed}

            const newArr = [
                ...this.state.todoData.slice(0, idx),
                newTask,
                ...this.state.todoData.slice(idx+1)
            ];
            return {
                todoData: newArr
            }
        })
    }

    taskFilter = (filter:string) => {
        this.setState(()=> {
            const newArr = [...this.state.todoData.slice(0)];

            if (filter === "all") {
                newArr.map((item) => {
                    return {...item, hidden: false}
                })
            }

            if (filter === "active") {
                newArr.map((item) => {
                    return item.completed ? {...item, hidden: true} : {...item, hidden: false}
                })
            }

            if (filter === "done") {
                newArr.map((item) => {
                    return item.completed ? {...item, hidden: false} : {...item, hidden: true}
                })
            }
            return {todoData: newArr}
        })
    }

    render = () => {
        const {todoData} = this.state;
        return(
            <div className="todoapp">
                <header className="header">
                    <h1 className="todoapp__title">
                        todos
                    </h1>

                    <NewTaskForm/>
                </header>


                <section className="main">
                    <TaskList
                        todos = {todoData}
                        MarkCompleted = {(id:number) => this.MarkCompleted(id)}
                        onDeleted={(id:number)=> this.deleteTask(id)}/>
                    <Footer onFilter={()=>this.taskFilter('active')}/>
                </section>
            </div>
        )
    }
}
