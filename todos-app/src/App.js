import React from 'react';
import './App.css';
import AddTodos from './Components/AddTodo';
import Todos from './Components/Todos';
import counter from './Components/counter'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}
	addTodo = (todo) => {
		console.log(todo);
		todo.id = counter;
		counter++;
		this.setState({ todos: [...this.state.todos, todo] });
	}
	deleteTodo = (id) => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		})
		this.setState({ todos });
	}
	toggleCompleted = (id) => {
		const todos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				return todo;
			} else {
				return todo;
			}
		});
		this.setState({ todos });
	}
	changeDueDate = (date) => {
		console.log('This feature is under contruction.')
	}
	
	render() {
		return (
			<div className="App">
				<AddTodos addTodo={this.addTodo} />
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} toggleCompleted={this.toggleCompleted} changeDueDate={this.changeDueDate} />
			</div>
		);
	}
}

export default App;
