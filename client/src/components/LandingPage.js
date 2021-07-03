import React, { useState, useContext } from "react";

// import bootstrap
import { Button } from "react-bootstrap";

// import context
import { AppContext } from "../Context/AppContext";

import ModalLogin from "./modal/ModalLogin";
import ModalRegister from "./modal/ModalRegister";

export default function LandingPage() {
  const [state, dispatch, hari] = useContext(AppContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const onLogin = () => {
    setShowLogin(true);
  };
  const onRegister = () => {
    setShowRegister(true);
  };

  // FromMyself
  const [loginShow, setSigInShow] = useState(false);
  const [sigUpShow, setSigUpShow] = useState(false);
  const onSwitchLogin = () => {
    setSigUpShow(false);
    setSigInShow(true);
  };
  const onSwitchSigUp = () => {
    setSigInShow(false);
    setSigUpShow(true);
  };
  // EndFromMySelf

  return (
    <div>
      <h1>This is LandingPage contoh</h1>
      <Button onClick={onSwitchSigUp}>Login</Button>
      <ModalRegister sigUpShow={sigUpShow} setSigUpShow={setSigUpShow} />
    </div>
  );
}
