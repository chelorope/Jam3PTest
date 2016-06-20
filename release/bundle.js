!function e(t,n,r){function o(i,s){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!s&&u)return u(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("react"),a=r(o),i=e("redux-devtools"),s=e("redux-devtools-log-monitor"),u=r(s),l=e("redux-devtools-dock-monitor"),c=r(l),d=(0,i.createDevTools)(a["default"].createElement(c["default"],{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q",defaultIsVisible:!1},a["default"].createElement(u["default"],{theme:"tomorrow",preserveScrollTop:!1})));n["default"]=d},{react:"react","redux-devtools":"redux-devtools","redux-devtools-dock-monitor":"redux-devtools-dock-monitor","redux-devtools-log-monitor":"redux-devtools-log-monitor"}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("react"),a=r(o),i=function(){return a["default"].createElement("div",{className:"footer"},a["default"].createElement("span",null,"Made by Cyro Rodriguez for Jam3. 5/20/2016"))};n["default"]=i},{react:"react"}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("react"),a=r(o),i=e("react-dom"),s=r(i),u=e("react-scroll"),l=r(u),c=e("./views/Image.js"),d=r(c),f=e("./views/Text.js"),p=r(f),m=e("./views/Twitter.js"),h=r(m),y=e("./views/Carrousel.js"),v=r(y),g=e("./views/Share.js"),b=r(g),_=e("./views/ViewList.js"),w=r(_),E=e("./buttons/ButtonList.js"),S=r(E),k=e("./Footer.js"),j=r(k),O=l["default"].animateScroll,x=[{id:1,name:"Image",type:d["default"]},{id:2,name:"Text",type:p["default"]},{id:3,name:"Twitter",type:h["default"]},{id:4,name:"Carousel",type:v["default"]},{id:5,name:"Share",type:b["default"]}],C="",P=a["default"].createClass({displayName:"Main",componentDidMount:function(){var e=this,t=[];window.onscroll=function(){t=x.map(function(e){var t=document.getElementById(e.name);return{top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight}});var n=document.body.scrollTop,r=n+window.innerHeight/2,o=0;do o++,r>t[o].top&&r<t[o].bottom&&C!=x[o].name&&(C=x[o].name,window.history.pushState(x[o].name,x[o].name,"/Jam3Test/"+x[o].name));while(x.length>o+1&&!(r>t[o].top&&r<t[o].bottom));var a=s["default"].findDOMNode(e._views).offsetTop;n>a?e.state.stickyButtons||e.setState({stickyButtons:!0}):e.state.stickyButtons&&e.setState({stickyButtons:!1})}},getInitialState:function(){return{open:!1,stickyButtons:!1}},_handleMBClick:function(e){var t=document.getElementById(e).offsetTop;O.scrollTo(t),window.history.pushState(e,e,"/Jam3Test/"+e),this._mobileCheck()&&this.setState({open:!1})},_mobileCheck:function(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)},render:function(){var e=this;return a["default"].createElement("div",null,a["default"].createElement(S["default"],{handleClick:this._handleMBClick,views:x,mobile:this._mobileCheck(),open:this.state.open,sticky:this.state.stickyButtons}),a["default"].createElement(w["default"],{views:x,mobile:this._mobileCheck(),ref:function(t){return e._views=t}}),a["default"].createElement(j["default"],null))}});n["default"]=P},{"./Footer.js":2,"./buttons/ButtonList.js":8,"./views/Carrousel.js":9,"./views/Image.js":10,"./views/Share.js":11,"./views/Text.js":12,"./views/Twitter.js":13,"./views/ViewList.js":14,react:"react","react-dom":"react-dom","react-scroll":"react-scroll"}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("react"),l=r(u),c=e("react-f1"),d=r(c),f=e("./states"),p=r(f),m=e("./transitions"),h=r(m),y=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={state:"out"},n}return i(t,e),s(t,[{key:"componentWillAppear",value:function(e){var t=this;this.setState({state:"idle",onComplete:function(){t.props.onProgress(1),t.props.onReady(!0),e()}})}},{key:"componentWillEnter",value:function(e){var t=this;this.setState({state:"idle",onComplete:function(){t.props.onProgress(1),t.props.onReady(!0),e()}})}},{key:"componentWillLeave",value:function(e){this.setState({state:"out",onComplete:e})}},{key:"render",value:function(){var e={width:this.props.width,height:this.props.height};return l["default"].createElement(d["default"],{id:"preloader","data-f1":"container",style:e,go:this.state.state,onComplete:this.state.onComplete,states:(0,p["default"])(this.props),transitions:(0,h["default"])(this.props)})}}]),t}(l["default"].Component);y.defaultProps={onProgress:function(){},onReady:function(){},assets:[],width:960,height:570},n["default"]=y},{"./states":5,"./transitions":6,react:"react","react-f1":"react-f1"}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){return{out:{container:{style:{opacity:0}}},idle:{container:{style:{opacity:1}}}}}},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){return[{from:"out",to:"idle",bi:!0,animation:{duration:1}}]}},{}],7:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("react"),l=r(u),c=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return l["default"].createElement("button",{type:"button",className:"mainButton",onClick:this.props.click},this.props.name)}}]),t}(l["default"].Component);n["default"]=c},{react:"react"}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("react"),a=r(o),i=e("react-dom"),s=r(i),u=e("./Button.js"),l=r(u),c=e("gsap"),d=r(c),f=e("react-burger-menu").push,p=a["default"].createClass({displayName:"ButtonList",componentDidMount:function(){if(!this.props.mobile)for(var e={},t=this.props.views.length,n=1;t>=2;t--)e=s["default"].findDOMNode(this.refs["button"+t]),d["default"].from(e,3,{delay:n,x:-400,autoAlpha:0,ease:Expo.easeOut}),n+=.5},componentWillReceiveProps:function(e){this.props.mobile||this._handleStick(e.sticky)},_handleStick:function(e){var t=this._buttons,n=t.offsetHeight;e?d["default"].fromTo(t,1.2,{y:-n,position:"relative"},{x:0,y:0,ease:Expo.easeOut,position:"fixed"}):d["default"].fromTo(t,.7,{position:"fixed",autoAlpha:0},{ease:Power1.easeIn,autoAlpha:1,position:"relative"})},_eachButton:function(e){var t=this.props.handleClick.bind(null,e.name);return this.props.mobile?a["default"].createElement("div",{className:"menu-item",onClick:t,key:e.id},a["default"].createElement("a",null,e.name)):a["default"].createElement(l["default"],{key:e.id,name:e.name,click:t,ref:"button"+e.id})},render:function(){var e=this,t=this.props.views.slice(1).map(this._eachButton);return this.props.mobile?a["default"].createElement(f,{right:!0,width:200,isOpen:this.props.open},t):a["default"].createElement("header",{id:"buttons"},a["default"].createElement("div",{className:"navbar",ref:function(t){return e._buttons=t}},a["default"].createElement("div",null,t)))}});t.exports=p},{"./Button.js":7,gsap:"gsap",react:"react","react-burger-menu":"react-burger-menu","react-dom":"react-dom"}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("react"),a=r(o),i=e("nuka-carousel"),s=r(i),u=a["default"].createClass({displayName:"Carrousel",_eachImage:function(){for(var e=12,t=[],n=1;e>=n;n++)t.push(n);return this._buildImages(t)},_buildImages:function(e){return e.map(function(e){return a["default"].createElement("img",{src:"/assets/images/carousel/"+e+".jpg",key:e})})},_getDecorators:function(){return[{component:a["default"].createClass({displayName:"component",render:function(){return a["default"].createElement("div",{onClick:this.props.previousSlide},a["default"].createElement("img",{className:"arrow",src:"/assets/images/carousel/arrow-left.png"}))}}),position:"CenterLeft"},{component:a["default"].createClass({displayName:"component",render:function(){return a["default"].createElement("div",{onClick:this.props.nextSlide},a["default"].createElement("img",{className:"arrow",src:"/assets/images/carousel/arrow-right.png"}))}}),position:"CenterRight"},{component:a["default"].createClass({displayName:"component",render:function(){var e=this,t=this.getIndexes(e.props.slideCount,e.props.slidesToScroll);return a["default"].createElement("ul",{style:e.getListStyles()},t.map(function(t){return a["default"].createElement("li",{style:e.getListItemStyles(),key:t},a["default"].createElement("button",{style:e.getButtonStyles(e.props.currentSlide===t),onClick:e.props.goToSlide.bind(null,t)},"•"))}))},getIndexes:function(e,t){for(var n=[],r=0;e>r;r+=t)n.push(r);return n},getListStyles:function(){return{position:"relative",margin:0,top:-10,padding:0}},getListItemStyles:function(){return{listStyleType:"none",display:"inline-block"}},getButtonStyles:function(e){return{border:0,background:"transparent",color:"#ffffff",cursor:"pointer",padding:10,outline:0,fontSize:24,opacity:e?1:.5}}}),position:"BottomCenter"}]},render:function(){return this.props.mobile?a["default"].createElement(s["default"],{cellAlign:"center",decorators:this._getDecorators(),wrapAround:!0},this._eachImage()):a["default"].createElement(s["default"],{cellAlign:"center",decorators:this._getDecorators(),wrapAround:!0,slidesToShow:3,slidesToScroll:"auto"},this._eachImage())}});t.exports=u},{"nuka-carousel":"nuka-carousel",react:"react"}],10:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("react"),a=r(o),i=a["default"].createClass({displayName:"Image",render:function(){return a["default"].createElement("div",{className:"jam3logo"})}});t.exports=i},{react:"react"}],11:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("react"),a=r(o),i=a["default"].createClass({displayName:"Share",componentWillMount:function(){window.fbAsyncInit=function(){FB.init({appId:"103745400044770",xfbml:!0,version:"v2.6"})},function(e,t,n){var r,o=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="https://connect.facebook.net/en_US/all.js",o.parentNode.insertBefore(r,o))}(document,"script","facebook-jssdk")},_share:function(){FB.ui({method:"share",href:"http://images.huffingtonpost.com/2015-01-23-121121_BURKARD_101629.JPG"},function(e){})},render:function(){return a["default"].createElement("div",null,a["default"].createElement("img",{className:"fb-logo",src:"/assets/images/logos/faceLogo.png",alt:"facebook logo"}),a["default"].createElement("img",{className:"share-img",src:"http://images.huffingtonpost.com/2015-01-23-121121_BURKARD_101629.JPG",alt:"Kayak Lake Mountains"}),a["default"].createElement("button",{type:"button",onClick:this._share},"Share"))}});t.exports=i},{react:"react"}],12:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("react"),a=r(o),i=a["default"].createClass({displayName:"Text",render:function(){return a["default"].createElement("div",null,a["default"].createElement("h1",null,"Lorem Ipsum"),a["default"].createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."))}});t.exports=i},{react:"react"}],13:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("react"),a=r(o),i=a["default"].createClass({displayName:"Twitter",getInitialState:function(){return{tweets:""}},componentWillMount:function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==e.readyState&&200==e.status&&this._renderTweets(JSON.parse(e.responseText))}.bind(this),e.open("GET","http://twitserve-63723.onmodulus.net/?hash=hola",!0),e.setRequestHeader("Access-Control-Allow-Origin",window.location.href),e.send()},_renderTweets:function(e){var t=e.statuses.map(function(e){return a["default"].createElement("div",{key:e.id,className:"user"},a["default"].createElement("img",{src:e.user.profile_image_url}),a["default"].createElement("h3",null,e.user.name),a["default"].createElement("h4",null,"@",e.user.screen_name))});this.setState({tweets:t})},render:function(){return a["default"].createElement("div",null,a["default"].createElement("img",{className:"tw-logo",src:"/assets/images/logos/twitterLogo.png",alt:"twitter logo"}),a["default"].createElement("div",null,this.state.tweets))}});t.exports=i},{react:"react"}],14:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("react"),a=r(o),i=a["default"].createClass({displayName:"ViewList",_eachView:function(e){return a["default"].createElement("div",{id:e.name,key:e.id}," ",a["default"].createElement(e.type,{mobile:this.props.mobile})," ")},render:function(){var e=this.props.views.map(this._eachView);return a["default"].createElement("div",{className:"view"},e)}});t.exports=i},{react:"react"}],15:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){var e=document.createElement("div");e.id="container",document.body.appendChild(e),(0,i.render)(a["default"].createElement(l.Provider,{store:d["default"]},a["default"].createElement("div",{id:"content"},a["default"].createElement(s.Router,{history:g},a["default"].createElement(s.Route,{path:"/*",component:h["default"]},a["default"].createElement(s.IndexRoute,{component:v["default"]}))),a["default"].createElement(p["default"],null))),e)};var o=e("react"),a=r(o),i=e("react-dom"),s=e("react-router"),u=e("react-router-redux"),l=e("react-redux"),c=e("../store"),d=r(c),f=e("../components/DevTools"),p=r(f),m=e("../sections/App"),h=r(m),y=e("../sections/Landing"),v=r(y),g=(0,u.syncHistoryWithStore)(s.browserHistory,d["default"])},{"../components/DevTools":1,"../sections/App":18,"../sections/Landing":21,"../store":24,react:"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux"}],16:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}e("babel-polyfill");var o=e("./framework"),a=r(o),i=e("domready"),s=r(i);(0,s["default"])(a["default"])},{"./framework":15,"babel-polyfill":"babel-polyfill",domready:"domready"}],17:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.setProgress=n.setReady=void 0;var o=e("./keys"),a=r(o);n.setReady=function(e){return{type:a["default"].SET_READY,ready:e}},n.setProgress=function(e){return{type:a["default"].SET_PROGRESS,progress:e}}},{"./keys":19}],18:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("react"),l=r(u),c=e("react-redux"),d=e("../../components/Preloader"),f=r(d),p=e("./actions"),m=e("react-transition-group-plus"),h=r(m),y=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.onResize=n.onResize.bind(n),n.state={width:960,height:570},n}return i(t,e),s(t,[{key:"getScrollBarWidth",value:function(){var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var r=e.offsetWidth;return n==r&&(r=t.clientWidth),document.body.removeChild(t),n-r}},{key:"onResize",value:function(){this.setState({width:document.width,height:window.innerHeight})}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.onResize),this.onResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"getContent",value:function(){return this.props.ready?l["default"].cloneElement(this.props.children,{key:this.props.section,width:this.state.width,height:this.state.height}):l["default"].createElement(f["default"],{onProgress:this.props.onProgress,onReady:this.props.onReady,assets:this.props.assets,width:this.state.width,height:this.state.height})}},{key:"render",value:function(){return l["default"].createElement(h["default"],{id:"app",component:"div",transitionMode:"out-in"},this.getContent())}}]),t}(l["default"].Component),v=function(e,t){var n=t.location.pathname.split("/")[1]||"landing";return{progress:e.progress,ready:e.ready,assets:e.assets,section:n}},g=function(e){return{onProgress:function(t){e((0,p.setProgress)(t))},onReady:function(t){e((0,p.setReady)(t))}}};y.defaultProps={assets:[],progress:0,ready:!1},n["default"]=(0,c.connect)(v,g)(y)},{"../../components/Preloader":4,"./actions":17,react:"react","react-redux":"react-redux","react-transition-group-plus":"react-transition-group-plus"}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={SET_READY:"SET_READY",SET_PROGRESS:"SET_PROGRESS",SET_ASSETS:"SET_ASSETS"}},{}],20:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.assets=n.ready=n.progress=void 0;var o=e("./keys"),a=r(o),i=(n.progress=function(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],t=arguments[1];switch(t.type){case a["default"].SET_PROGRESS:return t.progress;default:return e}},n.ready=function(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0],t=arguments[1];switch(t.type){case a["default"].SET_READY:return t.ready;default:return e}},[]);n.assets=function(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];switch(t.type){case a["default"].SET_ASSETS:return t.assets;default:return e}}},{"./keys":19}],21:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("react"),l=r(u),c=e("react-f1"),d=r(c),f=e("./states"),p=r(f),m=e("./transitions"),h=r(m),y=e("../../components/Main.js"),v=r(y),g=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={state:"out"},n}return i(t,e),s(t,[{key:"componentWillEnter",value:function(e){this.setState({state:"idle",onComplete:e})}},{key:"componentWillLeave",value:function(e){this.setState({state:"out",onComplete:e})}},{key:"render",value:function(){var e={width:this.props.width,height:this.props.height};return l["default"].createElement(d["default"],{go:this.state.state,onComplete:this.state.onComplete,states:(0,p["default"])(this.props),transitions:(0,h["default"])(this.props),style:e},l["default"].createElement("div",{id:"Landing","data-f1":"container"},l["default"].createElement(v["default"],null)))}}]),t}(l["default"].Component);g.defaultProps={width:960,height:570},n["default"]=g},{"../../components/Main.js":3,"./states":22,"./transitions":23,react:"react","react-f1":"react-f1"}],22:[function(e,t,n){arguments[4][5][0].apply(n,arguments)},{dup:5}],23:[function(e,t,n){arguments[4][6][0].apply(n,arguments)},{dup:6}],24:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=e("redux"),s=e("react-router-redux"),u=e("../sections/App/reducers"),l=o(u),c=e("../components/DevTools"),d=r(c),f=(0,i.combineReducers)(a({},l,{routing:s.routerReducer}));n["default"]=(0,i.createStore)(f,d["default"].instrument())},{"../components/DevTools":1,"../sections/App/reducers":20,"react-router-redux":"react-router-redux",redux:"redux"}]},{},[16]);