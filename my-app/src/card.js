import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Modal, ListGroup} from 'react-bootstrap';
import './card.css'

class CardPortfolio extends React.Component {  

  state = {
    showContactMe: false
  }

  handleShowContactMe  = event => {
    this.setState({showContactMe: true});
  };

  handleCloseContactMe = event => {
    this.setState({showContactMe: false});
  };

  render() {

    return (
    <>

    


    <Modal show={this.state.showContactMe} onHide={this.handleCloseContactMe} size="sm">
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup.Item className="modalList"><a href="mailto:cscrocker84@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></ListGroup.Item>
        <ListGroup.Item className="modalList"><a href="https://www.linkedin.com/in/cscrocker84/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></ListGroup.Item>
        <ListGroup.Item className="modalList"><a href="https://github.com/cscrocker84" target="_blank" rel="noopener noreferrer">GitHub Page</a></ListGroup.Item>
      </Modal.Body>
    </Modal>

    </>
    )
  }
}

export default CardPortfolio 