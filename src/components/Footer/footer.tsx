import React from "react";

import TasksFilter from "../TasksFilter"


const Footer = ({onFilter}:{onFilter:Function}) => {
        return (
            <footer className="footer">
            <span className="todo-count">
                1 items left
            </span>

                <TasksFilter onFilter = {() => onFilter}/>

                <button className="clear-completed">Clear completed</button>
            </footer>
        )
}

export default Footer;