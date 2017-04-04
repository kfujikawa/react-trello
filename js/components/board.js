import React from 'react';
import List from './list';

class Board extends React.Component {
	constructor(props){
		super(props);
	}
	render () {
		return (
			<div className="board">
				<List listTitle='list title 1'/>
				<List listTitle='list title 2'/>
				<List listTitle='list title 3'/>
			</div>
		)
	}
}

export default Board;