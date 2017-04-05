import React from 'react';
import Card from './card';

class List extends React.Component {
		constructor(props) {
				super(props);

				this.cards = [];

				this.onAddSubmit = this
						.onAddSubmit
						.bind(this);
		}


		onAddSubmit(event) {
				event.preventDefault();
				this.forceUpdate()
				this.cards.push(this.refs.add.value);
		}

		render() {
				return (
						<div className="list">
								<h1>{this.props.listTitle}</h1>
								<Card text='I am the default card.'/>
								{this.cards.map((card, index) => <Card key={index} text={card}/>)}
								<form onSubmit={this.onAddSubmit}>
										<label>
												New Card:
												<input
														ref="add"
														type="text"
														placeholder="Add a Card!" />
										</label>
										<button type="submit">Submit</button>
								</form>
						</div>
				)
		}
}

export default List;