import React, { Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DeleteModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal: false
        }
    }
  
    toggle = () => { 
        this.setState ( { modal: !this.state.modal } ) 
    }

    render(){
    return (
      <div>
          <br/>
        <Button color="danger" onClick={this.toggle} className="hvr-float">Delete Pet</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Confirm</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this pet?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.handleClick}>Yes, delete pet</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
  export default DeleteModal;