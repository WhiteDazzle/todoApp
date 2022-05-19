import React, {Component} from "react";

import NewTaskForm from "../NewTaskForm";
// import SearchPanel from "../SearchPanel";
// import TasksFilter from "../TasksFilter";
import TaskList from "../TaskList";
import Footer from "../Footer";

import "./app.css";

export default class App extends Component {
    state = {
        todoData: [
            {label: "drink coffee", id: 1, hidden: false, completed: false, date: Date.now()},
            {label: "drink burn", id: 2, hidden: false, completed: false,  date: Date.now()},
            {label: "drink flash", id: 3, hidden: false, completed: false,  date: Date.now()},
            {label: "v flash", id: 4, hidden: false, completed: false,  date: Date.now()},
            {label: "s flash", id: 5, hidden: false, completed: false,  date: Date.now()}
        ],
        filterStatus: 'all',
        maxId: 100,
    }

    createNewTask = (label:string) : void => {
        this.setState(()=>{
            const thisId = this.state.maxId
            const newArr = [
                ...this.state.todoData.slice(0),
                {label:label, id: this.state.maxId, hidden: false, completed: false, date: Date.now()}
            ];
            return {
                todoData: newArr,
                maxId: thisId +1
            }

        })
    }

    deleteTask = (id:number) : void => {
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

    MarkCompleted = (id:number) : void => {
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

    onFilterAll = () : void => {
        this.setState(()=> {
            let newArr: Array<object> = [...this.state.todoData.slice(0)]
            newArr = newArr.map((elem) => {
                return {...elem, hidden: false}
            })
            return {
                filterStatus:'all',
                todoData: newArr
            }
        })

    }

    onFilterDone = () : void => {
        this.setState(()=> {
            let newArr: Array<object> = [...this.state.todoData.slice(0)]
            newArr = newArr.map((elem:any)=> {
                return elem.completed ? {...elem, hidden: true} : {...elem, hidden: false}
            })
            return {
                filterStatus:'done',
                todoData: newArr
            }
        })
    }

    onFilterActive = () : void => {
        this.setState(()=> {
            let newArr: Array<object> = [...this.state.todoData.slice(0)]
            newArr = newArr.map((elem:any)=> {
                return elem.completed ? {...elem, hidden: false} : {...elem, hidden: true}
            })
            return {
                filterStatus:'active',
                todoData: newArr
            }
        })
    }

    ClearCompleted = () : void => {
        this.setState(()=> {
            const oldArr: Array<object> = [...this.state.todoData.slice(0)];

            const newArr = oldArr.filter((elem: any) => {
                return !elem.completed
            })

            return {
                todoData: newArr
            }
        })
    }

    render = () => {
        const {todoData} = this.state;
        const doneCount = todoData.filter((elem) => elem.completed).length;

        return(
            <div className="todoapp">
                <header className="header">
                    <h1 className="todoapp__title">
                        todos
                    </h1>

                    <NewTaskForm onCreateNewTask ={this.createNewTask}/>
                </header>


                <section className="main">
                    <TaskList
                        todos = {todoData}
                        MarkCompleted = {(id:number) => this.MarkCompleted(id)}
                        onDeleted={(id:number)=> this.deleteTask(id)}/>

                    <Footer
                        onFilterAll = {() => this.onFilterAll()}
                        onFilterDone = {() => this.onFilterDone()}
                        onFilterActive = {() => this.onFilterActive()}
                        ClearCompleted = {() => this.ClearCompleted()}
                        filterStatus ={this.state.filterStatus}
                        doneCount={doneCount}/>
                </section>
            </div>
        )
    }
}
