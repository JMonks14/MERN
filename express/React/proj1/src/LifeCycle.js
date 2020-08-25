import React from 'react';

class LifeCycle extends React.Component{
constructor(){
	super()
	this.A=2;
	this.clicking2=this.clicking2.bind(this)
	this.state={
		data:1
	}
}

clicking2(){
	this.setState({
		data:parseInt(this.state.data)+1
	})
}

componentWillMount(){
	this.A++
}
render(){
		//this.A=this.A+1
		return(
		<>
			->A={this.A}<br/>
			->Data={this.state.data}
			<button onClick={this.clicking2}> Click </button>
			
		</>
		)
}
}
export default LifeCycle;