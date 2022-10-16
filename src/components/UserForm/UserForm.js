import React, { useState, Fragment } from "react";
import { Button, Form, Row } from 'react-bootstrap';
import UserInput from '../Input/UserInput';
import OccupationDropdown from '../Input/OccupationDropdown';
import StateDropdown from '../Input/StateDropdown';
import FeedbackModal from '../../layout/FeedbackModal';
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
  const [show, setShow] = useState(false);

  const firstNameLabel = 'First Name';
  const lastNameLabel = 'Last Name';
  const emailLabel = 'Email'
  const passwordLabel = 'Password'
  const occupationLabel = 'Occupation';
  const stateLabel = 'State';

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true);
  };

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

  const validateInput = () => {
    if (firstName === '' || lastName === '' || email === '' || password === '' || occupation === '' || state === '') {
      setValidated(false);
    } else {
      if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && occupation !== '' && state !== '') {
        setValidated(true);
        setFirstNameValidated(true);
        setLastNameValidated(true);
        setEmailValidated(true);
        setPasswordValidated(true);
        setOccupationValidated(true);
        setStateValidated(true);
      }
    }
  };


  const handleSubmit = (e) => {
    console.log(e.currentTarget.value);
    e.preventDefault();
    e.stopPropagation();
    validateInput();
    if (validated === true) {
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
      });
    }
  };

  return (
    <Fragment>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='name-password'>
          <UserInput
            label={firstNameLabel}
            type='text'
            onInputChange={onFirstNameChange}
            validate={firstNameValidated} />
          <UserInput
            label={lastNameLabel}
            type='text'
            onInputChange={onLastNameChange}
            validate={lastNameValidated} />
          <UserInput
            label={emailLabel}
            type='email'
            onInputChange={onEmailChange}
            validate={emailValidated} />
          <UserInput
            label={passwordLabel}
            type='password'
            onInputChange={onPasswordChange}
            validate={passwordValidated} />
        </Row>
        <Row>
          <OccupationDropdown
            label={occupationLabel}
            onOccupationClick={onOccupationChange}
            data={props.data.occupations}
            validate={occupationValidated} />
          <StateDropdown
            label={stateLabel}
            onStateClick={onStateChange}
            data={props.data.states}
            validate={stateValidated} />
        </Row>
        <Button
          variant='primary'
          type='submit'
          onClick={handleShow}>Submit</Button>
        {validated ? <FeedbackModal show={show} hide={handleClose} title='Sign up Success!' body='Congratulations! Earn rewards by shopping off of the brands you love!' /> : <FeedbackModal show={show} hide={handleClose} title='Sorry, Sign up Unsuccessful.' body='You must complete all fields!' />}
      </Form>
    </Fragment>
  );
};

export default UserForm;