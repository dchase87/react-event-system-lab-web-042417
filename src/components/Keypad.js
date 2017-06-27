import React from 'react'

export default class Keypad extends React.Component {
  print () {
    console.log('Entering password...')
  }

  render () {
    return (
      <form>
        <input type="password" onKeyUp={this.print}></input>
      </form>
    )
  }
}
