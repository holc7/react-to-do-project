import { useState } from "react";
import "./App.css";
import MainContainer from "./Components/Container";
import TopNavBar from "./Components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "react-calendar";
import DigitalClock from "./Components/DigitalClock";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainContainer />
      {/* <Calendar /> */}
      {/* <DigitalClock /> */}
    </BrowserRouter>
  );
}

export default App;
