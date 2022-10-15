import {Modal, Button} from 'react-bootstrap';

const FeedbackModal = (props) => {

  return (
    <>
    <Modal show={props.show} onHide={props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={props.hide}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default FeedbackModal;