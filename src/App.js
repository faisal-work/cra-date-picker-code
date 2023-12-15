import React, { useState } from "react";
import DatePicker from "react-date-picker";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "40%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          DatePicker demo with create react app configuration overide
        </h1>

        <DatePicker />
      </div>
    </div>
  );
}

export default App;
