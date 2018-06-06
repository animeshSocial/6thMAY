import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store/store";
import showResults from "./showResults";
import SimpleForm from "./GroupPanel";

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <SimpleForm onSubmit={showResults} />
      <Values form="simple" />
    </div>
  </Provider>, 
document.getElementById('root'));
