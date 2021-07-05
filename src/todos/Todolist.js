import React from 'react';
import NewTodoForm from "./NewTodoForm";
import TodolistItem from './TodolistItem';
import { removeTodo } from "./actions";
import { connect } from "react-redux";
import "./Todolist.css";

const Todolist = ({todos = [{text: "Hello Oleg"}], onRemovePressed}) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodolistItem todo={todo} onRemovePressed={onRemovePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);