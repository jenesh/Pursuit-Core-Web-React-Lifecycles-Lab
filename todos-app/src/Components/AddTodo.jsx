import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = this.getBaseState();
        this.baseState = this.state;
    }
    getBaseState = () => {
        return {
            completed: false,
            dueDate: null,
            task: null
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.state.dueDate = this.state.dueDate ? this.state.dueDate : 'None';
        this.props.addTodo(this.state);
        this.setState(this.getBaseState());
        console.dir(e.target);
        e.target[0].value = '';
        e.target[1].value = new Date().toISOString().substring(0, 10);
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Todo: </label>
                <input type="text" name="task" placeholder='Add a todo here..' autoFocus={true} onChange={this.handleChange} />
                <br />
                <label htmlFor="dueDate">Due date: </label>
                <input type="date" name="dueDate" placeholder='MM/DD/YYYY' onChange={this.handleChange} />
                <br />
                {this.state.task ? (
                    <input type="submit" value="Add Todo" disblaed={false} />
                ) : (
                    <input type="submit" value="Add Todo" disabled={true} />
                )}
                < ToastContainer />
            </form>
        );
    }
}

export default AddTodo;