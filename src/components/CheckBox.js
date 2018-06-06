import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormGroup,
  Col,
  Row
  } from 'react-bootstrap';

class Checkbox extends Component {

  render() {
    return (
      <div className="container">
         <Row className="show-grid">
              <Col xs={6} md={4}>
              <br />
          <Field
            name="loginIds"
            id=""
            component="input"
            type="checkbox"
          />
              </Col>
              <Col xs={6} md={4}>
              <br />
          <Field
            name="loginIds"
            id=""
            component="input"
            type="checkbox"
          />
              </Col>
              <Col xs={6} md={4}>
              <br />
          <Field
            name="loginIds"
            id=""
            component="input"
            type="checkbox"
          />
              </Col>
          </Row>
        </div>
    );
  }
}

export default Checkbox;
