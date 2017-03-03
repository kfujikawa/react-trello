// Create a Board component in js/components/board.js that renders a <div> containing three Lists

import React from 'react';
import List from './list';

export default function Board() {
	return (
		<div className="board">
			<List />
			<List />
			<List />
		</div>
	)
}