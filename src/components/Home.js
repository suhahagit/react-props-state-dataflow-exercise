import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.items.map((s, index) => <Item item = {s} key = {index} shouldDiscount={this.props.shouldDiscount}/>)
    }
}

export default Home