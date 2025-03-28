import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const states = ['do', 'doing', 'done'];

const ModalComponent = (props) => {

  const [taskName, setTaskName] = useState(props.task.name);
  const [taskDescription, setTaskDescription] = useState(props.task.description);
  const [dateAdded, setDateAdded] = useState(props.task.added);
  const [dateUpdated, setDateUpdated] = useState(props.task.updated);
  const [taskStatus, setTaskStatus] = useState(props.task.status);
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getMenu = () => {
    if (props.title === 'Edit') {
      return (
        <Form.Group className="mb-3" controlId="taskStatus">
          <Form.Label>Status</Form.Label>
          <Form.Select onChange={(e) => setTaskStatus(e.target.value)}>
            {states.map((state) => (<option key={state} value={state}>{state}</option>))}
          </Form.Select>
        </Form.Group>
      )
    }
  }


  return (
    <div >
      <Button variant="primary" onClick={handleShow} className='rounded-pill' size={props.size}>
        {props.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => {
            setDateAdded(new Date().toISOString());
            setDateUpdated(new Date().toISOString());

            if (props.title === 'Add') {
              props.onAddTask({
                name: taskName,
                description: taskDescription,
                user: props.task.user,
                status: taskStatus,
                taskId: props.task,
                added: dateAdded,
                updated: dateUpdated,
                isActive: true,
                isEdit: false
              });
            }
            else if (props.title === 'Edit') {
              props.onEditTask({
                name: taskName,
                description: taskDescription,
                user: props.task.user,
                status: taskStatus,
                taskId: props.task.taskId,
                added: dateAdded,
                updated: dateUpdated,
                isActive: true,
                isEdit: false
              });

            }
            setShow(false);



          }}>

            <Form.Group className="mb-3" controlId="taskName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}


              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}

              />
            </Form.Group>
            {getMenu()}



            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" >Submit</Button>
            </div>
          </Form>




        </Modal.Body>

      </Modal>
    </div>
  );
}

export default ModalComponent;