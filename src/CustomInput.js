import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";

class CustomInput extends Component {
  render() {
    const { label, name } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <Field id={name} {...this.props}>
          {({ field, form, meta }) => (
            <input
              type="text"
              {...field}
              placeholder="First Name"
              className={
                "form-control " +
                (meta.touched && meta.error ? "is-invalid" : "")
              }
            />
          )}
        </Field>
        <ErrorMessage
          name={name}
          render={msg => (
            <div className="invalid-feedback" style={{ display: "block" }}>
              {msg}
            </div>
          )}
        />
      </div>
    );
  }
}

CustomInput.propTypes = {};

export default CustomInput;
