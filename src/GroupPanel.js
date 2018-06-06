import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextArea from './components/textArea';
import InputText from './components/inputText';
import props from 'prop-types';
import CreateGroupText from './components/CreateGroupText';
import Submit from './buttons/submit.js';
import { ButtonToolbar, Button } from 'react-bootstrap';
import TabPanelSocial from './components/tabPanelSocial';

const SimpleForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div classNaem="container">
      <form onSubmit={handleSubmit}>
            <CreateGroupText />
              <div className="container"><hr /></div>
                <div className="container">Group Name</div>
                    <InputText />
                  <div className="container">Group Description</div>
                    <TextArea />
                    <br />
                    <TabPanelSocial />
                      <div className="container"><hr /></div>
                      <ButtonToolbar><Submit /></ButtonToolbar>
      </form>
    </div>
  );
};

SimpleForm.propTypes = {
  handleSubmit: props.func.isRequired,
  pristine: props.bool.isRequired,
  submitting: props.string.isRequired
};

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm);
