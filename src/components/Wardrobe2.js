import Article from "./Article";
import React, { Component } from 'react';

class Wardrobe2 extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ]

    return wardrobe.filter(w => w.color === 'blue')
                    .map(w => <Article info = {w} key = {w.type + w.color}/>)
  }
}

export default Wardrobe2