import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import Mobile from 'mobile-detect';
import NavBar from './menu/navbar/NavBar.js';
import HamburgerMenu from './menu/hamburger/HamburgerMenu.js';
import Header from './header/Header.js';
import Text from './views/text/Text.js';
import Twitter from './views/twitter/Twitter.js';
import Carousel from './views/carousel/Carousel.js';
import Share from './views/share/Share.js';
import ViewList from './views/ViewList.js';
import Footer from './footer/Footer.js';

const imageAssetUrl = process.env.ASSET_PATH;




class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sticky: false,
      actual: "",
      isVisibleView: []
      };
    this._getViewPositions = this._getViewPositions.bind(this);
    this._changeURL = this._changeURL.bind(this);
    this._mobileCheck = this._mobileCheck.bind(this);
  }

  componentWillMount(){
    //this._viewArr = array of views. (Each view is a component)
    this._viewArr = [
                    {name: 'text', comp: Text},
                    {name: 'twitter', comp: Twitter},
                    {name: 'carousel', comp: Carousel},
                    {name: 'share', comp: Share}
                  ];
  }

  componentDidMount(){

    window.addEventListener('scroll', (e) => {
      //Position of each view (better out of onScroll)
      var viewsLimits = this._getViewPositions();
      var docLimits = {
              top: document.body.scrollTop,
              bottom: document.body.scrollTop + window.innerHeight,
              fraction: (f) => (document.body.scrollTop + window.innerHeight / f)
      };
      //Changes the url while scrolling
      this._changeURL(viewsLimits, docLimits);

      //Checks if the navbar should stay in relative or fixed position
      var viewsTop = ReactDOM.findDOMNode(this._views).getBoundingClientRect().top + window.scrollY;
      if (docLimits.top > viewsTop - 35){ console.log('tricky');
        if (!this.state.sticky)
          this.setState({sticky: true});
      }else {
        if (this.state.sticky){
          this.setState({sticky: false});
        }
      }
    });

  }

  _getViewPositions(){
    return this._viewArr.map(item => {
      var viewObject = document.getElementById(item.name);
      var viewViewport = viewObject.getBoundingClientRect();
      var scrollY = window.scrollY;
      return {top: viewViewport.top + scrollY, bottom: viewViewport.bottom + scrollY}
    });
  }

  _changeURL(viewsLimits, docLimits){

    var aux = this.state.isVisibleView.slice();
    for (var i = 0; i < this._viewArr.length; i++){
      if (docLimits.bottom >= viewsLimits[i].top && !aux[i]){
        aux[i] = true;
        this.setState({isVisibleView: aux});
      }else if (docLimits.bottom < viewsLimits[i].top && aux[i]){
        aux[i] = false;
        this.setState({isVisibleView: aux});
      }

      var docThird = docLimits.fraction(3);
      if (docThird > viewsLimits[i].top && docThird < viewsLimits[i].bottom){
        if (this.state.actual != this._viewArr[i].name){
          this.setState({actual: this._viewArr[i].name});
          window.history.pushState({actual: this.state.actual}, "", "/Jam3PTest/" + this.state.actual);
        }
      }
    }while(i < this._viewArr.length && !(docThird > viewsLimits[i].top && docThird < viewsLimits[i].bottom))
    if (docThird < viewsLimits[0].top){
      if (this.state.actual != ""){
        this.setState({actual: ""});
        window.history.pushState({actual: ""}, "", "/Jam3PTest/");
      }
    }
  }

  _mobileCheck(){

    var md = new Mobile(window.navigator.userAgent);
    return (md.mobile() != null)

  }

  render(){
    var isMobile = this._mobileCheck();
    var menu = (isMobile ?
        <HamburgerMenu views={this._viewArr} open={this.state.open} /> :
        <NavBar views={this._viewArr}  sticky={this.state.sticky} actual={this.state.actual} />);

    return (
      <div >
        <Header ref={(r) => this._header = r} assets={imageAssetUrl} />
        {menu}
        <ViewList views={this._viewArr} mobile={isMobile}  ref={(r) => this._views = r} assets={imageAssetUrl} />
        <Footer />
      </div>
    )
  }
}

export default Main;
