import React from "react";
import { Button, Col, Form } from "react-bootstrap";

export const AddContact = () => {
    return (

        <div className="container">
            <h1 className="text-center">Add a new contact</h1>

            <Form>
                <div className="row justify-content-center ">
                    <div className="col-sm-10 mb-2">
                        <Button variant="secondary" className="d-flex align-items-center justify-content-between">
                            <p className="ps-1 m-0">Go Back</p>
                        </Button>
                    </div>

                    <div className="col-sm-10 col-md-4 mb-2">
                        <Form.Group as={Col} controlId="formGridFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter full name" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-10 col-md-6 mb-2">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-10 col-md-4 mb-2">
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="Enter phone number" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-10 col-md-6 mb-2">
                        <Form.Group as={Col} controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-10">
                        <Button className="w-100" variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>

                </div >
            </Form >
        </div >
    )
}