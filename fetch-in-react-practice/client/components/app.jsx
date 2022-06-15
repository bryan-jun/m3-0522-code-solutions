import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      });

  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(newTodo => {
        const todoList = this.state.todos.concat(newTodo);
        this.setState({ todos: todoList });
      }
      );

  }

  toggleCompleted(todoId) {
    let todo;

    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todoId === todoId) {
        todo = i;
      }

    }

    const opposite = { isCompleted: !this.state.todos[todo].isCompleted };

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(opposite)
    }

    )
      .then(response => response.json())
      .then(data => {
        const todoList3 = [...this.state.todos];
        todoList3[todo].isCompleted = opposite.isCompleted;
        this.setState({ todos: todoList3 });
      });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
