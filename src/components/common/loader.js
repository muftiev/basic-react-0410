import React from 'react'
import { Consumer as LocalizationConsumer } from '../../contexts/localization'

function Loader() {
  return (
    <LocalizationConsumer>
      {(localization) => <h3>{localization.loading}</h3>}
    </LocalizationConsumer>
  )
}

Loader.propTypes = {}

export default Loader
