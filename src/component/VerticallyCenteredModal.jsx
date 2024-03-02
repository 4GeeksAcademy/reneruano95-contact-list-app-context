import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const VerticallyCenteredModal = (props) => {
    const { title, description, onHide, onClickDeleteButton, ...otherProps } = props
    return (
        <Modal
            {...otherProps}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide} >
                    Close
                </Button>
                <Button variant="danger" onClick={onClickDeleteButton}>
                    Delete
                </Button>
            </Modal.Footer>

        </Modal>
    );
}