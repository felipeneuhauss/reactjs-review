import React from 'react'
import Form from './Form'

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: []
    }
  }

  fetchList () {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve([
          'All brilliant gurus praise each other, only fraternal lovers have a satori.',
          'Sunt castores manifestum gratis, germanus clabularees.',
          'The phenomenan is more dosi now than hur\'q. brave and pedantically colorful.'
        ])
      }, 1000)
    })
  }

  componentDidMount () {
    this.fetchList().then(response => {
      this.setState({
        todoList: response
      })
    })
  }

  render () {
    const list = this.state.todoList.map((todo, index) => {
      return <li key={index}>{todo}</li>
    })
    return (
      <div>
        <Form />
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default TodoList
