import React, { Component, useEffect, useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage/index";
import Nav from "./components/Nav/index";
import "tailwindcss/tailwind.css";


function App() {
  document.title = "BarU";

  return (
    <Router>
      <Nav />
      <Route exact path="/" component={SearchPage} />

    </Router>
  );
}

export default App;
