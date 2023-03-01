import React, { Component } from 'react';

import ".././commons/form.css"

import { getCookie } from ".././commons/cookies.js";
import ".././commons/environment.js";

class CreateAccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          emailAdress: "",
          username: "",
          password: "",
          password2: "",
          race: "human"
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
        const username = this.state.username;
        const password = this.state.password;
        const password2 = this.state.password2;
        const race = this.state.race;
        
        if(getCookie('Authentication') == null){
          //alert(window.environment.apiAdress)
          //alert("null")

        }

        if(password != password2){
          alert("Not the same password");
        }else if(emailAdress === "" || password === "" || password2 === "" || window.environment.races.includes(race) == false){
          alert("Please fill in all fields");
        }

        let obj = {
          emailAdress: emailAdress,
          username: username,
          password: password,
        }

        fetch(window.environment.apiAdress + "UserAccount/create", {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            'Content-Type': 'application/json',
            //'Authentication': getCookie('Authentication')
          }
        })
          .then(response => response.json()).then(data => {
            if (data.success) {
              alert("data response");
            } else {
              alert("err");
            }
          });

        window.location.href = "/";
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
                  class='form-control me-2'
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                  Username:
                  <input
                  name="username"            
                  type="text"
                  class='form-control me-2'
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
              <label>
                Pick your race:
                <select value={this.state.value} onChange={this.handleChange}> 
                <option value="human">Human</option>
                <option value="elf">Elf</option>
                <option value="dwarf">Dwarf</option>
                <option value="orc">Orc</option>
                <option value="ent">Ent</option>
              </select>
              </label>
              <br />
              <div class="field padding-bottom--24">
              <input 
                  type="submit" 
                  value="Submit" />
              </div>
            </form>
        );
      }
  }

  export default CreateAccountForm;