import React from 'react';
import {push as Menu} from 'react-burger-menu';
import {DirectLink} from 'react-scroll';

class HamburgerMenu extends React.Component {

  constructor(props) {
    super(props);
    this._eachButton = this._eachButton.bind(this);
  }

  _eachButton(item, index){
        return (
          <DirectLink to={item.name.toLowerCase()} spy={true} smooth={true} duration={500} key={index} >
            <div className="menu-item" >
              {item.name}
            </div>
          </DirectLink>
        )
  }

  render(){
    var buttons = this.props.views.map(this._eachButton);

    return (
      <div className='hamb-menu'>
        <Menu right width={200} isOpen={this.props.open}>
          {buttons}
        </Menu>
      </div>
    )
  }
}


export default HamburgerMenu;
