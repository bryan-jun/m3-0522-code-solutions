import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { password: '' };
  }

  handleChange(event) {
    this.setState({ password: event.target.value });

  }

  render() {
    const pass = this.state.password;
    let iconName;
    let instruction;
    let color;

    if (pass.length === 0) {
      iconName = faX;
      instruction = 'A password is required';
      color = 'red';
    } else if (pass.length < 8) {
      iconName = faX;
      instruction = 'Your password is too short';
      color = 'red';
    } else {
      iconName = faCheck;
      instruction = '';
      color = 'green';
    }

    return <div>
      <div>Password</div>
      <div>
        <input onChange={this.handleChange} className="pass-word" type='password'></input>
      <FontAwesomeIcon icon={iconName} className={color} />
      </div>
      <div className="red warning">{instruction}</div>
    </div>;
  }

}
