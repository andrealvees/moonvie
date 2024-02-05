import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<App />} />
    </BrowserRouter>
  );
};
