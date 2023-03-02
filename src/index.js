import React from 'react'
import ReactDOM from 'react-dom'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import Year from './Year'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './styles.css'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
localizer.formats.yearHeaderFormat = 'YYYY'
// localizer.messages.year = 'Year'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BigCalendar
          localizer={localizer}
          events={[]}
          toolbar={true}
          views={{
            day: true,
            week: true,
            month: true,
            year: Year
          }}
          messages={{ year: 'Year' }}
        />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
