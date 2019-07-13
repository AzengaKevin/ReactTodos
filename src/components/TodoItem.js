import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class TodoItem extends Component {
    getStyles =  () => {
        return {
            textDecoration: this.props.todo.completed? 'line-through' : 'none',
            backgroundColor: '#f4f4f4',
            padding: '8px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyles()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/>
                    {' '}
                    {title}
                    <button className="badge badge-pill badge-danger float-right" onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

//const itemStyle = {backgroundColor: '#f4f4f4'}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
