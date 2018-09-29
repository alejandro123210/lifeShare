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
      usstate: ''
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
    this.setState({ [e.target.name] : e.target.value });
  }


  render() {
    return (
      <form id="theform">
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
          bsSize="sm"
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="Enter text"
            name="value"
            onChange={this.handleChange.bind(this)}
            bsSize="sm"
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
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


        <p value={this.state.usstate}>{ this.state.usstate }</p>
        <p value={this.state.value}>{ this.state.value }</p>
      </form>
    );
  }
}
