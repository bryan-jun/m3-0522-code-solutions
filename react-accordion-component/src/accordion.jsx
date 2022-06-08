import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { topicId: '' };
  }

  handleClick(number) {
    const topicId = this.state.topicId;

    if (topicId === '') {
      this.setState({ topicId: number });
    } else if (topicId === number) {
      this.setState({ topicId: '' });
    } else {
      this.setState({ topicId: number });
    }

  }

  render() {

    const topics = this.props.topics.map(topic => {
      return (

        <div key={topic.number}>
          <h1 className='header' onClick={() => this.handleClick(topic.number)}>{topic.title}</h1>
            <div className={`details ${this.state.topicId === topic.number ? '' : 'hidden'}`}>{topic.detail}</div>
          </div>

      );

    });

    return topics;

  }
}
