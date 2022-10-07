import {Form} from 'react-bootstrap';
import {useState} from 'react';

const OccupationDropdown = (props) => {

  const [value, setValue] = useState();

  const onValueChange = (e) => {
    setValue(e.target.currentValue);
    props.onOccupationClick(value)
  };

  return (
    <>
    <Form.Select aria-label={props.label}>
        <option value=''>{props.label}</option>
        {props.data?.map(item => (
        <option value={item} key={item}>{item}</option>))}
    </Form.Select>
    </>
  )

};

export default OccupationDropdown;