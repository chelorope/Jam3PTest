import React from 'react';

class Button extends React.Component {
  render(){
    var newClass = (this.props.actual === this.props.name) ? " big" : "";
    return (
      <button
      type="button"
      className={"mainButton" + newClass}
      >
        {this.props.name}
      </button>
    )
  }
};


export default Button;
