import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import {
    AiFillFacebook,
    AiFillLinkedin,
    AiFillTwitterSquare,
} from "react-icons/ai";

const Contact = () => {
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        emailjs
            .sendForm(
                "service_dvg6d1l",
                "template_6uw69ov",
                e.target,
                "user_6G3ltyQPq4D913yRocuZG"
            )
            .then((data) => {
                setSuccess(true);
            })
            .catch((err) => {
                setSuccess(false);
            });
        e.preventDefault();
    };

    return (
        <Container>
            <div className="contact-form text-start">
                <form className="w-50" onSubmit={sendEmail}>
                    <h2 className="text-primary mb-5 fw-bold py-2">Contact with us</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="form-control"
                        required
                    ></input>{" "}
                    <br /> <br />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your email"
                        className="form-control"
                        required
                    ></input>{" "}
                    <br /> <br />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        className="form-control"
                        required
                    ></textarea>{" "}
                    <br />
                    <Button
                        value="send"
                        className="form-control"
                        type="submit"
                        variant="primary"
                    >
                        Send
                    </Button>{" "}
                    <br /> <br />
                    {success && (
                        <Alert variant="primary">
                            Your Email Send Successfully!
                        </Alert>
                    )}
                </form>
            </div> <hr />

            <Container className="py-5">
                <Row>
                    <Col xs={12} md={8}>
                        <h2 className="text-primary fw-bold">Address</h2>
                        <p>Road: 4 Sector 1, Uttara Dhaka-1230, Bangladesh.</p>
                    </Col>
                    <Col xs={12} md={4} className="social-link-text text-start">
                        <h2 className="text-primary fw-bold text-center">Social links</h2>
                        <div className="d-flex justify-content-around">
                            <a href="#">
                                <AiFillFacebook style={{ fontSize: '45px', color: '#333', borderRadius: '50px' }} />
                            </a>
                            <a href="#">
                                <AiFillTwitterSquare style={{ fontSize: '45px', color: '#333', borderRadius: '50px' }} />
                            </a>
                            <a href="#">
                                <AiFillLinkedin style={{ fontSize: '45px', color: '#333', borderRadius: '50px' }} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Contact;
