import React from 'react';
import ListContainer from './list-container';

export default class Board extends React.Component {
	render (props) {
		return (
			<div className="board">
				<ListContainer/>
				{this.props.children}
			</div>
		)
	}
}