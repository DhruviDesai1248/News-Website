import React, { useState } from "react";
import AdvertTop from "./Components/AdvertTop/AdvertTop";
import Navbar from "./Components/Navbar/Navbar";
import NavbarTop from "./Components/NavbarTop/NavbarTop";
import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm"; // Importing LoginForm component
import "./App.css";

function App() {
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false); // State to manage LoginForm visibility

  // Function to toggle LoginForm visibility
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      <NavbarTop />
      <AdvertTop />
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} toggleLoginForm={toggleLoginForm} /> {/* Passing toggleLoginForm to Navbar */}
      {showLoginForm && <LoginForm onClose={toggleLoginForm} />} {/* Rendering LoginForm if showLoginForm is true */}
      <NewsBoard category={category} searchQuery={searchQuery} />
      <Footer /> 
    </div>
  );
}

export default App;
