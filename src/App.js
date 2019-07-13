import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import About from './/components/pages/About'

export default class App extends Component {

  state = {
    todos : [
      {
        id: 1,
        title: 'Introduction to Front End Development, React',
        completed: false
      },
      {
        id: 2,
        title: 'Android mobile development, MVVM architecture',
        completed: false
      },
      {
        id: 3,
        title: 'Omollo\'s Balance Park contact us page',
        completed: false
      },
      {
        id: 4,
        title: 'Download some tutorails and fun videos',
        completed: false
      },
      {
        id: 5,
        title: 'Go home and do the rest including washing my clothes',
        completed: false
      }
    ]
  }

  //Toogle compelete function
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(id === todo.id) todo.completed = !todo.completed
        return todo
      })
    })
  }

  //Delete TodoItem
  deleteTodo = id => {
    this.setState(
      {
        todos: this.state.todos.filter(todo => todo.id !== id)
      }
    )
  }

  //Add Todo Item
  addTodo = title => {
    let newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )}/>
          <Route path="/about" component={About} />
          
        </div>
      </Router>
    )
  }
}
