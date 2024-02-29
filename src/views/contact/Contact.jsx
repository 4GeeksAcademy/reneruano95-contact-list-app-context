import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

import { ContactCard } from "../../component/ContactCard";
import { Context } from "../../store/appContext";

export const Contact = () => {
    const { store } = useContext(Context)

    return (
        <div className="container d-flex justify-content-center">
            {store.contacts ? (
                <ListGroup className="col-xs-12 col-md-8 col-lg-6 gap-2">
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
                </ListGroup >
            ) : (
                <h1>Loading...</h1>
            )}
        </div >
    )
}
