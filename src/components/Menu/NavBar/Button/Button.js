import React from 'react';

class Button extends React.Component {
  render(){
    var newClass = (this.props.actual === this.props.name) ? "big" : "";
    return (
      <button
      type="button"
      className={"button-main" + ' ' + "button-" + this.props.actual + ' ' + newClass}
      >
        {this.props.name}
      </button>
    )
  }
};


export default Button;
