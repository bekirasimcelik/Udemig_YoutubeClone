import React from "react";
import Feed from "../src/pages/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
