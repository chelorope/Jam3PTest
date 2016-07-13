import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import NavBar from './menu/navbar/NavBar.js';
import HamburgerMenu from './menu/HamburgerMenu.js';
import Header from './Header.js';
import Text from './views/Text.js';
import Twitter from './views/Twitter.js';
import Carousel from './views/Carousel.js';
import Share from './views/Share.js';
import ViewList from './views/ViewList.js';
import Footer from './Footer.js';




class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sticky: false,
      actual: "",
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
      var positions = this._getViewPositions();
      var docTop = document.body.scrollTop;
      var docQuarter = docTop + window.innerHeight / 3;
      //Changes the url while scrolling
      this._changeURL(positions, docQuarter);

      //Checks if the navbar should stay in relative or fixed position
      var viewsTop = ReactDOM.findDOMNode(this._views).getBoundingClientRect().top + window.scrollY;
      if (docTop > viewsTop){
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
      var viewObject = document.getElementById(item.name.toLowerCase());
      var viewViewport = viewObject.getBoundingClientRect();
      var scrollY = window.scrollY
      return {top: viewViewport.top + scrollY, bottom: viewViewport.bottom + scrollY}
    });
  }

  _changeURL(positions, docQuarter){

    for (var i = 0; i < this._viewArr.length; i++){
      if (docQuarter > positions[i].top && docQuarter < positions[i].bottom){
        if (this.state.actual != this._viewArr[i].name.toLowerCase()){
          this.setState({actual: this._viewArr[i].name.toLowerCase()});
          window.history.pushState(this.state.actual, this.state.actual, "/Jam3PTest/"+ this.state.actual);
        }
      }
    }//while(i < this._viewArr.length && !(docQuarter > positions[i].top && docQuarter < positions[i].bottom))

    if (docQuarter < positions[0].top){
      if (this.state.actual != ""){
        this.setState({actual: ""});
        window.history.pushState("", "", "/Jam3PTest/");
      }
    }

  }

  _mobileCheck(){
    return ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    );
  }

  render(){
    var menu = (this._mobileCheck() ?
    <HamburgerMenu views={this._viewArr} open={this.state.open} /> :
    <NavBar views={this._viewArr}  sticky={this.state.sticky} actual={this.state.actual} />);

    return (
      <div >
      <Header ref={(r) => this._header = r} />
      {menu}
      <ViewList views={this._viewArr} mobile={this._mobileCheck()}  ref={(r) => this._views = r} />
      <Footer />
      </div>
    )
  }
}

export default Main;