import React, { useState } from "react";

export default function ToDoList() {
    let inputStyling = {
        width: "300px",
        height: "3rem",
        textAlign: "center",
        margin: "1rem",
    };
    let btnStyling = {
        marginBottom: "2rem",
        marginTop: "1rem",
    };

    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        } else {
            alert("Task cannot be empty!");
        }
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a task"
                style={inputStyling}
                value={newTodo}
                onChange={updateTodoValue}
            /><br />
            <button style={btnStyling} onClick={addNewTask}>
                Add Task
            </button>
            <hr />
            <h4>To Do List</h4>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
