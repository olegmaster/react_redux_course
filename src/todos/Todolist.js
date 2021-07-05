import React from 'react';
import NewTodoForm from "./NewTodoForm";
import TodolistItem from './TodolistItem';
import "./Todolist.css";

const Todolist = ({todos = [{text: "Hello Oleg"}]}) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodolistItem todo={todo} />)}
    </div>
);

export default Todolist;