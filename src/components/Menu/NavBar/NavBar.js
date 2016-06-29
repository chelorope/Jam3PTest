import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
var Menu = require('react-burger-menu').push;
import Tween from 'gsap';
import {DirectLink} from 'react-scroll';

var NavBar = React.createClass({

  componentDidMount: function() {
    if (!this.props.mobile){
      var node = {};
      for (var i = this.props.views.length - 1, delay = 1; i >= 0; i--){
        node = ReactDOM.findDOMNode(this.refs[`button${i}`]);
        Tween.from(node, 3, {delay: delay, x: -400, autoAlpha: 0, ease: Expo.easeOut})
        delay += 0.5;
      }
    }
  },

  componentWillReceiveProps: function(nextProps){
    if (!this.props.mobile)
      this._handleStick(nextProps.sticky);
  },

  getInitialState: function(){
    return {classes: ''}
  },

  _handleStick: function(sticky){

    var buttons = this._buttons;
    var buttonsHeight = buttons.offsetHeight;

    if (sticky){
      this.setState({classes: 'sticky'});
    }else{
      this.setState({classes: ''});
    }

  },

  _eachButton: function(item, index){
        return (
          <DirectLink to={item.displayName.toLowerCase()} spy={true} smooth={true} duration={500} offset={-70} key={index} >
            <Button name={item.displayName.toLowerCase()} ref={"button" + index}/>
          </DirectLink>
        )
  },
  render: function(){
    var buttons = this.props.views.map(this._eachButton);

    return <nav><div className={'navbar ' + this.state.classes} ref={(c) => this._buttons = c}><div >{buttons}</div></div></nav>

  }
});

module.exports = NavBar;
