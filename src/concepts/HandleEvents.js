import React from 'react'

class HandleEvents extends React.Component {
  handleClick (e) {
    e.preventDefault();
    console.log('button clicked')
  }
  render () {
    return <button onClick={this.handleClick}>Click here events</button>
  }
}

export default HandleEvents
