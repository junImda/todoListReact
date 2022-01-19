import React from "react";
import {Col, Row, Modal, Button, InputGroup, FormControl, Card} from "react-bootstrap";
import { useState } from "react";

const ToDo = props => (
    <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Todo: {props.id}</Card.Title>
                <Card.Text>
                {props.content}
                </Card.Text>
            </Card.Body>
            <Button val={props.id} onClick={() => props.test.removeTodo(props.id)}>Close</Button>
        </Card>
    </Col>
  );
  
class ToDoList extends React.Component {

    constructor() {
      super();
      const todoCounter = 1;
      this.state = {
        todoCounter: todoCounter,
        list: [
          {
            id: todoCounter, 
            content: 'example'
          },
        ],
      };
    }

    updateInputValue(evt) {
        console.log(evt)
        console.log(evt.target.value)
        let saveInputValue = evt.target.value
        this.setState({
          content: saveInputValue
        });
        console.log(this.state)
      }
    
    removeTodo(id){
        let list = [...this.state.list]
        const newList = list.filter((item) => item.id !== id);
        this.setState({list: newList})
    }

    render() {
      return (
        <div>
            <LaunchModal test={this}></LaunchModal>
            <Col>
            {this.state.list.map((todo, index) => (
              <div class="mx-5 mb-3">
                <ToDo key={index}  {...todo} test={this}/>
              </div>
            ))}
            </Col>
        </div>
      );
    }
}

function addToEnd(text) {
    const nextId = this.state.todoCounter + 1;
    const newList = [
      ...this.state.list,
      {id: nextId, content: text},
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
}

function handleChange() {
    /* 3. Get Ref Value here (or anywhere in the code!) */
    const value = this.textInput.current.value;
 }

function LaunchModal(props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    
    return (
      <>
        <Button className="mb-5" variant="primary" onClick={handleShow}>
          Add a Todo
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
          <Modal.Title>Add a Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <InputGroup size="sm" className="mb-3">
                <FormControl value={props.test.state.inputValue}
                     onChange={evt => props.test.updateInputValue(evt)}
                    placeholder="Enter Text" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {addToEnd.bind(props.test)(props.test.state.content); handleClose();}} > 
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
//   onClick={() => {handleClose();addToEnd().bind(props.test);}}

  export default ToDoList