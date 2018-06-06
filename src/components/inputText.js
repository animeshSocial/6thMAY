import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { 
  FormGroup,
  FormControl
 }from 'react-bootstrap';  
import PropTypes from 'prop-types';

class InputText extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 3) return 'success';
    else if (length > 3) return 'warning';
    else if (length >= 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    /* eslint-disable no-console */
  console.log();
    return (
      <div className="container">
        <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <Field
            name="groupName"
            component="input"
            type="text"
            value={this.state.value}
            placeholder="Enter Group Name"
            className="form-control"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
      </div>
    );
  }
}
export default InputText;
    
