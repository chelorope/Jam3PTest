import React from 'react';

class Button extends React.Component {
  render(){
    return (
      <button
      type="button"
      className="mainButton"
      >
        {this.props.name}
      </button>
    )
  }
};


export default Button;
