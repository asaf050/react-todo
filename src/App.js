import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'
class App extends Component {
  constructor () {
    super()
    this.inputElement = React.createRef()
    this.state = {
      items: [],
      currentItem: { text: '', key: '',checked:false }
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem: currentItem
    })
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '',checked:false }
      })
      this.inputElement.current.value = ''
    }
  }
  checkChange = (e,checked)=>{
console.log(e,checked)
  }
  render () {
    return (
      <div className='App'>
        <TodoList
          entries={this.state.items}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          addItem={this.addItem}
          checkChange={this.checkChange}
          inputValue={this.state.currentItem.text}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default App
