import React from 'react';
import Tween from 'gsap';


class Twitter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tweets: "" };
    this.renderTweets = this.renderTweets.bind(this);
  }

  componentWillMount(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.renderTweets(JSON.parse(xhttp.responseText));
      }
    }.bind(this);
    // xhttp.open("GET", "http://" + window.location.hostname + ":8080/Jam3Test/jsonTwit?hash=hola", true);
    xhttp.open("GET", "http://twitserve-63723.onmodulus.net/?hash=jam3", true);

    xhttp.setRequestHeader("Access-Control-Allow-Origin", window.location.href);
    xhttp.send();
  }

  renderTweets(tweets) {
    var rendTweets = tweets.statuses.map((item, index) => {
      return (
        <div key={index} className="user" >
          <div className='card'>
            <figure className="front">
              <img src={item.user.profile_image_url} ></img>
            </figure>
            <figure className="back">
              <h3>{item.user.name}</h3>
              <h4>@{item.user.screen_name}</h4>
            </figure>
          </div>
        </div>
      )
    });
    this.setState({tweets : rendTweets});
  }

   render(){
    return (
      <div>
        <img className="tw-logo" src={this.props.assets + "images/logos/twitterLogo.png"} alt="twitter logo" />
        <div>
          {this.state.tweets}
        </div>
      </div>
    )
  }
}

export default Twitter;
