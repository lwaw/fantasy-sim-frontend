import React, { Component } from 'react';

import CreateAccountForm from "./CreateAccountForm.js";

class CreateAccount extends Component {
  render() {
    return (
        <div>
          <h2>createAccount</h2>
          { <CreateAccountForm/> }
        </div>
    );
  }
}

export default CreateAccount;
