import { Form } from 'react-bootstrap';
import { useState } from 'react';

const StateDropdown = (props) => {

  const [value, setValue] = useState('');

  const onValueChange = (e) => {
    setValue(e.target.value);
    props.onStateClick(value)
  };

  return (
    <>
      <Form.Select aria-label={props.label} onChange={onValueChange}>
        <option value=''>{props.label}</option>
        {props.data?.map(item => (
        <option value={item.abbreviation} key={item.abbreviation}>{item.abbreviation}</option>))}
      </Form.Select>
    </>
  )
};

export default StateDropdown;