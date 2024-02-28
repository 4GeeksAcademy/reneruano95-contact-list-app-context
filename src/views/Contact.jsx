import React from "react";
import { ContactCard } from "../component/ContactCard";
import { ListGroup } from "react-bootstrap";

export const Contact = () => {
    return (
        <div className="container">
            <ListGroup>
                <ContactCard />
            </ListGroup>
        </div >
    )
}

