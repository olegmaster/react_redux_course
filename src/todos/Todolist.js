import React from 'react';
import TodoListItem from './TodoListItem';

const Todolist = ({todos}) => (
    <div className="list-wrapper">
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default Todolist;