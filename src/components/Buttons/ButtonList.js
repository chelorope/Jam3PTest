import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
var Menu = require('react-burger-menu').push;
import Tween from 'gsap';

var ButtonList = React.createClass({

  componentDidMount: function() {
    if (!this.props.mobile){
      var node = {};
      for (var i = this.props.views.length, delay = 1; i >= 2; i--){
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

  _handleStick: function(sticky){

    var buttons = this._buttons;
    var buttonsHeight = buttons.offsetHeight;

    if (sticky){
      Tween.fromTo(buttons, 1.2, {y: -buttonsHeight, position: 'relative'}, {x: 0, y:0, ease: Expo.easeOut, position: 'fixed'});
    }else{
      Tween.fromTo(buttons, 0.7, {position: 'fixed', autoAlpha: 0}, {ease: Power1.easeIn, autoAlpha: 1, position: 'relative'});
    }

  },

  _eachButton: function(item){
      var boundClick = this.props.handleClick.bind(null, item.name);
      if (!this.props.mobile){
        return <Button key={item.id}  name={item.name}
        click={boundClick} ref={"button" + item.id}/>
    }else {
        return (
          <div className="menu-item" onClick={boundClick} key={item.id}>
            <a >{item.name}</a>
          </div>
        )
      }
  },
  render: function(){
    var buttons = this.props.views.slice(1).map(this._eachButton);
    if (!this.props.mobile){
      return <header id='buttons'><div className='navbar' ref={(c) => this._buttons = c}><div >{buttons}</div></div></header>
    }else {
      return (
          <Menu right width={200} isOpen={this.props.open}>
            {buttons}
          </Menu>

      )
    }
  }
});

module.exports = ButtonList;
