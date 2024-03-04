import React from "react";
import { Button, Image, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { VerticallyCenteredModal } from "./VerticallyCenteredModal";

export const ContactCard = (props) => {


    return (
        <>
            <ListGroup.Item className="d-flex justify-content-between align-items-center border border-2" id={props.id}>
                <div className="d-flex align-items-center">
                    <div>
                        <Image src={`https://fakeimg.pl/100x100?text=${props.textImg}`} rounded />
                    </div>
                    <div className="ms-3">
                        <p className="mb-1 fs-5">{props.fullName}</p>
                        <p className="mb-1 text-secondary"><FaLocationDot /> {props.address}</p>
                        <p className="mb-1 text-secondary"><FaPhone /> {props.phone}</p>
                        <p className="mb-0 text-secondary"><IoMdMail /> {props.email}</p>
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
                        <Link to={"/contact/" + props.id}>
                            <Button variant="secondary" className="d-flex align-items-center">
                                <FaEdit />
                            </Button>
                        </Link>
                    </OverlayTrigger>
                    {/* */}
                    <OverlayTrigger
                        key='bottom'
                        placement='bottom'
                        overlay={
                            <Tooltip id='tooltip-bottom'>
                                Delete
                            </Tooltip>
                        }
                    >
                        <Button variant="danger" className="d-flex align-items-center" onClick={props.onShowModal}>
                            <RiDeleteBin5Fill />
                        </Button>
                    </OverlayTrigger>
                </div>

            </ListGroup.Item >
        </>
    )
}