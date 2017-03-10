// A text prop that contains the content of the card

import React from 'react';

class Card extends React.Component {
	constructor(props){
		super(props);
	}
	render () {
		return (
			<div className="card">
				<p>{this.props.text}</p>
			</div>
		)
	}
}

export default Card;