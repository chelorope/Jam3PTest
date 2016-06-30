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
        var nodeName = this.props.views[i].displayName.toLowerCase();
        node = ReactDOM.findDOMNode(this.refs[`button-${nodeName}`]);
        Tween.from(node, .5, {delay: delay, x: -400, autoAlpha: 0, ease: Expo.easeOut})
        delay += 0.5;
      }
    }
  },

  componentWillReceiveProps: function(nextProps){
    if (nextProps.sticky != this.props.sticky){
      this._handleStick(nextProps.sticky);
    }
  },

  getInitialState: function(){
    return {classes: ''}
  },

  _handleStick: function(sticky){
    this.setState( sticky ? {classes: 'sticky'} : {classes: ''} )
  },

  _eachButton: function(item, index){
        var name = item.displayName.toLowerCase();
        return (
          <DirectLink to={name} spy={true} smooth={true} duration={500} offset={-70} key={index} >
            <Button name={name} ref={"button-" + name} actual={this.props.actual} />
          </DirectLink>
        )
  },

  render: function(){
    var buttons = this.props.views.map(this._eachButton);
    return (
      <nav>
        <div className={'navbar ' + this.state.classes} ref={(c) => this._buttons = c}>
          <div >{buttons}</div>
        </div>
      </nav>)
  }
});

module.exports = NavBar;
