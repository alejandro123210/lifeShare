import React, { Component } from 'react';
import {ControlLabel, DropdownButton, MenuItem} from "react-bootstrap";
import FormControl from "react-bootstrap/es/FormControl";
import HelpBlock from "react-bootstrap/es/HelpBlock";
import FormGroup from "react-bootstrap/es/FormGroup";
import './App.css';

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

    this.state = {
      value: '',
      state: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
          bsSize="sm"
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
            bsSize="sm"
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <DropdownButton
          bsStyle={this.title.toLowerCase()}
          title={this.title}
          key={this.i}
          id={`dropdown-basic-${this.i}`}
        >
          {STATES.map(function(name, index){
            return <MenuItem key={ index } >{name}</MenuItem>;
          })}
        </DropdownButton>
      </form>
    );
  }
}
