import React, { Component } from 'react';
import { Formik } from "formik";
import TodoForm from "./TodoForm";

class TodoFormContainer extends Component {

    validateForm = values => {
        const errors = {};
    
        if (!values.name) {
          errors.name = "Required";
        }
    
        return errors;
      };

    render() {
        return (
            <Formik
                onSubmit={this.props.handleSubmit}
                initialValues={this.props.defaultValues}
                validate={this.validateForm}
              >
                {props => <TodoForm {...props} activeTodo={this.props.activeTodo} buttonText={this.props.buttonText} />}
              </Formik>
        );
    }
}

export default TodoFormContainer;