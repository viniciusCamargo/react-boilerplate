import React, { Component } from 'react'
const log = console.log.bind(this)

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidUpdate() {
    log(this.state)
  }
  render() {
    return (
      <div>
        yo
      </div>
    )
  }
}
