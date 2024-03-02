import React, { useContext, useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

import { ContactCard } from "../../component/ContactCard";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const Contact = () => {
    const { store, actions } = useContext(Context)

    const deleteContact = (id) => {
        actions.deleteContact(id)
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 mb-2 d-flex justify-content-end">
                    <Link to='/add-contact' className="text-decoration-none">
                        <Button variant="secondary" className="d-flex align-items-center justify-content-between">
                            <p className="ps-1 m-0">Add new contact</p>
                        </Button>
                    </Link>
                </div>
                {store.contacts ? (
                    <ListGroup className="col-sm-10 col-md-8 col-lg-6 gap-2">
                        {store.contacts.map((item, index) => {
                            return (
                                <ContactCard
                                    key={index}
                                    id={item.id}
                                    fullName={item.full_name}
                                    address={item.address}
                                    phone={item.phone}
                                    email={item.email}
                                    onClickDeleteButton={() => {
                                        deleteContact(item.id)
                                    }}
                                />
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

