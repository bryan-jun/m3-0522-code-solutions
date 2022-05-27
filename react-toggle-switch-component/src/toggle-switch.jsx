import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    const isClicked = this.state.isClicked;

    if (isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  render() {
    let backgroundClass;
    let toggleClass;
    let words;
    const isClicked = this.state.isClicked;

    if (isClicked) {
      backgroundClass = 'bg-clicked';
      toggleClass = 'tg-clicked';
      words = 'ON';
    } else {
      backgroundClass = 'bg';
      toggleClass = 'tg';
      words = 'OFF';

    }

    return (
      <div>
        <div className={backgroundClass}></div>
        <div className={toggleClass} onClick={this.handleClick}></div>
        <div className="text">{words}</div>
      </div>
    );
  }

}
