import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, ToastContainer } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { ContactToast } from "../../component/ContactToast";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [contacts, setContacts] = useState({
        full_name: '',
        email: '',
        address: '',
        phone: ""
    })
    const [showToast, setShowToast] = useState(false);

    const params = useParams()
    let location = useLocation();
    // const navigate = useNavigate();


    const handleSubmit = (e) => {
        setShowToast(true)
        e.preventDefault()
        setContacts({
            full_name: '',
            email: '',
            address: '',
            phone: ''
        })

        const timer = setTimeout(() => {
            if (location.pathname === '/add-contact') {
                window.location.reload()
                return actions.createContact(contacts.full_name, contacts.email, contacts.address, contacts.phone);
            } else {
                window.location.reload()
                return actions.updateContact(contacts.full_name, contacts.email, contacts.address, contacts.phone, params.theid);
            }
        }, 3000);
        // navigate("/contact")
        return function cleanUp() {
            clearTimeout(timer);
        };
    }

    return (
        <div className="container">
            {location.pathname === '/add-contact' ? (
                <h1 className="text-center">Add a new contact</h1>
            ) : (
                <h1 className="text-center"> Update contact ID: {params.theid}</h1>
            )}
            <Form>
                <div className="row justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-sm-10 mb-2">
                            <Link to='/contact' className="text-decoration-none">
                                <Button variant="secondary" className="d-flex align-items-center justify-content-between">
                                    <p className="ps-1 m-0">Go Back</p>
                                </Button>
                            </Link>
                        </div>

                        <div className="col-sm-10 col-md-4 mb-2">
                            <Form.Group as={Col} controlId="formGridFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter full name"
                                    value={contacts.full_name}
                                    onChange={(e) => { setContacts({ ...contacts, full_name: e.target.value }) }}
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="col-sm-10 col-md-6 mb-2">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={contacts.email}
                                    onChange={(e) => { setContacts({ ...contacts, email: e.target.value }) }}
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="col-sm-10 col-md-4 mb-2">
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>Phone, format: 123-456-7890</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter phone number"
                                    value={contacts.phone}
                                    onChange={(e) => { setContacts({ ...contacts, phone: e.target.value }) }}
                                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="col-sm-10 col-md-6 mb-2">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter address"
                                    value={contacts.address}
                                    onChange={(e) => { setContacts({ ...contacts, address: e.target.value }) }}
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="col-sm-10">
                            <Button className="w-100" variant="primary" type="submit" onClick={handleSubmit}>
                                {location.pathname === '/add-contact' ? 'Submit' : 'Update'}
                            </Button>
                        </div>
                    </div>
                </div >
            </Form >

            <ContactToast
                onCloseToast={() => setShowToast(false)}
                showToast={showToast}
                delay={3000}
                toastBody={`Contact ${location.pathname === '/add-contact' ? 'created' : 'updated'}`}
            />

        </div >
    )
}