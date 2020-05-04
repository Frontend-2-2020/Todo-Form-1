import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import CustomInput from "./CustomInput";

class TodoForm extends Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.activeTodo !== this.props.activeTodo &&
      this.props.activeTodo
    ) {
      this.props.setValues(this.props.activeTodo);
    }
  }
  render() {
    console.log(this.props.activeTodo);
    return (
      <Form>
        <CustomInput name="name" label="Title" />

        <div className="form-group">
          <label>
            <Field type="checkbox" name="done" />
            &nbsp;Done
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={this.props.isSubmitting}
        >
          {this.props.buttonText}
        </button>
      </Form>
    );
  }
}

TodoForm.propTypes = {};

export default TodoForm;
