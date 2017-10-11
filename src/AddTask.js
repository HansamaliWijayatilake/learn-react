import React from 'react';
import TodoList from './TodoList';

class AddTask extends React.Component {
	
	constructor() {
		super();
		this.state = {};
		this.state.todoTxt = '';
	}
	
	addTodo(){
		var textVal = document.getElementById("todoTxt").value;
		// this.setState only can be used for update the state
		// So it means you cant initialize a state like in 
		// constructor
		// JS object
		// why cant key and value be the same ????
		this.setState({todoTxt: textVal});
	}
	
	
	render(){
		//console.log("Calling render AddTask");
		return (
			<div> 
				<input type = "text" id= "todoTxt"/> 
				<input type = "button" value = "Add" onClick = {this.addTodo.bind(this)}/>
				<TodoList todoItem = {this.state.todoTxt} />
			</div>
		) ;
		
	}
	
	
}

export default AddTask;