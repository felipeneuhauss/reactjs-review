import Clock from "./Clock";
import React from 'react'

class Welcome extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      myAge: props.age,
      isToggleOn: false
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    this.setState((state) => ({
       isToggleOn: !state.isToggleOn,
       myAge: (parseInt(state.myAge) + 1)
    }))
  }
  render () {
    return <div>
      <Clock />
      Component, {this.props.name} - age {this.state.myAge} -
      {this.state.myAge >= 35 && 'Getting old...'}
      <button onClick={this.handleClick}>
        Increase age
      </button>
    </div>
  }
}

export default Welcome
