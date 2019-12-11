import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, deleteTodo, toggleCompleted, changeDueDate }) => {
    const todoArr = todos.map(todo => {
        return (
            < Todo
                todos={todo}
                deleteTodo={deleteTodo}
                toggleCompleted={toggleCompleted}
                changeDueDate={changeDueDate}
            />
        )
    });
    return (
        <div>
            {todoArr}
        </div>
    );
}

export default Todos;