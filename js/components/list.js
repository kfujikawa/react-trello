import React from 'react';
import Card from './card';

class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: ''
		};

		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

onAddInputChanged(event){
	this.setState({value: event.target.value});
}

onAddSubmit(event){
	event.preventDefault();
	console.log("Submit event happened");
}

	render () {
		return (
			<div className="list">
				<h1>{this.props.listTitle}</h1>
				<Card text='I am the default card.'/>
				<Card text={this.state.value}/>
				<form onSubmit={this.onAddSubmit}>
					<label>
						New Card: 
						<input type="text" placeholder="Add a Card!" onChange={this.onAddInputChanged}/>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default List;