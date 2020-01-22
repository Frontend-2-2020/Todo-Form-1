import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import CustomInput from "./CustomInput";

class TodoForm extends Component {
  render() {
    console.log(this.props);
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
          Add Todo
        </button>
      </Form>
    );
  }
}

TodoForm.propTypes = {};

export default TodoForm;
