import React, { Component } from "react";
import List from "./List";
import Axios from "axios";
import { Formik } from "formik";
import TodoForm from "./TodoForm";

class App extends Component {
  state = {
    todos: [],
    defaultValues: {
      name: "",
      done: false
    }
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    Axios.get("http://5de80f759578cb001487adea.mockapi.io/Todo").then(
      response => {
        this.setState({ todos: response.data });
      }
    );
  };

  handleSubmit = (values, actions) => {
    Axios.post("http://5de80f759578cb001487adea.mockapi.io/Todo", values).then(
      response => {
        this.getData();
        actions.setSubmitting(false);
        actions.resetForm();
      }
    );
  };

  validateForm = values => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  };

  render() {
    const { todos, defaultValues } = this.state;
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
              <List todos={todos} />
            </div>
            <div className="col-md-4">
              <Formik
                onSubmit={this.handleSubmit}
                initialValues={defaultValues}
                validate={this.validateForm}
              >
                {props => <TodoForm {...props} />}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
