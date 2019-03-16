// ES6 Syntax

import React from 'react';


const person = (props) => {
	return (
		<div>
			<p> I am {props.name} a person and I am {props.age} Year old!</p>
			<p> {props.children} </p>
		</div>

	)
};

export default person;