import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.circleClick = this.circleClick.bind(this);
    this.state = { imageId: '1' };
  }

  tick() {
    const imageId = this.state.imageId;
    if (imageId === this.props.source.length.toString()) {
      this.setState({ imageId: '1' });
    } else {
      let newId = parseInt(imageId) + 1;
      newId = newId.toString();
      this.setState({ imageId: newId });
    }
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 3000
    );
  }

  circleClick(number) {
    clearInterval(this.timerId);
    this.timerId = setInterval(
      () => this.tick(), 3000
    );
    this.setState({ imageId: number });

  }

  handleLeftClick() {
    const imageId = this.state.imageId;
    clearInterval(this.timerId);
    this.timerId = setInterval(
      () => this.tick(), 3000
    );

    if (imageId === '1') {
      this.setState({ imageId: this.props.source.length.toString() });

    } else {
      let leftId = parseInt(imageId) - 1;
      leftId = leftId.toString();
      this.setState({ imageId: leftId });

    }
  }

  handleRightClick() {
    const imageId = this.state.imageId;
    clearInterval(this.timerId);
    this.timerId = setInterval(
      () => this.tick(), 3000
    );

    if (imageId === this.props.source.length.toString()) {
      this.setState({ imageId: '1' });

    } else {
      let rightId = parseInt(imageId) + 1;
      rightId = rightId.toString();
      this.setState({ imageId: rightId });

    }

  }

  render() {
    const imageCarousel = this.props.source.map(picture => {
      return (
        <div key={picture.number}>
          <img className={`img ${this.state.imageId === picture.number ? '' : 'hidden'}`} src={picture.address} ></img>
        </div>
      );

    });

    const pictureCircles = this.props.source.map(picture => {
      return (
        <div key={picture.number}>
          <div onClick={() => this.circleClick(picture.number)} className={`circle ${this.state.imageId === picture.number ? '' : 'unfilled'}`}></div>
        </div>
      );
    });

    return (
      <div>
        <div className="bar">
      <FontAwesomeIcon icon={faAngleLeft} className="left-angle" onClick={this.handleLeftClick} />
      { imageCarousel }
      < FontAwesomeIcon icon = { faAngleRight } className = 'right-angle' onClick = {this.handleRightClick} />

        </div>
        <div className='bar'>
        {pictureCircles}
        </div>
      </div>
    );

  }
}
