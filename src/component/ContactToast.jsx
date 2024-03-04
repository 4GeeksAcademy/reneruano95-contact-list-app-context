import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const ContactToast = (props) => {
    // const [show, setShow] = useState(false);

    return (
        <>
            <div>
                <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
                    <Toast onClose={props.onCloseToast} show={props.showToast} delay={props.delay} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Alert!</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>{props.toastBody}</Toast.Body>
                    </Toast>
                </ToastContainer>
                {/* <Button onClick={() => setShow(true)}>Show Toast</Button> */}
            </div>
        </>
    );
}
