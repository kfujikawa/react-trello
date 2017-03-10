import React from 'react';
import Card from './card';

class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({value: event.target.value});
	}

	handleSubmit(event){
		console.log("Submit event happened");
		event.preventDefault();
	}

	renderCard(event){
		return(
			<Card text={this.state.value} />
		)
	}

	render () {
		return (
			<div className="list">
				<h1>{this.props.listTitle}</h1>
				<Card text='I am a card 1'/>
				<Card text='I am a card 2'/>
				<Card submit={this.handleSubmit} change={this.onAddInputChanged}/>
				<form onSubmit={this.handleSubmit}>
					<label>
						New Card: 
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default List;