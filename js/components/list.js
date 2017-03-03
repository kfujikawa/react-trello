// Create a List component in js/components/list.js that renders a <div> containing three Cards

import React from 'react';
import Card from './card';

export default function List() {
	return (
		<div className="list">
			<Card />
			<Card />
			<Card />
		</div>
	)
}