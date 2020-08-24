import React from 'react';
import logo from './logo.svg';
import './App.css';
import Address from './Address.js';
import HomeAddress from './Second.js';
import Salary from './SalarySlip.js';
import Result from './Results.js'



function fist() {
  return (
	<div>
		<div>
			<h2> Name=Shafeeq </h2>
			<HomeAddress hno="109" street=" abc" city="Machester"/>
		</div>
		<Salary name=" Peter" salary="2000"/>
		<Salary name=" Smith" salary="1000"/>
		<Result name=" Dave" regno="3" phy="78" che="64" mat="128"/>
		
		
	</div>
    
  );
}

export default fist;
