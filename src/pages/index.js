import React from "react"

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    kitNumber: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}! Your kit number is ${this.state.kitNumber}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>
          First name 
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        </div>
        <div>
        <label>
          Last name 
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        </div>
        <div>
        <label>
          Kit number
          <input
            type="text"
            name="kitNumber"
            value={this.state.kitNumber}
            onChange={this.handleInputChange}
          />
        </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}