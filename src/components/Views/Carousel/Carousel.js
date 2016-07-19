import React from 'react';
import Nuka from 'nuka-carousel';

class Carousel extends React.Component {

  _eachImage(){

    var amountImg = 12;
    var list = [];
    for (let i = 1; i <= amountImg; i++){
        list.push(i);
      };

    return list.map((val) => {
      return <img src={this.props.assets + "images/carousel/" + val + '.jpg'} key={val} />;
    })

  }

  _getDecorators(){
    var assetsPath = this.props.assets;
    return [{
        component: React.createClass({
          render: function() {
            return (
              <div onClick={this.props.previousSlide}>
                <img className="arrow" src={assetsPath + 'images/carousel/arrow-left.png'} />
              </div>
            )
          }
        }),
        position: 'CenterLeft',
      },
      {
          component: React.createClass({
            render: function() {
              return (
                <div onClick={this.props.nextSlide}>
                  <img className="arrow" src={assetsPath + 'images/carousel/arrow-right.png'} />
                </div>
              )
            }
          }),
          position: 'CenterRight',
      },
      {
        component: React.createClass({
          render() {
            var self = this;
            var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
            return (
              <ul style={self.getListStyles()}>
                {
                  indexes.map(function(index) {
                    return (
                      <li style={self.getListItemStyles()} key={index}>
                        <button
                          style={self.getButtonStyles(self.props.currentSlide === index)}
                          onClick={self.props.goToSlide.bind(null, index)}>
                          &bull;
                        </button>
                      </li>
                    )
                  })
                }
              </ul>
            )
          },
          getIndexes(count, inc) {
            var arr = [];
            for (var i = 0; i < count; i += inc) {
              arr.push(i);
            }
            return arr;
          },
          getListStyles() {
            return {
              position: 'relative',
              margin: 0,
              top: -10,
              padding: 0
            }
          },
          getListItemStyles() {
            return {
              listStyleType: 'none',
              display: 'inline-block'
            }
          },
          getButtonStyles(active) {
            return {
              border: 0,
              background: 'transparent',
              color: '#ffffff',
              cursor: 'pointer',
              padding: 10,
              outline: 0,
              fontSize: 24,
              opacity: active ? 1 : 0.5
            }
          }
        }),
      position: 'BottomCenter'
    }
    ];
  }

  render(){
      if (this.props.mobile){
        return (
          <Nuka cellAlign="center" decorators={this._getDecorators()} wrapAround={true} >
            {this._eachImage()}
          </Nuka>
        )
     }else{
       return (
         <Nuka cellAlign="center" decorators={this._getDecorators()} wrapAround={true} slidesToShow={3} slidesToScroll={"auto"}>
           {this._eachImage()}
         </Nuka>
       )
      }
  }
}

export default Carousel;
