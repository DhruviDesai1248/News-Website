import React, { useState, useEffect } from "react";
import { MdLocationOn, MdOutlinePersonOutline } from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";
import { BiCalendar } from "react-icons/bi";
import { MdOutlineLanguage } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { ImGoogle } from "react-icons/im";
import { MdRssFeed } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import LoginForm from "../LoginForm";

function NavbarTop() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showLanguages, setShowLanguages] = useState(false);
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Gujarati",
    "Hindi",
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguages(false);
  };

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser({});
    setLoggedIn(false);
  };

  useEffect(() => {
    // Update current date initially
    updateCurrentDate();

    // Fetch weather data using current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeatherData);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    // Update current date every day at midnight
    const intervalId = setInterval(() => {
      updateCurrentDate();
    }, 86400000); // 24 hours in milliseconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const updateCurrentDate = () => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  };

  const fetchWeatherData = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = "b045109e10035649ab293fd9d853edb8";
    // Fetch weather data from OpenWeatherMap API using latitude and longitude
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentWeather(data.main.temp);
        setCurrentLocation(data.name);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  // Function to toggle LoginForm visibility
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 bg-black text-gray-400 font-normal text-sm break-words font-sans box-border">
      <div className="relative flex flex-col md:flex-row items-center justify-between px-4 py-4 md:py-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-15 justify-center md:justify-start">
          <div className="flex items-center px-2 cursor-pointer hover:text-white">
            <MdLocationOn style={{ fontSize: "16px" }} />
            <span>{currentLocation}</span>
          </div>
          <div className="flex items-center px-2 cursor-pointer hover:text-white">
            <WiDayCloudy style={{ fontSize: "16px" }} />
            <span>{currentWeather}°C</span>
          </div>
          <div className="flex items-center px-2 cursor-pointer hover:text-white">
            <BiCalendar style={{ fontSize: "16px" }} />
            <span>{currentDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-15 justify-center md:justify-end mt-4 md:mt-0">
          {user && Object.keys(user).length !== 0 ? (
            <div className="flex items-center px-2 cursor-pointer hover:text-white">
              <MdOutlinePersonOutline style={{ fontSize: "18px" }} />
              <span>{user.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-1 ml-2 bg-gray-700 text-white rounded-md hover:bg-black focus:outline-none focus:bg-gray-700"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div
              className="flex items-center px-2 cursor-pointer hover:text-white"
              onClick={toggleLoginForm}
            >
              <MdOutlinePersonOutline style={{ fontSize: "18px" }} />
              <span>{loggedIn ? user.name : "Login/Register"}</span>
            </div>
          )}
          {showLoginForm && <LoginForm onClose={toggleLoginForm} />}
          {loggedIn ? null : (
            <GoogleLogin
              clientId="332547602429-7hfpi0a4oq1u0klj61ivn9l3vjb7qoa0.apps.googleusercontent.com"
              onSuccess={handleLoginSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          )}

          <div className="relative">
            <div
              className="flex items-center px-2 cursor-pointer hover:text-white"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <MdOutlineLanguage style={{ fontSize: "18px" }} />
              <span>{selectedLanguage}</span>
              <RxCaretDown style={{ fontSize: "18px" }} />
            </div>
            {showLanguages && (
              <div className="absolute top-full bg-white text-black border border-gray-300 rounded-md mt-2">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleLanguageChange(language)}
                  >
                    {language}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <RiFacebookBoxFill style={{ fontSize: "18px" }} />
            <RiTwitterFill style={{ fontSize: "18px" }} />
            <ImGoogle style={{ fontSize: "18px" }} />
            <MdRssFeed style={{ fontSize: "18px" }} />
            <FaYoutube style={{ fontSize: "18px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
