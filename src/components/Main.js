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





var Main = React.createClass({

  componentWillMount: function(){
    //this._viewArr = array of views. (Each view is a component)
    this._viewArr = [Text, Twitter, Carousel, Share];

    this._actual = "";
  },

  componentDidMount: function(){

    window.onscroll = () => {
      //Position of each view (better out of onScroll)
      var positions = this._getViewPositions();

      var docTop = document.body.scrollTop;
      var docQuarter = docTop + window.innerHeight / 4;
      //Changing url while scrolling
      this._changeURL(positions, docQuarter);

      //Setting when to animate the navbar
      var viewsTop = ReactDOM.findDOMNode(this._views).getBoundingClientRect().top + window.scrollY;
      //console.log({middle: docQuarter, top: document.body.scrollTop, height: window.innerHeight});
      if (docTop > viewsTop){
        if (!this.state.stickyButtons)
          this.setState({stickyButtons: true});
      }else {
        if (this.state.stickyButtons){
          this.setState({stickyButtons: false});
        }
      }

    }
  },

  _getViewPositions: function(){
    return this._viewArr.map(item => {
      var viewObject = document.getElementById(item.displayName.toLowerCase());
      var viewViewport = viewObject.getBoundingClientRect();
      var scrollY = window.scrollY
      // console.log(item.displayName.toLowerCase());
      // console.log(viewViewport.top + scrollY);
      // console.log(viewViewport.bottom + scrollY);
      return {top: viewViewport.top + scrollY, bottom: viewViewport.bottom + scrollY}
    });
  },

  _changeURL: function(positions, docQuarter){

    for (var i = 0; i < this._viewArr.length; i++){
      if (docQuarter > positions[i].top && docQuarter < positions[i].bottom){
        if (this._actual != this._viewArr[i].displayName.toLowerCase()){
          this._actual = this._viewArr[i].displayName.toLowerCase();
          window.history.pushState(this._actual, this._actual, "/Jam3PTest/"+ this._actual);
        }
      }
    }//while(i < this._viewArr.length && !(docQuarter > positions[i].top && docQuarter < positions[i].bottom))

    if (docQuarter < positions[0].top){
      if (this._actual != ""){
        this._actual = "";
        window.history.pushState("", "", "/Jam3PTest/");
      }
    }
    
  },

  getInitialState: function(){
    return {
      open: false,
      stickyButtons: false
      };
  },

  _mobileCheck: function(){
    return ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  );
  },

  render: function(){
    var menu = this._mobileCheck() ? <HamburgerMenu views={this._viewArr} open={this.state.open} /> : <NavBar views={this._viewArr}  sticky={this.state.stickyButtons} />;
    return (
      <div >
      <Header ref={(r) => this._header = r} />
      {menu}
      <ViewList views={this._viewArr} mobile={this._mobileCheck()}  ref={(r) => this._views = r} />
      <Footer />
      </div>
    )
  }
});

export default Main;
