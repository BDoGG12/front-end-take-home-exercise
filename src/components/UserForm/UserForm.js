import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import UserInput from '../Input/UserInput';
import OccupationDropdown from '../Input/OccupationDropdown';
import StateDropdown from '../Input/StateDropdown';


const UserForm = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('');
  const [occupation, setOccupation] = useState('');
  const [validated, setValidated] = useState(false);

  const firstNameLabel = 'First Name';
  const lastNameLabel = 'Last Name';
  const passwordLabel = 'Password'
  const occupationLabel = 'Occupation';
  const stateLabel = 'State';

  const onFirstNameChange = (firstName) => {
    setFirstName(firstName);
  };

  const onLastNameChange = (lastName) => {
    setLastName(lastName);
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



  const handleSubmit = () => {

  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className='name-password'>
      <UserInput label={firstNameLabel} type='text' onInputChange={onFirstNameChange} />
      <UserInput label={lastNameLabel} type='text' onInputChange={onLastNameChange} />
      <UserInput label={passwordLabel} type='password' onInputChange={onPasswordChange} />
      </Row>
      <Row>
        <OccupationDropdown label={occupationLabel} onOccupationClick={onOccupationChange} data={props.data.occupations} />
        <StateDropdown label={stateLabel} onStateClick={onStateChange} data={props.data.states} />
      </Row>
      <Button type='submit'>Submit</Button>
    </Form>
    </div>
  );
};

export default UserForm;