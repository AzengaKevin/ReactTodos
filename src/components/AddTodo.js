import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    keyTyped = event => {
        this.setState({
            title: event.target.value
        })
    }

    addTodoLower = event => {
        event.preventDefault()
        this.props.addTodo(this.state.title)
        this.state.title = ''
    }


    render() {
        return (
            <form className="form-flex" onSubmit={this.addTodoLower}>
                <input className="form-flex-input" type="text" name="title" placeholder="Todo Tile..." value={this.state.title} onChange={this.keyTyped}/>
                <button type="submit" className="form-flex-btn">Add Item</button>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}
