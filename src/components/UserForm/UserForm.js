import React, { useState, useRef, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import UserInput from '../Input/UserInput';
import OccupationDropdown from '../Input/OccupationDropdown';
import StateDropdown from '../Input/StateDropdown';


const UserForm = (props) => {

  const firstName = useRef();
  const lastName = useRef();
  const password = useRef();
  const [state, setState] = useState('');
  const [occupation, setOccupation] = useState('');
  const [validated, setValidated] = useState(false);

  const firstNameLabel = 'First Name';
  const lastNameLabel = 'Last Name';
  const passwordLabel = 'Password'
  const occupationLabel = 'Occupation';
  const stateLabel = 'State';

  const onStateChange = (e) => {
    setState(e.target.currentValue);
  };

  const onOccupationChange = (e) => {
    setOccupation(e.target.currentValue);
  };



  const handleSubmit = () => {

  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className='name-password'>
      <UserInput label={firstNameLabel} type='text' />
      <UserInput label={lastNameLabel} type='text' />
      <UserInput label={passwordLabel} type='password' />
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