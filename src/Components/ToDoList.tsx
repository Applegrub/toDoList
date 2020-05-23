import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
    return(
        <ul>
            {props.toDos.map(toDo => {
                return <ToDoItem toDo = {toDo}/>
            })}
        </ul>
    )
}