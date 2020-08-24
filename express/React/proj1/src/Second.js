import React from 'react';


class HomeAddress extends React.Component{
	
	render(){
		return(
		<div>
			<h3> H.No: {this.props.hno} </h3>
			<h3> Street: {this.props.street} </h3>
			<h3> City: {this.props.city} </h3>
		</div>
		);
	}
}

export default HomeAddress







