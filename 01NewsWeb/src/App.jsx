import AdvertTop from "./Components/AdvertTop/AdvertTop";
import Navbar from "./Components/Navbar/Navbar";
import NavbarTop from "./Components/NavbarTop/NavbarTop";
import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <div>
        <NavbarTop />
        <AdvertTop />
        <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery}  />
        <NewsBoard category={category} searchQuery={searchQuery} />
        <Footer /> 
      </div>
    </>
  );
}

export default App;
 /*fe3c74d8a5c44644bcb6e0a71ec3cf10
 
 332547602429-7hfpi0a4oq1u0klj61ivn9l3vjb7qoa0.apps.googleusercontent.com
 */