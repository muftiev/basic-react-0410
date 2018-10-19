import React, { PureComponent } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterDates } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends PureComponent {
  handleDayClick = (day) =>
    this.props.filterDates(DateUtils.addDayToRange(day, this.props.filter))

  render() {
    const { from, to } = this.props.filter
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  null,
  { filterDates }
)(DateRange)
