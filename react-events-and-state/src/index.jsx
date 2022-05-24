import React from 'react';
import ReactDOM from 'react-dom/client';

function ClickedButton(props) {
  return (
    <button onClick={props.onClick}>
      Thanks!
    </button>
  );
}

function UnClickedButton(props) {
  return (
    <button onClick={props.onClick}>
      Click Me!
    </button>
  );
}

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <ClickedButton text="Thanks!" />;
    } else {
      button = <UnClickedButton text="Click Me!" onClick={this.handleClick} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }

}

const element = <CustomButton />;

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
