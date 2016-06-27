import React from 'react';
import {push as Menu} from 'react-burger-menu';
import {DirectLink} from 'react-scroll';

var HamburgerMenu = React.createClass({

  _eachButton: function(item, index){
        return (
          <DirectLink to={item.displayName.toLowerCase()} spy={true} smooth={true} duration={500} key={index} >
            <div className="menu-item" >
              {item.displayName}
            </div>
          </DirectLink>
        )
  },

  render: function(){
    var buttons = this.props.views.map(this._eachButton);

    return (
        <Menu right width={200} isOpen={this.props.open}>
          {buttons}
        </Menu>
    )
  }
});


module.exports = HamburgerMenu;
