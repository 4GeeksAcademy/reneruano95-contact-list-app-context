import React, { useContext, useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

import { ContactCard } from "../../component/ContactCard";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { VerticallyCenteredModal } from "../../component/VerticallyCenteredModal";

export const Contact = () => {
    const { store, actions } = useContext(Context)

    const [show, setShow] = useState(false)
    const [selectedId, setSelectedId] = useState(null);

    const deleteContact = (id) => {
        actions.deleteContact(id)
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8  mb-2 d-flex justify-content-end">
                    <Link to='/add-contact' className="text-decoration-none">
                        <Button variant="secondary" className="d-flex align-items-center justify-content-between">
                            <p className="ps-1 m-0">Add new contact</p>
                        </Button>
                    </Link>
                </div>
                {store.contacts ? (
                    <ListGroup className="col-sm-10 col-md-8 gap-2">
                        {
                            store.contacts.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <ContactCard
                                            id={item.id}
                                            fullName={item.full_name}
                                            address={item.address}
                                            phone={item.phone}
                                            email={item.email}
                                            onShowModal={() => {
                                                setShow(true)
                                                setSelectedId(item.id)
                                            }}
                                        />
                                        <VerticallyCenteredModal
                                            title='Are you sure?'
                                            description='If you delete this thing the entire universe will go down!'
                                            onClickDeleteButton={() => deleteContact(selectedId)}
                                            show={show}
                                            onHide={() => setShow(false)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </ListGroup >
                ) : (
                    <h1 className="text-center">Loading...</h1>
                )}
            </div>
        </div >
    )
}

