import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';

class App extends Component {
    render() {
        return ( 
		<div>
			<HelloWorld />
		</div>
        );
    }
}

export default App;