import React, { useHistory, useContext, useState, useEffect } from "react";

import { Button, Modal, Form, Alert } from "react-bootstrap";

import { AppContext } from "../../context/AppContext";

export default function ModalRegister({
  registerShow,
  setLoginShow,
  setRegisterShow,
}) {
  const [message, setMessage] = useState("");
  const [messageShow, setMessageShow] = useState(false);

  return (
    <div>
      <Modal
        size="sm"
        show={registerShow}
        onHide={() => setRegisterShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{ borderColor: "#1F1F1F  " }}
        centered
      >
        <Modal.Header
          className="bg-modal"
          style={{ border: "0", color: "#fff" }}
        >
          <Modal.Title id="example-modal-sizes-title-sm">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-modal">
          {message && <Alert variant="danger">{message}</Alert>}
          <Form>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              required
              style={{ margin: "0 0 15px 0" }}
              className="input1"
            />
            <Form.Control
              name="fullname"
              type="text"
              placeholder="Name"
              required
              style={{ margin: "0 0 15px 0" }}
              className="input1"
            />
            <Form.Control
              name="username"
              type="text"
              placeholder="Username"
              required
              style={{ margin: "0 0 15px 0" }}
              className="input1"
            />
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
              style={{ margin: "0 0 15px 0" }}
              className="input1"
            />
            <Button
              type="submit"
              className="btn-register2"
              style={{
                width: "100%",
                margin: "20px 0 0 0",
              }}
            >
              Register
            </Button>
            <center>
              <p style={{ margin: "20px 0 20px 0", color: "#B1B1B1" }}>
                Already have an account..? Klik{" "}
                <strong
                  style={{
                    cursor: "pointer",
                    color: "#B1B1B1",
                  }}
                  onClick={() => {
                    setLoginShow(true);
                    setRegisterShow(false);
                  }}
                >
                  Here
                </strong>
              </p>
            </center>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
