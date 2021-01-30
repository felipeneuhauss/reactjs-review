import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick () {
    return this.setState({
      date: new Date()
    })
  }

  render() {
    return <div>
      <h5>It is {this.state.date.toLocaleTimeString()}.</h5>
    </div>
  }
}

export default Clock
