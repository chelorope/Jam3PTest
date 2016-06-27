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
    this._viewArr = [Text, Twitter, Carousel,Share];

    this._actual = "";
  },

  componentDidMount: function(){
    console.log(this._viewArr[0].displayName)
    window.onscroll = () => {

      //Position of each view (better out of onScroll)
      var positions = this._getViewPositions();

      var docTop = document.body.scrollTop;
      var docQuarter = docTop + window.innerHeight / 2;
      //Changing url while scrolling
      this._changeURL(positions, docQuarter);

      //Setting when to animate the navbar
      var headerTop = ReactDOM.findDOMNode(this._header).offsetTop;
      //console.log({middle: docQuarter, top: document.body.scrollTop, height: window.innerHeight});
      if (docTop > headerTop){
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
      var object = document.getElementById(item.displayName.toLowerCase());
      return {top: object.offsetTop, bottom: object.offsetTop + object.offsetHeight}
    });
  },

  _changeURL: function(positions, docQuarter){

    var i = 0;
    do{
      console.log(" QUAR: " + docQuarter)
      console.log(positions);
      console.log(this._viewArr);
      console.log("ACTUAL: " + this._actual + ` ARR[${i}]: ` + this._viewArr[i].displayName.toLowerCase() );
      if (docQuarter > positions[i].top && docQuarter < positions[i].bottom){
        console.log("entra1");
        if (this._actual != this._viewArr[i].displayName.toLowerCase()){
          console.log("entra2");

          this._actual = this._viewArr[i].displayName.toLowerCase();
          //console.log({name: this._viewArr[i].name, middle: docQuarter, divTop: positions[i].top, divBottom: positions[i].bottom});
          window.history.pushState(this._actual, this._actual, "/Jam3PTest/"+ this._actual);
        }
      }
      i++;
    }while(this._viewArr.length > i && !(docQuarter > positions[i].top && docQuarter < positions[i].bottom))

    // if (docQuarter < positions[0].top){
    //   if (this._actual != ""){
    //     this._actual = "";
    //     window.history.pushState("", "", "/Jam3PTest/");
    //   }
    // }
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
      {menu}
      <Header ref={(r) => this._header = r} />
      <ViewList views={this._viewArr} mobile={this._mobileCheck()}  ref={(r) => this._views = r} />
      <Footer />
      </div>
    )
  }
});

export default Main;
