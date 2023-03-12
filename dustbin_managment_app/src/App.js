import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />

        <Route path="/*" element={<Layout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
