import React, { Component } from 'react';

class Item extends Component {
    render() {
        return <div>item: {this.props.item.item} 
        price: {this.props.shouldDiscount ? this.props.item.price * (1 - this.props.item.discount) : this.props.item.price}     
        </div>
    }
}

export default Item