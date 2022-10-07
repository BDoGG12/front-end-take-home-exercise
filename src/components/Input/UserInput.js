import {Form, InputGroup} from 'react-bootstrap';


const UserInput = (props) => {

  const onValueChange = (e) => {
    props.onInputChange(e.target.value);
  };

  return (
    <>
    <Form.Label>{props.label}</Form.Label>
    <Form.Control
      required
      type={props.type}
      placeholder={props.label}
      onChange={onValueChange}
      />
    </>
  );
};

export default UserInput;