import {Form, InputGroup} from 'react-bootstrap';


const UserInput = (props) => {

  return (
    <>
    <Form.Label>{props.label}</Form.Label>
    <Form.Control
      required
      type='text'
      placeholder={props.label}
      defaultValue={props.defaultValue}
      />
    </>
  )
}

export default UserInput;