import React, { Component } from 'react'
import { Consumer as LocalizationConsumer } from '../contexts/localization'

class UserForm extends Component {
  render() {
    return (
      <div>
        <LocalizationConsumer>
          {(localization) => <span>{localization.username}: </span>}
        </LocalizationConsumer>

        <input value={this.props.value} onChange={this.handleUserChange} />
      </div>
    )
  }

  handleUserChange = (ev) => {
    this.props.onChange(ev.target.value)
  }
}

export default UserForm
