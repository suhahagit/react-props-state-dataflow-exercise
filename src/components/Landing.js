import React, { Component } from 'react';

class Landing extends Component {
    
    hottest(){
        let hottest = this.props.store.find(s => s.hottest)
        return hottest
    } 

    render() {
        return <div>Welcome, {this.props.user}, hottest item: {this.hottest()}</div>
    }
}

export default Landing