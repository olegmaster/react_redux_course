import React from 'react';
import './TodolistItem.css'

const TodolistItem = ({ todo }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark As this is As</button>
            <button className="remove-button">Delete</button>
        </div>
    </div>
);

export default TodolistItem;