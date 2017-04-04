import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

/*
You should check that the container has the correct class name, that the correct number of Images are rendered, and that each Image has the correct props set.
*/

import Board from '../js/components/board';
import ListContainer from '../js/components/list-container';
import List from '../js/components/list';
import Card from '../js/components/card';

describe('Board Component', function() {
    it('Renders a Board',  function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<Board />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('board');
    });
});

describe('List Container', function() {
    it('Renders a ul list containing cards',  function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer />);
        const result = renderer.getRenderOutput();

        const listTitle ='list title 1';
        card.props.listTitle.should.contain('list title 1');

        const card = result.props.children[0];
        card.props.text.should.contain('I am the default card');
    });
});