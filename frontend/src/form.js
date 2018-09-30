import React, { Component } from 'react';
import {ControlLabel, DropdownButton, MenuItem} from "react-bootstrap";
import FormControl from "react-bootstrap/es/FormControl";
import HelpBlock from "react-bootstrap/es/HelpBlock";
import FormGroup from "react-bootstrap/es/FormGroup";
import './App.css';
import firebase from './firebase.js';
import Button from "react-bootstrap/es/Button";
var STATES = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
  'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]
export class FormComponent extends React.Component {
  title = "State";
  i = 0;
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      city: '',
      usstate: 'AL',
      phone: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref(this.state.usstate).child(this.state.city).child(this.state.phone)
    console.log(itemsRef);
    const item = {
      state: this.state.usstate,
      name: this.state.name,
      city: this.state.city,
      number: this.state.phone
    }
    itemsRef.push(item);
  }
  phoneValidationState() {
    if (this.phonenumber(this.state.phone)) {
      return 'success';
    }
    else {
      return 'error';
    }
    return null;
  }
  phonenumber(input)
  {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(input.match(phoneno)) {
      return true;
    }
    else
    {
      return false;
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }


  render() {
    return (
      <form id="theform" onSubmit={this.handleSubmit}>
        <h1 id="header">LifeShare</h1>
        <div class="formdiv">

          <FormGroup
          controlId="formBasicText"
          bsSize="sm"
        >
          <ControlLabel>Name</ControlLabel>

          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="Enter text"

            name="name"
            onChange={this.handleChange.bind(this)}
            bsSize="sm"
          />
        </FormGroup>
          <FormGroup
            controlId="formBasicText"
            bsSize="sm"
          >
            <ControlLabel>City</ControlLabel>

            <FormControl
              type="text"
              // value={this.state.value}
              placeholder="Enter text"
              name="city"
              onChange={this.handleChange.bind(this)}
              bsSize="sm"
            />
          </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>State</ControlLabel>
          <FormControl componentClass="select" placeholder="select" value={this.state.usstate}
                       onChange={this.handleChange.bind(this)} name="usstate">
            {STATES.map(function(name, index){
              return <option >{name}</option>;
            })}
          </FormControl>
        </FormGroup>

          <FormGroup
            controlId="phoneControl"
            validationState={this.phoneValidationState()}
            bsSize="sm"
          >
            <ControlLabel>Phone</ControlLabel>

            <FormControl
            type="text"
            // value={this.state.value}
            placeholder="Phone Number"
            name="phone"
            onChange={this.handleChange.bind(this)}
            bsSize="sm"
          />

          </FormGroup>
        {/*<p value={this.state.usstate}>{ this.state.usstate }</p>*/}
        {/*<p value={this.state.value}>{ this.state.name }</p>*/}
          {/*<p value={this.state.phone}>{ this.state.phone }</p>*/}
          <Button type="submit">Submit</Button>
        </div>
      </form>
    );
  }
}
