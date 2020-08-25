import React from 'react';
import logo from './logo.svg';
import './App.css';

class StateComponent extends React.Component{

	constructor(){
		super()
		this.state={data:10}
		this.clicking=this.clicking.bind(this)
	}

	clicking(){
		this.setState({
			data: this.state.data + 1
		})
	}
	render(){
        
		return(
           	<div>
				-> data from state object={this.state.data}
				<br/>
				<button onClick={this.clicking}> Click </button>
			</div>
			)
	}
}

export default StateComponent
