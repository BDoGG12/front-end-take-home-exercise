import React, { useState, useRef, useEffect } from "react";
import {Button, Col, Form, InputGroup, Row} from 'react-bootstrap';
import UserInput from '../Input/UserInput';
import OccupationDropdown from '../Input/OccupationDropdown';
import StateDropdown from '../Input/StateDropdown';
import axios from 'axios';


const UserForm = () => {

  const url = 'https://frontend-take-home.fetchrewards.com/form';
  const [formData, setFormData] = useState({});
  const firstName = useRef();
  const lastName = useRef();
  const password = useRef();
  const [state, setState] = useState('');
  const [occupation, setOccupation] = useState('');

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

  useEffect(() => {
    axios({
      method: 'get',
      url: url,
    })
    .then((response) => {
      setFormData(response)
    })
    .catch((error) => {
      console.log(error);
    });
  });

  const onEnter = () => {

  };

  return (
    <Form>
      <Row className='name-password'>
      <UserInput label={firstNameLabel} type='text' />
      <UserInput label={lastNameLabel} type='text' />
      <UserInput label={passwordLabel} type='password' />
      </Row>
      <Row>
        <OccupationDropdown label={occupationLabel} data={formData} onOccupationClick={onOccupationChange} />
        <StateDropdown label={stateLabel} data={formData} onStateClick={onStateChange} />
      </Row>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default UserForm;