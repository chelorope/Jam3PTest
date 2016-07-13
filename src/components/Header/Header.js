import React from 'react';
import bodymovin from 'bodymovin';

class Header extends React.Component {

    componentDidMount() {
      this._anim = bodymovin.loadAnimation({
        container: document.getElementById("bodymovinLogo"), // the dom element
        renderer: 'svg',
        loop: 3,
        autoplay: true,
      //  animationData: logo,  the animation data
        path: 'http://twitserve-63723.onmodulus.net/static/media/logos/Jam3Animation.json'
      });
    }

    render() {
     return (
        <header className='jam3logo' >
          <div id='bodymovinLogo' className='bm'></div>
        </header>
      )
   }

}

export default Header;
