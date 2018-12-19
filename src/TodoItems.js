import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

class TodoItems extends Component {
  createTasks (item) {
    return (
      <ListItem role={undefined} dense button key={item.key}>
        <Checkbox onChange={this.props.checkChange.bind(item)} checked={item.checked} tabIndex={-1} disableRipple />
        {item.text}
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => this.props.deleteItem(item.key)}
            aria-label='Delete'
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
  render () {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks.bind(this))
    const { classes } = this.props

    return <List className={classes.root}>{listItems}</List>
  }
}

export default withStyles(styles)(TodoItems)
