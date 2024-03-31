import React, { useState } from "react";

function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () => {
    console.log("Logging in with email:", email, "and password:", password);
    // After successful login, close the login form and show popup
    onClose();
    setShowPopup(true);
    // You can perform additional actions here, such as displaying a success message
  };

  const handleRegister = () => {
    console.log("Registering with email:", email, "and password:", password);
    // After successful registration, close the login form and show popup
    onClose();
    setShowPopup(true);
    // You can perform additional actions here, such as displaying a success message
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-background")) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50" onClick={handleClickOutside}>
      <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login/Register</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between">
          <button onClick={handleLogin} className="w-1/2 px-6 py-3 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Login
          </button>
          <button onClick={handleRegister} className="w-1/2 px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            Register
          </button>
        </div>
        <button onClick={onClose} className="mt-6 w-full px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
          Close
        </button>
        {showPopup && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-md">
              <p className="text-center text-green-600 font-semibold">Login Successful!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
