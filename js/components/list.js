import React from 'react';
import Card from './card';

export default class List extends React.Component {

	render (props) {
		return (
			<div className="list" title={this.props.title}>
				<h3>{this.props.title}</h3>
					<Card text={this.props.text}/>
					<form onSubmit={this.props.onAddSubmit}>
						<label>
							Add A New Card: 
							<input type="text" placeholder="Add a Card!" onChange={this.props.onAddInputChanged}/>
						</label>
						<button type="submit">Submit</button>
					</form>
			</div>
		)
	}
}