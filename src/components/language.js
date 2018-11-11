import React, { Component } from 'react'

export default class Language extends Component {
  render() {
    return (
      <div>
        <div onChange={this.handleChange.bind(this)}>
          <input
            type="radio"
            value="ru"
            name="lang"
            checked={this.props.lang === 'ru'}
          />{' '}
          RU
          <input
            type="radio"
            value="en"
            name="lang"
            checked={this.props.lang === 'en'}
          />{' '}
          EN
        </div>
      </div>
    )
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value)
  }
}
