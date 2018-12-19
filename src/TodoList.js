import React, { Component } from 'react'
import {Button,Input,TextField} from '@material-ui/core'

import TodoItems from './TodoItems'
class TodoList extends Component {
  componentDidUpdate () {
    //this.props.inputElement.current.focus()
  }
  render () {
    return (
      <div className='todoListMain'>
        <div className='header'>
          <form onSubmit={this.props.addItem}>
            <Input
            value={this.props.inputValue}
              ref={this.props.inputElement}
              onChange={this.props.handleInput}
              placeholder='Task'
            />
            <Button type='submit'> Add Task </Button>
          </form>
        </div>
        <TodoItems checkChange={this.props.checkChange} deleteItem={this.props.deleteItem} entries={this.props.entries} />
      </div>
    )
  }
}

export default TodoList
