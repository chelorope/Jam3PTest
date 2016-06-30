import React from 'react';

class Share extends React.Component {

  componentWillMount(){
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '103745400044770',
        xfbml      : true,
        version    : 'v2.6'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src="https://connect.facebook.net/en_US/all.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
  
  _share() {
    FB.ui(
     {
      method: 'share',
      href: 'http://images.huffingtonpost.com/2015-01-23-121121_BURKARD_101629.JPG'
    }, function(response){});
  }

  render(){
    return (
      <div>
      <img className="fb-logo" src="http://twitserve-63723.onmodulus.net/static/media/logos/Facebook_logo.svg" alt="facebook logo" />
      <img className='share-img' src="http://images.huffingtonpost.com/2015-01-23-121121_BURKARD_101629.JPG"
       alt="Kayak Lake Mountains" />
      <button type="button" onClick={this._share}>Share</button>
      </div>
    )
  }
}

export default Share;
