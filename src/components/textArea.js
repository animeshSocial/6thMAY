import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TextArea extends Component {
  
  render() {
    return (
      <div className="container">
        <Field
            name="groupDescription"
            component="textArea"
            id="exampleTextarea" 
            placeholder="Write your Group Description here !!!"
            className="form-control"
            rows="10"
        />
      </div>
    );
  }
}

export default TextArea;
