import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button/Button.js';
var Menu = require('react-burger-menu').push;
import Tween from 'gsap';
import {DirectLink} from 'react-scroll';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {stickyClass: '', viewClass: '-bar'};
    this._eachButton = this._eachButton.bind(this);
    this._handleStick = this._handleStick.bind(this);
  }

  componentDidMount() {
      Tween.from(this._buttons, 1, {left: -900, ease: Power1.easeIn, delay: 1});
      var node = {};
      for (var i = this.props.views.length - 1, delay = 1.7; i >= 0; i--){
        var nodeName = this.props.views[i].name;
        node = this.refs[`button-${nodeName}`];
        Tween.from(node, 2, {delay: delay, x: -400, autoAlpha: 0, ease: Expo.easeOut})
        delay += 0.3;
      }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sticky != this.props.sticky) {
      this._handleStick(nextProps.sticky);
    }
    if (nextProps.actual != this.props.actual) {
       this.setState({viewClass: ' ' + nextProps.actual + '-bar'});
    }
  }

  _handleStick(sticky) {
    this.setState( sticky ? {stickyClass: ' sticky '} : {stickyClass: ''} )
  }

  _eachButton(item, index) {
        return (
          <div className="button-wrapper" ref={"button-" + item.name} key={index} >
            <DirectLink to={item.name} spy={true} smooth={true} duration={500} offset={-70}  >
              <Button name={item.name}  actual={this.props.actual} />
            </DirectLink>
          </div>
        )
  }

  render() {
    var buttons = this.props.views.map(this._eachButton);
    return (
      <nav>
        <div
          className={'navbar ' + this.state.stickyClass + this.state.viewClass}
          ref={(c) => this._buttons = c}
        >
          <div>{buttons}</div>
        </div>
      </nav>)
  }
}

export default NavBar;
