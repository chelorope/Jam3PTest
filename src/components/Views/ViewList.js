import React from 'react';

class ViewList extends React.Component {

  constructor(props) {
    super(props);

    this._eachView = this._eachView.bind(this);

  }

  _eachView(view, index) {
    return (
      <section id={view.name.toLowerCase()} className={view.name.toLowerCase()} key={index} >
        <view.comp mobile={this.props.mobile} />
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
