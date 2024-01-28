import React from 'react'

let number = Math.random() * 10

const Random = () => {
  return (
    <div style={{backgroundColor: 'white', color: 'black'}}>Random number is {Math.round(number)}</div>
  )
}

export default Random