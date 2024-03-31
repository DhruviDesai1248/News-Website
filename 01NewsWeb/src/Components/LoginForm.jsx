import React, { useState } from "react";

function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with email:", email, "and password:", password);
    // After successful login, close the login form
    onClose();
    // You can perform additional actions here, such as displaying a success message
  };

  const handleRegister = () => {
    console.log("Registering with email:", email, "and password:", password);
    // After successful registration, close the login form
    onClose();
    // You can perform additional actions here, such as displaying a success message
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-background")) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50" onClick={handleClickOutside}>
      <div className="bg-gradient-to-br from-gray-300 to-gray-200 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login/Register</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between">
          <button onClick={handleLogin} className="w-1/2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600">
            Login
          </button>
          <button onClick={handleRegister} className="w-1/2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md focus:outline-none hover:bg-gray-400">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
