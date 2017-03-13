import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
    constructor(props) {
        const list = this.state.cards
        super(props);
        this.state = {
            text: '',
            cards: []
        };
    }


    render(list) {
        return (
            <div>
                <ul>
                {list}
                </ul>
            </div>
        );
    }
}
