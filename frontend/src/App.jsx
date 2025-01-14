import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layouts/Layout";
import Conditions from "./pages/Conditions";
import InsuranceDetailsPage from "./pages/InsuranceDetailsPage";
import Generator from "./pages/Offer-letter/Main"
import LetterHead from "./pages/Letter-head/Main"
import AppointmentLetter from "./pages/Appointment/Main"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Home2 />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/insurance-details/:title" element={<InsuranceDetailsPage />} />
          <Route path="/offer-letter" element={<Generator />} />
          <Route path="/letter-head" element={<LetterHead />} />
          <Route path="/appointment-letter" element={<AppointmentLetter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
