import React from 'react';
import { toast } from 'react-toastify'

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        toast('Added: ' + this.props.todos.task);
    }

    componentWillUnmount() {
        toast('Deleted: ' + this.props.todos.task);
    }

    render() {
        const { todos, deleteTodo, toggleCompleted, changeDueDate } = this.props;

        return (
            <div key={todos.id}>
                <p>{todos.task} </p>
                <p>
                    <span onClick={() => toggleCompleted(todos.id)}>Completed: {todos.completed ? '✅' : '❌'} | </span>
                    <span onClick={() => changeDueDate(todos.id)}>Due: 🗓{todos.dueDate}</span>
                </p>
                <button onClick={() => deleteTodo(todos.id)}>Delete</button>
            </div>
        );
    }
}

export default Todo;