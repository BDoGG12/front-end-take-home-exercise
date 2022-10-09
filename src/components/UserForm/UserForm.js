import React, { useState, Fragment } from "react";
import {Button, Col, Form, InputGroup, Row, Alert} from 'react-bootstrap';
import UserInput from '../Input/UserInput';
import OccupationDropdown from '../Input/OccupationDropdown';
import StateDropdown from '../Input/StateDropdown';
import axios from 'axios';


const UserForm = (props) => {

  // input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('');
  const [occupation, setOccupation] = useState('');

  // input validation
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [lastNameValidated, setLastNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [stateValidated, setStateValidated] = useState(false);
  const [occupationValidated, setOccupationValidated] = useState(false);
  const [validated, setValidated] = useState(false);

  const firstNameLabel = 'First Name';
  const lastNameLabel = 'Last Name';
  const emailLabel = 'Email'
  const passwordLabel = 'Password'
  const occupationLabel = 'Occupation';
  const stateLabel = 'State';

  const onFirstNameChange = (firstName) => {
    setFirstName(firstName);
  };

  const onLastNameChange = (lastName) => {
    setLastName(lastName);
  };

  const onEmailChange = (email) => {
    setEmail(email);
  };

  const onPasswordChange = (password) => {
    setPassword(password);
  };

  const onStateChange = (state) => {
    setState(state);
  };

  const onOccupationChange = (occupation) => {
    setOccupation(occupation);
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (firstName === '' && lastName === '' && email === '' && password === '' && occupation === '' & state === '') {
      setValidated(false);
      setFirstNameValidated(false);
      setLastNameValidated(false);
      setEmailValidated(false);
      setPasswordValidated(false);
      setOccupationValidated(false);
      setStateValidated(false);
      e.preventDefault();
      e.stopPropagation();
      console.log('could not send post request');
    } else {
      console.log('sent post request');
      setValidated(true);
      axios({
        method: 'post',
        url: props.url,
        data: {
          name: `${firstName} ${lastName}`,
          email: email,
          password: password,
          occupation: occupation,
          state: state
        }
      })
    }

  };

  return (
    <Fragment>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='name-password'>
          <UserInput
            label={firstNameLabel}
            type='text'
            onInputChange={onFirstNameChange} />
          <UserInput
            label={lastNameLabel}
            type='text'
            onInputChange={onLastNameChange} />
          <UserInput
            label={emailLabel}
            type='email'
            onInputChange={onEmailChange} />
          <UserInput
            label={passwordLabel}
            type='password'
            onInputChange={onPasswordChange} />
        </Row>
        <Row>
          <OccupationDropdown
            label={occupationLabel}
            onOccupationClick={onOccupationChange}
            data={props.data.occupations} />
          <StateDropdown
            label={stateLabel}
            onStateClick={onStateChange}
            data={props.data.states} />
        </Row>
        <Button
          variant='primary'
          type='submit'>Submit</Button>
      </Form>
    </Fragment>
  );
};

export default UserForm;