// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import User from './User';
import Staff from './Staff';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/user" element={<User />} />
            <Route path="/staff" element={<Staff />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
