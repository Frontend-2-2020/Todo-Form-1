import React, { Component } from "react";
import List from "./List";
import Axios from "axios";
import TodoFormContainer from "./TodoFormContainer";

class App extends Component {
  state = {
    todos: [],
    activeTodo: undefined,
    defaultValues: {
      name: "",
      done: false
    }
  };

  componentDidMount() {
    this.getData();
  }

  setActiveTodo = index => {
    this.setState({
      activeTodo: this.state.todos[index]
    });
  };

  getData = () => {
    Axios.get("http://5de80f759578cb001487adea.mockapi.io/Todo").then(
      response => {
        this.setState({ todos: response.data });
      }
    );
  };

  handleSubmit = (values, actions) => {
    if (values.id) {
      // updaten
      Axios.put(
        "http://5de80f759578cb001487adea.mockapi.io/Todo/" + values.id,
        values
      ).then(response => {
        this.getData();
        actions.setSubmitting(false);
        actions.resetForm();
        this.setState({ activeTodo: undefined });
      });
    } else {
      // createn
      Axios.post(
        "http://5de80f759578cb001487adea.mockapi.io/Todo",
        values
      ).then(response => {
        this.getData();
        actions.setSubmitting(false);
        actions.resetForm();
      });
    }
  };

  

  render() {
    const { todos, defaultValues, activeTodo } = this.state;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Todo App
          </a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <List todos={todos} setActiveTodo={this.setActiveTodo} />
            </div>
            <div className="col-md-4">
              <TodoFormContainer 
                defaultValues={defaultValues} 
                handleSubmit={this.handleSubmit}
                activeTodo={activeTodo}
                buttonText="Edit Todo"
              />

              <TodoFormContainer 
                defaultValues={defaultValues} 
                activeTodo={activeTodo}
                handleSubmit={this.handleSubmit}
                buttonText="Create Todo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
