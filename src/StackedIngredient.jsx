import React, { Component } from "react";

export default class BurgerPane extends Component {
  render() {
    return (
      <div className="ingredient">
        {this.props.name}
      </div>
    );
  }
}
