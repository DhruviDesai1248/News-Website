import React, { useState } from "react";

function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Logging in with email:", email, "and password:", password);
    // After successful login, close the login form
    onClose();
    // You can perform additional actions here, such as displaying a success message
  };

  const handleRegister = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
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
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login/Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
