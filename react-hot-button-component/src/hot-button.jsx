import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { count: 0, isClicked: false };
  }

  handleClick() {
    const count = this.state.count;
    this.setState({ count: count + 1 });
    this.setState({ isClicked: true });
  }

  render() {
    let button;
    const count = this.state.count;
    const isClicked = this.state.isClicked;

    if (isClicked) {

      if (count < 3) {
        button = <button onClick={this.handleClick}>Hot Button</button>;
      } else if (count >= 3 && count < 6) {
        button = <button className="purple" onClick={this.handleClick}>Hot Button</button>;
      } else if (count >= 6 && count < 9) {
        button = <button className="violet" onClick={this.handleClick}>Hot Button</button>;

      } else if (count >= 9 && count < 12) {
        button = <button className="red" onClick={this.handleClick}>Hot Button</button>;

      } else if (count >= 12 && count < 15) {
        button = <button className="orange" onClick={this.handleClick}>Hot Button</button>;
      } else if (count >= 15 && count < 18) {
        button = <button className="yellow" onClick={this.handleClick}>Hot Button</button>;
      } else if (count >= 18) {
        button = <button className="white" onClick={this.handleClick}>Hot Button</button>;
      }
    } else {
      button = <button onClick={this.handleClick}>Hot Button</button>;
    }
    return (
    <div>
    {button}
    </div>
    );
  }
}
