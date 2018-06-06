import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { 
  FormGroup,
  FormControl,
  Button,
  ButtonToolbar
 }from 'react-bootstrap';  
 import props from 'prop-types';

  const Submit = props => {
    const { handleSubmit, pristine, submitting } = props;

    return (
      <div className="container">
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" type="submit" disabled={pristine || submitting}>
              Create Group
        </Button>
        <Button bsStyle="primary" bsSize="large" type="button">
               Cancel
        </Button>
        </ButtonToolbar>  
      </div>
    );
  };

  Submit.propTypes = {
    handleSubmit: props.func.isRequired,
    pristine: props.bool.isRequired,
    submitting: props.string.isRequired
  };

export default Submit;
    
