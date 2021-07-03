import React, { useContext, useEffect, useState } from "react";

// import react-router-dom
import { BrowserRouter as Router, useHistory } from "react-router-dom";

// import { API } from "../config/Api";

// import Components
import MainAdmin from "./MainAdmin";
import LandingPage from "./LandingPage";

// import page

// import context
// import { AppContext } from "../Context/AppContext";

export default function CheckLogin() {
  const [stateLogin, steStateLogin] = useState(false);
  return (
    <div>
      <Router>{stateLogin === true ? <MainAdmin /> : <LandingPage />}</Router>
    </div>
  );
}
