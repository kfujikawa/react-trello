import React from 'react';
import ListContainer from './list-container';

class Board extends React.Component {
	constructor(props){
		super(props);
	}
	render () {
		return (
			<div className="board">
				<ListContainer listTitle='list title 1'/>
				<ListContainer listTitle='list title 2'/>
				<ListContainer listTitle='list title 3'/>
			</div>
		)
	}
}

export default Board;