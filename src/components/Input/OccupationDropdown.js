import {Form} from 'react-bootstrap';
import {useState} from 'react';

const OccupationDropdown = (props) => {

  const onValueChange = (e) => {
    props.onOccupationClick(e.target.value)
  };

  return (
    <>
    <Form.Select aria-label={props.label} onChange={onValueChange}>
        <option value=''>{props.label}</option>
        {props.data?.map(item => (
        <option value={item} key={item}>{item}</option>))}
    </Form.Select>
    </>
  )

};

export default OccupationDropdown;