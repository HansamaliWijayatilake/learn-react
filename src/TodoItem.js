import React from 'react';

class TodoItem extends React.Component {
	
	
	componentWillUnmount(){
		console.log("myLog" + " componentWillUnmount1");
		
	}
	
	
	removeItem() {		
		this.props.onRemove(this.props.todo);
		
	}
	
	componentWillMount(){
	
		console.log("myLog" + " componentWillMount");
	}
	
	
	
	render(){
		return (
		<div> 
			<h1> {this.props.todo} </h1>
			
			<input type = "button" value = "Remove" onClick = {this.removeItem.bind(this) } />
			
		</div>
		);
	}
	
	componentDidMount(){
	
		console.log("myLog" + " componentDidMount");
	}
	
}

export default TodoItem;
