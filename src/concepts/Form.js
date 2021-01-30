import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Our sincere manifestation for hypnosis is to reject others truly.',
      bio: 'Honey soup is just not the same without black pepper and hardened crusted chicken breasts.',
      flavor: 'coconut'
    }
  }
  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({ [name]: value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted', this.state)
  }
  render() {
    return <form onSubmit={this.handleSubmit} style={{margin: '20px', padding: '20px'}}>
      <label style={{margin: '20px', padding: '20px', width: '100%', display: 'block'}}>
        Name:
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
      </label>
      <label style={{margin: '20px', padding: '20px', width: '100%', display: 'block'}}>
        Bio
        <textarea name="bio" value={this.state.bio} onChange={this.handleChange} />
      </label>
      <label style={{margin: '20px', padding: '20px', width: '100%', display: 'block'}}>
        Pick your favorite flavor:
        <select name="flavor" value={this.state.flavor} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  }
}

export default Form
