import React from 'react';
import Card from './card';

function Button(props) {
	return <button onClick={props.onClick}>{props.text}</button>;
}

function ActionLink(){
	function handleClick(e) {
		e.preventDefault();
		console.log('The button was clicked.');
	}
}

class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			clicked: false
		};
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick(){
		this.setState({
			clicked: true
		});
	}

	render () {
		return (
			<div className="list">
				<h1>{this.props.listTitle}</h1>
				<Card text='I am a Card'/>
				<Card text='I am an awesome Card'/>
				<form>
					<label>New Card: </label>
					<input type="text" id="card" name="card-name"></input>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default List;

// When the input's onChange event is fired, it should call an onAddInputChanged callback passed via the List's props.
// When the form is submitted, it should run event.preventDefault(), then call an onAddSubmit callback passed via the List's props.
// Pass an onAddInputChanged and an onAddSubmit callback to your List components.
// In the callbacks, print a logging message to the console to make sure your callbacks are working. You'll implement the actual card adding functionality in the next lesson.