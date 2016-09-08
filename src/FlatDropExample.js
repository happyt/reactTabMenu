import React, { Component } from 'react'
import Dropdown1 from './Dropdown1.js'

const options = [
  'one', 'two', 'three'
]

class FlatDropExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: options[2]
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You selected ', option.label)
    this.setState({selected: option})
  }

  render () {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <section>
        <h4>Flat Array Example </h4>
        <Dropdown1 options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" baseClassName="Dropdown" />
        <div className='result'>
          You selected
          <strong> {placeHolderValue} </strong>
        </div>
      </section>
    )
  }
}

export default FlatDropExample