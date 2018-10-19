import React, { PureComponent } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterIds } from '../../ac'

class SelectFilter extends PureComponent {
  handleChange = (selected) => this.props.filterIds(selected)

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  null,
  { filterIds }
)(SelectFilter)
