import React from 'react';

class Button extends React.Component {
  render(){
    return (
      <button
      type="button"
      className="mainButton"
      onClick={this.props.click}
      >
        {this.props.name}
      </button>
    )
  }
};


export default Button;
