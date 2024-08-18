import React from "react";
import Feed from "../src/pages/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/watch" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
