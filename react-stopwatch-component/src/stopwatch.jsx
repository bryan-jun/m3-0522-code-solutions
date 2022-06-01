import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { isClicked: false, count: 0 };
  }

  reset() {
    const isClicked = this.state.isClicked;

    if (isClicked === false) {
      this.setState({ count: 0 });

    }
  }

  handleClick() {
    const isClicked = this.state.isClicked;

    if (isClicked) {
      this.setState({ isClicked: false });
      clearInterval(this.timerId);

    } else {
      this.setState({ isClicked: true });
      this.timerId = setInterval(
        () => this.tick(), 1000
      );

    }
  }

  tick() {
    const count = this.state.count;
    this.setState({ count: count + 1 });

  }

  render() {
    const isClicked = this.state.isClicked;
    let iconName;
    const count = this.state.count;

    if (isClicked) {
      iconName = faPause;
    } else {
      iconName = faPlay;
    }

    return <div>
      <div className='timer' onClick={this.reset}></div>
      <div className='time'>{count}</div>
      <div className='icon' onClick={this.handleClick} ><FontAwesomeIcon icon={iconName} /></div>
    </div>;

  }
}
