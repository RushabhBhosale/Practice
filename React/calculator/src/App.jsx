import React from 'react'
import './App.css'
import Display from './Display'
import ButtonsContainer from './ButtonsContainer'

const App = () => {
  return (
    <div>
      <div id="calculator">
        <Display />
        <ButtonsContainer />
      </div>
    </div>
  )
}

export default App
