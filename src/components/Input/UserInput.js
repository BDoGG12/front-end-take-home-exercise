import {Form, InputGroup} from 'react-bootstrap';


const UserInput = (props) => {

  return (
    <>
    <Form.Label>{props.label}</Form.Label>
    <Form.Control
      required
      type={props.type}
      placeholder={props.label}
      />
    </>
  )
}

export default UserInput;