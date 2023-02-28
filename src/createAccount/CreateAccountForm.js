import React, { Component } from 'react';

import { getCookie } from ".././commons/cookies.js";

class CreateAccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          emailAdress: "",
          password: "",
          password2: ""
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
          [name]: value    });
      }

      handleSubmit(event) {
        const emailAdress = this.state.emailAdress;
        const password = this.state.password;
        const password2 = this.state.password2;
        
        console.log(this.state.emailAdress);
        console.log(this.state.password);
        
        if(getCookie('Authentication') == null){
            alert("null")

        }

        if(password != password2){
            alert("Not the same password");
        }
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Email Adress:
              <input
                name="emailAdress"            
                type="text"
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Password:
              <input
                name="password"            
                type="password"
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Password check:
              <input
                name="password2"            
                type="password"
                onChange={this.handleInputChange} />
            </label>
            <br />
            <br />
            <input 
                type="submit" 
                value="Submit" />
          </form>
        );
      }
  }

  export default CreateAccountForm;