import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { store } = useContext(Context)


    return (
        <div className="container">
            {store.contacts ? (
                <ListGroup>
                    {
                        store.contacts.map((item, index) => {
                            return (
                                <ContactCard
                                    key={index}
                                    id={item.id}
                                    fullName={item.full_name}
                                    address={item.address}
                                    phone={item.phone}
                                    email={item.email}
                                />)
                        })
                    }
                </ListGroup>
            ) : (
                <h1>Loading...</h1>
            )}
        </div >
    )
}

