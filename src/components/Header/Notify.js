import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Notify() {

    return (
        <div className="modal"
            style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog animation >
                <Modal.Header closeButton>
                    <Modal.Title>Do You Select your BootCamp on the Next August?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Please select Your Choice.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" >Close</Button>
                    <Button variant="primary" >Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
