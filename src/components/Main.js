import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import Image from './views/Image.js';
import Text from './views/Text.js';
import Twitter from './views/Twitter.js';
import Carrousel from './views/Carrousel.js';
import Share from './views/Share.js';
import ViewList from './views/ViewList.js';
import ButtonList from './buttons/ButtonList.js';
import Footer from './Footer.js';

var scroll = Scroll.animateScroll;

//viewArr = array of views. (Each view is a component)
var viewArr = [{"id":1,"name":"Image","type":Image},{"id":2,"name":"Text", "type":Text},
{"id":3,"name":"Twitter","type":Twitter},{"id":4,"name":"Carousel","type":Carrousel},
{"id":5,"name":"Share","type":Share}];

var actual = "";

var Main = React.createClass({
  componentDidMount: function(){

    var positions = [];
    window.onscroll = () => {

      //Position of each view (better out of onScroll)
      positions = viewArr.map(item => {
        var object = document.getElementById(item.name);
        return {top: object.offsetTop, bottom: object.offsetTop + object.offsetHeight}
      });
      var docTop = document.body.scrollTop;
      var docMiddle = docTop + window.innerHeight / 2;
      //Changing url while scrolling
      var i = 0;
      do{
        i++;
        if (docMiddle > positions[i].top && docMiddle < positions[i].bottom){
          if (actual != viewArr[i].name){
            actual = viewArr[i].name;
            //console.log({name: viewArr[i].name, middle: docMiddle, divTop: positions[i].top, divBottom: positions[i].bottom});
            window.history.pushState(viewArr[i].name, viewArr[i].name, "/Jam3PTest/"+ viewArr[i].name);
          }
        }
      }while(viewArr.length > i + 1 && !(docMiddle > positions[i].top && docMiddle < positions[i].bottom))

      //Setting when to animate the navbar
      var viewsTop = ReactDOM.findDOMNode(this._views).offsetTop;
      //console.log({middle: docMiddle, top: document.body.scrollTop, height: window.innerHeight});
      if (docTop > viewsTop){
        if (!this.state.stickyButtons)
          this.setState({stickyButtons: true});
        // buttons.setAttribute("style", "position: fixed");
      }else {
        if (this.state.stickyButtons)
          this.setState({stickyButtons: false});
      }

    }
  },
  getInitialState: function(){
    return {
      open: false,
      stickyButtons: false
      };
  },
  _handleMBClick: function(item){
    var dest = document.getElementById(item).offsetTop;
    scroll.scrollTo(dest);
    window.history.pushState(item, item, "/Jam3PTest/" + item);
    if (this._mobileCheck()){
      this.setState({open: false});
    }
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
    return (
      <div >
      <ButtonList handleClick={this._handleMBClick} views={viewArr} mobile={this._mobileCheck()} open={this.state.open} sticky={this.state.stickyButtons} />
      <ViewList views={viewArr} mobile={this._mobileCheck()}  ref={(r) => this._views = r} />
      <Footer />
      </div>
    )
  }
});

export default Main;
