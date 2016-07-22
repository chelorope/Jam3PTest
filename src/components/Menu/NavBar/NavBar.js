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
    this._buttonsRef = [];
    this._eachButton = this._eachButton.bind(this);
    this._handleStick = this._handleStick.bind(this);
  }

  componentDidMount() {

    Tween.staggerFrom(this._buttonsRef, 1, {x: -400, autoAlpha: 0, ease: Expo.easeOut, delay: 1.8}, .1);

    Tween.from(this._navbar, 1, {left: -900, ease: Power1.easeIn, delay: 1});


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
          <div className="button-wrapper" ref={(b) => this._buttonsRef.push(b)} key={index} >
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
          ref={(c) => this._navbar = c}
        >
          <div>{buttons}</div>
        </div>
      </nav>)
  }
}

export default NavBar;
