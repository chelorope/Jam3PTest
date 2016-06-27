import React from 'react';

var ViewList = React.createClass({
  _eachView: function(View, index){
    return (
      <section id={View.displayName.toLowerCase()} className={View.displayName.toLowerCase()} key={index} >
        <View mobile={this.props.mobile} />
      </section>
    )
  },
  render: function(){
    var views = this.props.views.map(this._eachView);
    return (
      <div className='view'>{views}</div>
    )
  }
});

module.exports = ViewList;
