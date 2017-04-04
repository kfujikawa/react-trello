import React from 'react';
import List from './list';
import Card from './card';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        // const list = this.state.cards
        this.state = {
            text: 'Default Card 1',
            title: ["Title 1"]
        };

        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

onAddInputChanged(event){
    this.setState({text: event.target.value});
}

onAddSubmit(event){
    event.preventDefault();
    console.log("Submit event happened");
}


    render(cards) {
        return (
            <div>
                <ul>
                    <List title={this.state.title}/>
                </ul>
            </div>
        );
    }
}