import React, { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import "./Postjob.css";

const Postjob = () => {

    const [success, setSuccess] = useState(false);

    return (

        <div className="p-5">

            <Container className="contact-form post-job-img">

                <div className="postJob-overlay">

                    <form className="w-75 mx-auto">

                        <h2 className="text-dark fw-bold my-5">Post Job Requirement Informations</h2>

                        <input
                            type="text"
                            placeholder="Job title"
                            className="form-control"
                            required
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            placeholder="Job type"
                            className="form-control"
                            required
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            placeholder="Company name"
                            className="form-control"
                            required
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            placeholder="Location"
                            className="form-control"
                            required
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            placeholder="Posting date"
                            className="form-control"
                            required
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            placeholder="Deadline"
                            className="form-control"
                            required
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            placeholder="Job"
                            className="form-control"
                            required
                        ></input>{" "}
                        <br /> <br />
                        <textarea
                            name="message"
                            placeholder="Job description"
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
                            Post
                        </Button>{" "}
                        <br /> <br />
                        {success && (
                            <Alert variant="primary">
                                Your post Successfully!
                            </Alert>
                        )}
                    </form>
                </div>

            </Container>
        </div>
    );
};

export default Postjob;
