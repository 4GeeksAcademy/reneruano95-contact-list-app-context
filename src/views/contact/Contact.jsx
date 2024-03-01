import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

import { ContactCard } from "../../component/ContactCard";
import { Context } from "../../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context)
    const [newContacts, setNewContacts] = useState({})

    useEffect(() => {
        setNewContacts(store.contacts);
    }, [newContacts]);

    const deleteContact = (id) => {
        actions.deleteContact(id)
        const newItems = newContacts.filter((item) => item.id !== id);
        setNewContacts(newItems);
    };

    return (
        <div className="container d-flex justify-content-center">
            {store.contacts ? (
                <ListGroup className="col-xs-12 col-md-8 col-lg-6 gap-2">
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
                <h1>Loading...</h1>
            )}
            {/* {!store.contacts ? (
                <h1 className="text-center">Please create a contact</h1>
            ) : ''} */}
        </div >
    )
}

