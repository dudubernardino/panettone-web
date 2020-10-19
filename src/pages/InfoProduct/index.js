import React, { Component } from 'react'

export default class InfoProduct extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h2>{this.props.match.params.id}</h2>
      </div>
    )
  }
}
