import React, { useState, useContext } from "react";

// import bootstrap
import { Row, Col, Button, Image, Card } from "react-bootstrap";

// import component
import ModalLogin from "./modal/ModalLogin";
import ModalRegister from "./modal/ModalRegister";

// import image
import Dumbgram from "../img/DumbGram.png";
import Rectangle3 from "../img/Rectangle 3.png";
import Rectangle4 from "../img/Rectangle 4.png";
import Rectangle5 from "../img/Rectangle 5.png";
import Rectangle6 from "../img/Rectangle 6.png";
import Rectangle8 from "../img/Rectangle 8.png";
import Rectangle9 from "../img/Rectangle 9.png";
import Rectangle10 from "../img/Rectangle 10.png";
import Rectangle12 from "../img/Rectangle 12.png";

export default function LandingPage() {
  // FromMyself
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const onSwitchLogin = () => {
    setRegisterShow(false);
    setLoginShow(true);
  };
  const onSwitchRegister = () => {
    setRegisterShow(true);
    setLoginShow(false);
  };
  // EndFromMySelf

  return (
    <Row>
      <Col
        md={10}
        style={{
          marginLeft: "150px",
          marginTop: "70px",
          paddingRight: "0",
        }}
      >
        <Row>
          <Col md={5}>
            <Image
              src={Dumbgram}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <p
              style={{
                fontSize: "50px",
                marginTop: "70px",
                color: "#fff",
              }}
            >
              Share your best photos or videos
            </p>
            <p
              style={{
                fontSize: "24px",
                marginTop: "20px",
                color: "#6A6A6A",
              }}
            >
              Join now, share your creations with another people and enjoy other
              creations.
            </p>
            <Row style={{ marginTop: "40px" }}>
              <Col sm={5}>
                <Button className="btn-login" onClick={onSwitchLogin}>
                  Login
                </Button>
                <ModalLogin
                  loginShow={loginShow}
                  setLoginShow={setLoginShow}
                  setRegisterShow={setRegisterShow}
                />
              </Col>
              <Col sm={5}>
                <Button className="btn-register" onClick={onSwitchRegister}>
                  Register
                </Button>
                <ModalRegister
                  registerShow={registerShow}
                  setRegisterShow={setRegisterShow}
                  setLoginShow={setLoginShow}
                />
              </Col>
            </Row>
          </Col>
          <Col
            md={7}
            style={{
              paddingLeft: "30px",
              paddingRight: "20px",
            }}
          >
            <Row>
              <Col sm={3} style={{ marginRight: "10px", padding: "0" }}>
                <Card.Img
                  style={{
                    marginBottom: "10px",
                  }}
                  src={Rectangle6}
                />
                <Card.Img
                  style={{
                    marginBottom: "10px",
                  }}
                  src={Rectangle5}
                />
                <Card.Img
                  style={{
                    marginBottom: "10px",
                  }}
                  src={Rectangle10}
                />
              </Col>
              <Col sm={3} style={{ marginRight: "10px", padding: "0" }}>
                <Card.Img
                  style={{
                    marginBottom: "10px",
                  }}
                  src={Rectangle3}
                />
                <Card.Img
                  style={{
                    marginBottom: "10px",
                  }}
                  src={Rectangle9}
                />
              </Col>
              <Col sm={3} style={{ marginRight: "10px", padding: "0" }}>
                <Card.Img
                  style={{
                    marginBottom: "10px",
                  }}
                  src={Rectangle4}
                />
                <Card.Img
                  style={{
                    marginBottom: "10px",
                  }}
                  src={Rectangle8}
                />
                <Card.Img
                  style={{
                    marginBottom: "10px",
                  }}
                  src={Rectangle12}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
