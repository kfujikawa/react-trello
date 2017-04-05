import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(list) {
        return (
            <div className="list-container">
                <List listTitle={this.props.listTitle}/>
            </div>
        );
    }
}
