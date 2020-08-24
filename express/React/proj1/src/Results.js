import React from 'react';
class Results extends React.Component{
render(){
		let total= parseInt(this.props.phy)+parseInt(this.props.mat)+parseInt(this.props.phy)
		let per=total*100/450
		let result
		if (per>=60){
			 result= <p> You have <font color='blue'> Passed </font> the Exam </p>
		}else{
			 result=<p> You have <font color='Red'> Failed </font> the Exam </p>
		}
		return(
		<div> 
			<table border='1'>
					<tr>
						<td> Registration: </td>
						<td> {this.props.regno} </td>
						
					</tr>
					<tr>
						<td> Name:</td>
						<td> {this.props.name}</td>
					</tr>	
					<tr>
						<td> Phyiscs:{this.props.phy}</td>
						<td> Chemistry:{this.props.che}</td>
						<td> Maths:{this.props.mat}</td>
					</tr>	
					<tr>
						<td> Total Marks: {total} </td>
					</tr>
					<tr>
						<td> Percentage: {per} </td>
					</tr>
					<tr>
						<td> {result} </td>
					</tr>
			</table>
		</div>
		)
}
}
export default Results;