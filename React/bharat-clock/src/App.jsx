import React from 'react'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import Map from './components/Map'

const App = () => {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
      <Map />
    </center>
  )
}

export default App
