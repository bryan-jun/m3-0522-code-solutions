import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { count: 0 };
  }

  handleClick() {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  }

  render() {
    let btnClass;
    const count = this.state.count;

    if (count < 3) {
      btnClass = '';
    } else if (count >= 3 && count < 6) {
      btnClass = 'purple';
    } else if (count >= 6 && count < 9) {
      btnClass = 'violet';
    } else if (count >= 9 && count < 12) {
      btnClass = 'red';
    } else if (count >= 12 && count < 15) {
      btnClass = 'orange';
    } else if (count >= 15 && count < 18) {
      btnClass = 'yellow';
    } else if (count >= 18) {
      btnClass = 'white';
    }

    return <button className={btnClass} onClick = {this.handleClick}>Hot Button</button>;

  }
}
