import React from 'react';

export default class Card extends React.Component {
	render (props) {
		return (
			<div className="card">
				<p>{this.props.text}</p>
			</div>
		)
	}
}