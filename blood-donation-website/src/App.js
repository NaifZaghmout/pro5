// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import User from './pages/User';
import Signup from './components/Staff-Singup';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';
import Login from './components/staff-login';

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
            <Route path="/staff-signup" element={<Signup />} />
            <Route path="/staff-login" element={<Login />} />
            <Route path="/NotFoundPage" element={<NotFoundPage />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;