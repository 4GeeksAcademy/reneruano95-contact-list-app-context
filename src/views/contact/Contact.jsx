import React, { useContext, useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

import { ContactCard } from "../../component/ContactCard";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { VerticallyCenteredModal } from "../../component/VerticallyCenteredModal";

export const Contact = () => {
    const { store, actions } = useContext(Context)

    const [show, setShow] = useState(false)

    const deleteContact = (id) => {
        actions.deleteContact(id)

        window.location.reload()
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
                        {store.contacts.map((item, index) => {
                            return (
                                <>
                                    <ContactCard
                                        key={index}
                                        id={item.id}
                                        fullName={item.full_name}
                                        address={item.address}
                                        phone={item.phone}
                                        email={item.email}
                                        onShowModal={() => setShow(true)}
                                    />
                                    <VerticallyCenteredModal
                                        key={item.id}
                                        title='Are you sure?'
                                        description='If you delete this thing the entire universe will go down!'
                                        onClickDeleteButton={() => {
                                            deleteContact(item.id)
                                        }}
                                        show={show}
                                        onHide={() => setShow(false)}
                                    />
                                </>
                            )
                        })}
                    </ListGroup >
                ) : (
                    <h1 className="text-center">Loading...</h1>
                )}
                {/* {!store.contacts ? (
                <h1 className="text-center">Please create a contact</h1>
            ) : ''} */}
            </div>
        </div >
    )
}

