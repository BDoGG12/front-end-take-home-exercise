import { Form } from 'react-bootstrap';
import { useState, Fragment } from 'react';

const StateDropdown = (props) => {

  const onValueChange = (e) => {
    props.onStateClick(e.target.value)
  };

  return (
    <Fragment>
      <Form.Label>{props.label}</Form.Label>
      <Form.Select
        aria-label={props.label}
        onChange={onValueChange}
        required
      >
        <option value=''>Select State</option>
        {props.data?.map(item => (
          <option value={item.abbreviation} key={item.abbreviation}>{item.abbreviation}</option>))}
      </Form.Select>
      {props.validate ? <Form.Control.Feedback>Looks good!</Form.Control.Feedback> : <Form.Control.Feedback type='invalid'>Please provide a {props.label}</Form.Control.Feedback>}
    </Fragment>
  )
};

export default StateDropdown;