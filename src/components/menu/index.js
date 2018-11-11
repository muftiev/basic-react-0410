import React, { Component } from 'react'
import MenuItem from './menu-item'
import { Consumer as LocalizationConsumer } from '../../contexts/localization'

class Menu extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <LocalizationConsumer>
          {(localization) => <h2>{localization.main_menu}</h2>}
        </LocalizationConsumer>
        <nav>{this.props.children}</nav>
      </div>
    )
  }
}

export { MenuItem }
export default Menu
