import React from 'react';
import bodymovin from 'bodymovin';

class Header extends React.Component {

    componentDidMount() {
      var logoAnimation = bodymovin.loadAnimation({
        container: this._bm, // the dom element
        renderer: 'svg',
        loop: 3,
        autoplay: true,
        path: this.props.assets + 'json/Jam3Animation.json'//'http://twitserve-63723.onmodulus.net/static/media/logos/Jam3Animation.json'
      });
      this._anim = logoAnimation;

      this._bm.addEventListener('mouseover', () => {console.log('entra');logoAnimation.play()});
      this._bm.addEventListener('mouseout', () => {
          logoAnimation.addEventListener('loopComplete', () => {
              logoAnimation.stop();
          });
      });
    }

    render() {
     return (
        <header className='jam3logo' >
          <div id='bodymovinLogo' className='bm' ref={(r) => this._bm = r} ></div>
        </header>
      )
   }

}

export default Header;
