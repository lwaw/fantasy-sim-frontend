import React, { Component } from 'react';

import ".././commons/form.css"

import CreateAccountForm from "./CreateAccountForm.js";

class CreateAccount extends Component {
  render() {
    return (
        <div class="div-outer">
          <h2>createAccount</h2>
          <br />
          { <CreateAccountForm/> }
        </div>
    );
  }
}

export default CreateAccount;
