import React from "react";
import { Button, Image, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const ContactCard = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div>
                    <Image src="https://fakeimg.pl/100x100?text=dsd" rounded />
                </div>
                <div className="ms-3">
                    <p className="mb-1 fs-5">Full Name</p>
                    <p className="mb-1 text-secondary"><FaLocationDot /> Adress</p>
                    <p className="mb-1 text-secondary"><FaPhone /> Phone</p>
                    <p className="mb-0 text-secondary"><IoMdMail /> Email</p>
                </div>
            </div>
            <div className="d-flex flex-column gap-1">
                <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                        <Tooltip id='tooltip-top'>
                            Edit
                        </Tooltip>
                    }
                >
                    <Button variant="secondary" className="d-flex align-items-center">
                        <FaEdit />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Tooltip id='tooltip-bottom'>
                            Delete
                        </Tooltip>
                    }
                >
                    <Button variant="danger" className="d-flex align-items-center">
                        <RiDeleteBin5Fill />
                    </Button>
                </OverlayTrigger>
            </div>
        </ListGroup.Item >
    )
}