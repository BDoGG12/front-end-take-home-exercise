import { Form, InputGroup } from 'react-bootstrap';
import classes from './UserInput.module.css';
import { Fragment } from 'react';

const UserInput = (props) => {

  const onValueChange = (e) => {
    props.onInputChange(e.target.value);
  };

  return (
    <Fragment>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        required
        type={props.type}
        placeholder={props.label}
        onChange={onValueChange}
      />
      {!props.validate ? <Form.Control.Feedback>Looks good!</Form.Control.Feedback> : <Form.Control.Feedback type='invalid'>Please provide a {props.label}</Form.Control.Feedback>}
    </Fragment>
  );
};

export default UserInput;