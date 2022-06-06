import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default class StopWatch extends React.Component {
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
    const isClicked = this.state.isClicked;
    let menuClass = 'hidden';
    let iconClass = 'menu-icon';
    let modal = 'hidden';

    if (isClicked) {
      menuClass = 'menu';
      iconClass = 'menu-icon hidden';
      modal = 'everything';

    } else {
      menuClass = 'hidden';
      iconClass = 'menu-icon';
      modal = 'hidden';
    }

    return <div>

      <FontAwesomeIcon icon={faBars} className={iconClass} onClick={this.handleClick} />
      <div className = {menuClass} onClick ={this.handleClick}>
        <div className = 'first'>Menu</div>
        <div className = 'others'>About</div>
        <div className = 'others'>Get Started</div>
        <div className = 'others'>Sign In</div>
      </div>
      <div className={modal} onClick ={this.handleClick}></div>
    </div>;

  }
}
