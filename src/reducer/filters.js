import { ID_FILTER, DATE_FILTER } from '../constants'

const defaultFilterState = {
  ids: [],
  dates: {
    from: null,
    to: null
  }
}

export default (filtersState = defaultFilterState, action) => {
  const { type, payload } = action

  switch (type) {
    case ID_FILTER:
      return {
        ...filtersState,
        ids: payload.values ? payload.values : defaultFilterState.ids
      }

    case DATE_FILTER:
      const range = payload.range || {}
      return {
        ...filtersState,
        dates: {
          from: range.from ? range.from : defaultFilterState.dates.from,
          to: range.to ? range.to : defaultFilterState.dates.to
        }
      }

    default:
      return filtersState
  }
}
