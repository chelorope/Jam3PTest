import React from 'react';

class ViewList extends React.Component {

  constructor(props) {
    super(props);

    this._eachView = this._eachView.bind(this);

  }

  _eachView(View, index) {
    return (
      <section id={View.name.toLowerCase()} className={View.name.toLowerCase()} key={index} >
        <View mobile={this.props.mobile} />
      </section>
    )
  }

  render() {
    var views = this.props.views.map(this._eachView);
    return (
      <div className='view'>{views}</div>
    )
  }
}

export default ViewList;
