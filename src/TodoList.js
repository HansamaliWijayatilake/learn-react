import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
	
	constructor() {
		super();
		this.todoItems = [];
	}
	
	
	
	componentWillReceiveProps(nextProp) {
		this.todoItems.push(nextProp.todoItem);
		console.log(this.todoItems.length + " Remove");
	}
	
	componentWillUnmount(){
		console.log("myLog" + " componentWillUnmount");
		
	}
	removeItem(incommingTodo) {
		this.todoItems = this.todoItems.filter(todo => todo != incommingTodo);
		console.log(incommingTodo + " Remove");
		this.forceUpdate();
	}
	
	
	getTodoItemComponents() {
		return this.todoItems
		.map(todoText => <TodoItem key = {todoText + Math.random()} 
							todo={todoText} onRemove={this.removeItem.bind(this)}/>);
	}
	
	componentWillUpdate(){
		
		console.log("myLog" + " componentWillUpdate");
	}
	
	
	
	render(){
		return (
		<div> 
			{this.getTodoItemComponents()}
		</div>
		) ;
	}
	

	
	componentDidUpdate(){
		console.log("myLog" + " componentDidUpdate");
	}
	
}

export default TodoList;